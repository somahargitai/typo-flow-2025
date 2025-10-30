# Photo Upload Script

This script processes JPG images from the `photo-uploads` folder, generates web-optimized images and thumbnails, uploads them to Cloudflare R2 storage, and updates the `images.json` file with metadata.

## Setup

### 1. Install Dependencies

The required packages are already installed:

- `sharp` - Image processing
- `@aws-sdk/client-s3` & `@aws-sdk/lib-storage` - Cloudflare R2 upload (S3-compatible API)
- `dotenv` - Environment variable management

### 2. Configure Cloudflare R2

1. Create a Cloudflare R2 bucket at [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Create an API token:
   - Go to: <https://dash.cloudflare.com/profile/api-tokens>
   - Click "Create Token"
   - Use the "Edit Cloudflare R2" template
   - Select your bucket and save the credentials

3. Enable Public Access:
   - In your R2 bucket settings, go to "Settings" → "Public Access"
   - Enable "R2.dev subdomain" to get an automatic public URL
   - Your public URL will be: `https://<bucket-name>.<account-id>.r2.dev`
   - **IMPORTANT**: Use the `.r2.dev` domain, NOT `.r2.cloudflarestorage.com` (that's only for API access)
   - Alternatively, you can set up a custom domain if you prefer

### 3. Set Environment Variables

Create a `.env` file in the project root with the following variables:

```env
R2_ACCOUNT_ID=your-account-id-here
R2_ACCESS_KEY_ID=your-access-key-id-here
R2_SECRET_ACCESS_KEY=your-secret-access-key-here
R2_BUCKET_NAME=your-bucket-name-here
# If using R2.dev subdomain: https://<bucket-name>.<account-id>.r2.dev
# Example: https://typoflow.6978abd6c6c43eead09460719ede17e6.r2.dev
# If using custom domain: https://your-custom-domain.com
# IMPORTANT: Use .r2.dev NOT .r2.cloudflarestorage.com
R2_PUBLIC_URL=https://your-bucket-name.your-account-id.r2.dev
```

**Important:** Never commit the `.env` file to git (it's already in `.gitignore`)

## Usage

### 1. Add Images

Place your JPG/JPEG images in the `photo-uploads` folder:

```bash
photo-uploads/
  ├── image1.jpg
  ├── image2.jpg
  └── image3.jpg
```

### 2. Run the Script

```bash
npm run upload-photos
```

Or directly:

```bash
node scripts/upload-photos.js
```

### 3. What Happens

The script will:

1. ✅ Find all JPG/JPEG files in `photo-uploads/`
2. ✅ Generate optimized thumbnails (300x300px)
3. ✅ Generate optimized full images (1920x1080px max)
4. ✅ Upload thumbnails to R2 (`thumbnails/` folder)
5. ✅ Upload full images to R2 (`images/` folder)
6. ✅ Update `src/data/images.json` with image metadata
7. ✅ Move processed images to `photo-uploads/processed/` folder

## Output

### images.json Structure

The script updates `src/data/images.json` with the following structure:

```json
{
  "images": [
    {
      "originalName": "image1.jpg",
      "thumbnail": "https://your-domain.r2.dev/thumbnails/image1-1234567890-thumb.jpg",
      "original": "https://your-domain.r2.dev/images/image1-1234567890-full.jpg",
      "thumbnailKey": "thumbnails/image1-1234567890-thumb.jpg",
      "originalKey": "images/image1-1234567890-full.jpg",
      "uploadedAt": "2025-01-01T12:00:00.000Z"
    }
  ],
  "lastUpdated": "2025-01-01T12:00:00.000Z"
}
```

### File Organization in R2

```
your-bucket/
  ├── thumbnails/
  │   ├── image1-1234567890-thumb.jpg
  │   └── image2-1234567890-thumb.jpg
  └── images/
      ├── image1-1234567890-full.jpg
      └── image2-1234567890-full.jpg
```

## Features

- ✨ **Automatic Image Optimization**: Images are resized and compressed for web
- 🔄 **Duplicate Detection**: Skips already uploaded images
- 📁 **Auto-organization**: Processes images and moves them to a processed folder
- 🗑️ **Clean Up**: Automatically cleans temporary files
- 📊 **Metadata Tracking**: Updates JSON file with all image information
- ⚡ **Efficient Upload**: Uses chunked uploads for large files

## Image Specifications

- **Thumbnails**: 300x300px, quality 80, JPEG
- **Full Images**: 1920x1080px max (maintains aspect ratio), quality 85, JPEG
- **Format**: JPEG with mozjpeg optimization

## Troubleshooting

### "Missing required environment variables"

- Check that your `.env` file exists in the project root
- Verify all R2 credentials are set correctly

### "Directory not found"

- Ensure the `photo-uploads` folder exists in the project root
- Create it manually if needed: `mkdir photo-uploads`

### Upload Failures

- Verify your R2 credentials are correct
- Check that your R2 bucket exists and is accessible
- Ensure your API token has proper permissions

### 404 Errors on Image URLs

If you're getting 404 errors on image URLs, check:

1. **Wrong URL format**: Make sure `R2_PUBLIC_URL` uses `.r2.dev` domain, NOT `.r2.cloudflarestorage.com`
   - ✅ Correct: `https://bucket-name.account-id.r2.dev`
   - ❌ Wrong: `https://account-id.r2.cloudflarestorage.com`

2. **Public Access不肯 Enabled**: Ensure R2.dev subdomain is enabled in bucket settings

3. **Fix existing URLs**: If you already uploaded images with wrong URLs, run:
   ```bash
   npm run fix-image-urls
   ```
   This will update all URLs in `images.json` to use the correct format from your `.env` file

### Image Processing Errors

- Verify images are valid JPG/JPEG files
- Check that images aren't corrupted
- Ensure you have write permissions in the temp directory

## Notes

- The script uses timestamp-based unique filenames to prevent conflicts
- Processed images are moved to `photo-uploads/processed/` to avoid re-processing
- The script skips images that have already been uploaded (based on filename matching)
- Temporary files are automatically cleaned up after processing
