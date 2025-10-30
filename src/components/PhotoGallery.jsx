import React, { useState, useMemo, useEffect, useRef } from 'react'
import imagesData from '../data/images.json'
import ImageViewer from './ImageViewer'

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [viewerOpen, setViewerOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const imagesPerPage = 12
  const [isMobile, setIsMobile] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(imagesPerPage)
  const loadMoreRef = useRef(null)

  // Transform images from JSON format
  const allImages = useMemo(() => {
    if (!imagesData?.images || imagesData.images.length === 0) {
      return []
    }

    return imagesData.images.map(image => ({
      original: image.original,
      thumbnail: image.thumbnail,
    }))
  }, [])

  const totalPages = Math.ceil(allImages.length / imagesPerPage)
  const startIndex = (currentPage - 1) * imagesPerPage
  const endIndex = startIndex + imagesPerPage
  const currentImages = isMobile
    ? allImages.slice(0, itemsToShow)
    : allImages.slice(startIndex, endIndex)

  // Detect mobile and set up resize listener
  useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 767px)').matches)
    }
    updateIsMobile()
    window.addEventListener('resize', updateIsMobile)
    return () => window.removeEventListener('resize', updateIsMobile)
  }, [])

  // Reset/show counts when images or mode changes
  useEffect(() => {
    if (isMobile) {
      setItemsToShow(imagesPerPage)
    } else {
      setCurrentPage(1)
    }
  }, [isMobile, allImages.length])

  // Infinite scroll via IntersectionObserver
  useEffect(() => {
    if (!isMobile) return
    if (!loadMoreRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setItemsToShow(prev =>
            Math.min(prev + imagesPerPage, allImages.length)
          )
        }
      },
      { root: null, rootMargin: '200px', threshold: 0 }
    )

    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [isMobile, imagesPerPage, allImages.length])

  const handleImageClick = index => {
    const selectedIndex = isMobile ? index : startIndex + index
    setCurrentPhotoIndex(selectedIndex)
    setViewerOpen(true)
  }

  const handlePageChange = page => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPagination = () => {
    const pages = []
    const maxVisiblePages = 5
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Previous button
    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-2 mx-1 text-white bg-gray-600 rounded
            hover:bg-gray-700 transition-colors"
        >
          Previous
        </button>
      )
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 mx-1 rounded transition-colors ${
            i === currentPage
              ? 'bg-white text-gray-800 font-bold'
              : 'text-white bg-gray-600 hover:bg-gray-700'
          }`}
        >
          {i}
        </button>
      )
    }

    // Next button
    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-2 mx-1 text-white bg-gray-600 rounded
            hover:bg-gray-700 transition-colors"
        >
          Next
        </button>
      )
    }

    return pages
  }

  // Show empty state if no images
  if (allImages.length === 0) {
    return (
      <div className="w-full text-center py-16">
        <p className="text-white text-lg">No images available yet.</p>
        <p className="text-white text-sm mt-2">
          Upload images using the upload script to see them here.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {/* Grid Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-lg
              shadow-lg hover:shadow-xl transition-all duration-300 transform
              hover:scale-105"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image.thumbnail}
              alt=""
              className="w-full h-48 object-cover transition-transform
                duration-300 group-hover:scale-110"
              loading="lazy"
              onError={e => {
                if (e.target.src !== image.original) {
                  e.target.src = image.original
                }
              }}
            />
            <div
              className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30
                transition-all duration-300 flex items-center justify-center
                pointer-events-none"
            >
              <div
                className="opacity-0 group-hover:opacity-100 transition-opacity
                  duration-300 pointer-events-none"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
        {isMobile && itemsToShow < allImages.length && (
          <div ref={loadMoreRef} className="col-span-full h-1" />
        )}
      </div>

      {/* Pagination (desktop only) */}
      {!isMobile && totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mb-8">
          {renderPagination()}
        </div>
      )}

      {/* Image Viewer */}
      <ImageViewer
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
        images={allImages}
        currentIndex={currentPhotoIndex}
        onIndexChange={setCurrentPhotoIndex}
      />
    </div>
  )
}

export default PhotoGallery
