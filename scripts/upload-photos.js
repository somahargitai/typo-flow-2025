#!/usr/bin/env node

/**
 * Photo Upload Script
 *
 * This script processes JPG images from the photo-uploads folder,
 * generates web-optimized images and thumbnails, uploads them to
 * Cloudflare R2 storage, and updates a JSON file with image metadata.
 *
 * Usage: node scripts/upload-photos.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { S3Client } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import dotenv from 'dotenv'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configuration
const PHOTO_UPLOADS_DIR = path.join(__dirname, '../photo-uploads')
const IMAGES_JSON_PATH = path.join(__dirname, '../src/data/images.json')
const THUMBNAIL_SIZE = { width: 300, height: 300 }
const FULL_IMAGE_SIZE = { width: 1920, height: 1080 }

// Cloudflare R2 Configuration
const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY
const R2_BUCKET_NAME = process.env.R2_BUCKET_NAME
const R2_PUBLIC_URL = process.env.R2_PUBLIC_URL // e.g., https://your-domain.r2.dev

// Initialize S3 client for Cloudflare R2
const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
})

/**
 * Ensure images.json exists with proper structure
 */
function ensureImagesJson() {
  const imagesDir = path.dirname(IMAGES_JSON_PATH)
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true })
  }

  if (!fs.existsSync(IMAGES_JSON_PATH)) {
    const initialData = {
      images: [],
      lastUpdated: new Date().toISOString(),
    }
    fs.writeFileSync(IMAGES_JSON_PATH, JSON.stringify(initialData, null, 2))
    console.log('Created images.json file')
  }
}

/**
 * Load existing images from JSON
 */
function loadImagesJson() {
  ensureImagesJson()
  const data = fs.readFileSync(IMAGES_JSON_PATH, 'utf8')
  return JSON.parse(data)
}

/**
 * Save images to JSON
 */
function saveImagesJson(data) {
  data.lastUpdated = new Date().toISOString()
  fs.writeFileSync(IMAGES_JSON_PATH, JSON.stringify(data, null, 2))
  console.log(`Updated images.json with ${data.images.length} images`)
}

/**
 * Process and resize image
 */
async function processImage(
  inputPath,
  outputPath,
  width,
  height,
  quality = 85
) {
  await sharp(inputPath)
    .resize(width, height, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .jpeg({ quality, mozjpeg: true })
    .withMetadata() // Correct usage to preserve all metadata, including EXIF
    .toFile(outputPath)

  return outputPath
}

/**
 * Upload file to R2
 */
async function uploadToR2(filePath, key) {
  const fileStream = fs.createReadStream(filePath)
  const stats = fs.statSync(filePath)

  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: R2_BUCKET_NAME,
      Key: key,
      Body: fileStream,
      ContentType: 'image/jpeg',
    },
    partSize: 1024 * 1024 * 5, // 5MB chunks
  })

  await upload.done()

  // Construct public URL
  // If R2_PUBLIC_URL ends with /, remove it to avoid double slashes
  const baseUrl = R2_PUBLIC_URL.endsWith('/')
    ? R2_PUBLIC_URL.slice(0, -1)
    : R2_PUBLIC_URL
  return `${baseUrl}/${key}`
}

/**
 * Generate unique filename with timestamp
 */
function generateUniqueFilename(originalName, suffix = '') {
  const ext = path.extname(originalName)
  const name = path.basename(originalName, ext)
  const timestamp = Date.now()
  return `${name}-${timestamp}${suffix}${ext}`
}

/**
 * Process a single image file
 */
async function processImageFile(imagePath) {
  const filename = path.basename(imagePath)
  console.log(`Processing: ${filename}`)

  try {
    // Generate unique filenames
    const thumbnailFilename = generateUniqueFilename(filename, '-thumb')
    const fullImageFilename = generateUniqueFilename(filename, '-full')

    // Create temp directory
    const tempDir = path.join(__dirname, '../temp')
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true })
    }

    const thumbnailPath = path.join(tempDir, thumbnailFilename)
    const fullImagePath = path.join(tempDir, fullImageFilename)

    // Process images
    console.log(`  Resizing thumbnail...`)
    await processImage(
      imagePath,
      thumbnailPath,
      THUMBNAIL_SIZE.width,
      THUMBNAIL_SIZE.height,
      80
    )

    console.log(`  Resizing full image...`)
    await processImage(
      imagePath,
      fullImagePath,
      FULL_IMAGE_SIZE.width,
      FULL_IMAGE_SIZE.height,
      85
    )

    // Upload to R2
    console.log(`  Uploading thumbnail to R2...`)
    const thumbnailUrl = await uploadToR2(
      thumbnailPath,
      `thumbnails/${thumbnailFilename}`
    )

    console.log(`  Uploading full image to R2...`)
    const fullImageUrl = await uploadToR2(
      fullImagePath,
      `images/${fullImageFilename}`
    )

    // Clean up temp files
    fs.unlinkSync(thumbnailPath)
    fs.unlinkSync(fullImagePath)

    return {
      originalName: filename,
      thumbnail: thumbnailUrl,
      original: fullImageUrl,
      thumbnailKey: `thumbnails/${thumbnailFilename}`,
      originalKey: `images/${fullImageFilename}`,
      uploadedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error(`  Error processing ${filename}:`, error.message)
    throw error
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 Starting photo upload process...\n')

  // Validate environment variables
  if (
    !R2_ACCOUNT_ID ||
    !R2_ACCESS_KEY_ID ||
    !R2_SECRET_ACCESS_KEY ||
    !R2_BUCKET_NAME ||
    !R2_PUBLIC_URL
  ) {
    console.error('❌ Missing required environment variables!')
    console.error('Please set:')
    console.error('  - R2_ACCOUNT_ID')
    console.error('  - R2_ACCESS_KEY_ID')
    console.error('  - R2_SECRET_ACCESS_KEY')
    console.error('  - R2_BUCKET_NAME')
    console.error('  - R2_PUBLIC_URL')
    process.exit(1)
  }

  // Check if photo-uploads directory exists
  if (!fs.existsSync(PHOTO_UPLOADS_DIR)) {
    console.error(`❌ Directory not found: ${PHOTO_UPLOADS_DIR}`)
    process.exit(1)
  }

  // Get all JPG files
  const files = fs.readdirSync(PHOTO_UPLOADS_DIR).filter(file => {
    const ext = path.extname(file).toLowerCase()
    return ext === '.jpg' || ext === '.jpeg'
  })

  if (files.length === 0) {
    console.log('📸 No JPG files found in photo-uploads folder')
    return
  }

  console.log(`📸 Found ${files.length} image(s) to process\n`)

  // Load existing images
  const imagesData = loadImagesJson()
  const existingKeys = new Set(imagesData.images.map(img => img.originalKey))

  // Process each image
  const newImages = []
  const errors = []

  for (const file of files) {
    const imagePath = path.join(PHOTO_UPLOADS_DIR, file)

    try {
      const imageData = await processImageFile(imagePath)

      // Check if image already exists
      if (existingKeys.has(imageData.originalKey)) {
        console.log(`  ⚠️  Skipping ${file} (already uploaded)\n`)
        continue
      }

      newImages.push(imageData)
      console.log(`  ✅ Successfully processed ${file}\n`)

      // Move processed file to a processed subfolder (optional)
      const processedDir = path.join(PHOTO_UPLOADS_DIR, 'processed')
      if (!fs.existsSync(processedDir)) {
        fs.mkdirSync(processedDir, { recursive: true })
      }
      const processedPath = path.join(processedDir, file)
      if (!fs.existsSync(processedPath)) {
        fs.renameSync(imagePath, processedPath)
        console.log(`  📁 Moved ${file} to processed folder\n`)
      }
    } catch (error) {
      errors.push({ file, error: error.message })
      console.log(`  ❌ Failed to process ${file}\n`)
    }
  }

  // Update images.json
  if (newImages.length > 0) {
    imagesData.images.push(...newImages)
    saveImagesJson(imagesData)
    console.log(`\n✅ Successfully uploaded ${newImages.length} new image(s)`)
  } else {
    console.log(`\n⚠️  No new images to upload`)
  }

  // Show errors if any
  if (errors.length > 0) {
    console.log(`\n❌ Errors encountered:`)
    errors.forEach(({ file, error }) => {
      console.log(`  - ${file}: ${error}`)
    })
  }

  // Clean up temp directory
  const tempDir = path.join(__dirname, '../temp')
  if (fs.existsSync(tempDir)) {
    const tempFiles = fs.readdirSync(tempDir)
    tempFiles.forEach(file => {
      try {
        fs.unlinkSync(path.join(tempDir, file))
      } catch (error) {
        // Ignore cleanup errors
      }
    })
  }

  console.log('\n✨ Upload process completed!')
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error)
  process.exit(1)
})
