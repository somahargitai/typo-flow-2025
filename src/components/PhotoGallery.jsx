import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import imagesData from '../data/images.json'

const PhotoGallery = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)
  const [zoomScale, setZoomScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragRef = useRef({ startX: 0, startY: 0, originX: 0, originY: 0 })
  const imagesPerPage = 12
  const [isMobile, setIsMobile] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(imagesPerPage)
  const loadMoreRef = useRef(null)

  // Transform images from JSON format to ImageGallery format
  const allImages = useMemo(() => {
    if (!imagesData?.images || imagesData.images.length === 0) {
      return []
    }

    return imagesData.images.map(image => ({
      original: image.original,
      thumbnail: image.thumbnail,
      // intentionally omit description to hide captions
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

  // Reset zoom state when closing fullscreen
  useEffect(() => {
    if (!isFullscreen) {
      setIsZoomed(false)
      setZoomScale(1)
      setPosition({ x: 0, y: 0 })
      setIsDragging(false)
    }
  }, [isFullscreen])

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

  const handleImageClick = useCallback(
    index => {
      const galleryStartIndex = startIndex + index
      setIsFullscreen(true)
      // The ImageGallery will handle the fullscreen view
    },
    [startIndex]
  )

  const handlePageChange = page => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Zoom toggle and drag handlers (fullscreen only)
  const toggleZoom = useCallback(() => {
    setIsZoomed(prev => {
      const next = !prev
      setZoomScale(next ? 3 : 1)
      setPosition({ x: 0, y: 0 })
      return next
    })
  }, [])

  const onPointerDown = useCallback(
    e => {
      if (!isZoomed) return
      e.preventDefault()
      e.stopPropagation()
      const pointerX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0
      const pointerY = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0
      dragRef.current = {
        startX: pointerX,
        startY: pointerY,
        originX: position.x,
        originY: position.y,
      }
      setIsDragging(true)
    },
    [isZoomed, position.x, position.y]
  )

  const onPointerMove = useCallback(
    e => {
      if (!isDragging) return
      e.preventDefault()
      e.stopPropagation()
      const pointerX = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? 0
      const pointerY = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? 0
      const dx = pointerX - dragRef.current.startX
      const dy = pointerY - dragRef.current.startY
      setPosition({
        x: dragRef.current.originX + dx,
        y: dragRef.current.originY + dy,
      })
    },
    [isDragging]
  )

  const onPointerUp = useCallback(
    e => {
      if (!isDragging) return
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
    },
    [isDragging]
  )

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

      {/* Fullscreen Gallery */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black">
          <div
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 z-10 text-white text-2xl
                hover:text-gray-300 transition-colors bg-black bg-opacity-50
                rounded-full p-2"
            >
              ✕
            </button>

            <div className="w-full h-full flex items-center justify-center">
              <style>
                {`
                  .image-gallery-content {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    height: 100vh !important;
                    width: 100vw !important;
                  }
                  .image-gallery-slide-wrapper {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    height: 100vh !important;
                    width: 100vw !important;
                  }
                  .image-gallery-slide {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                    height: 100vh !important;
                    width: 100vw !important;
                  }
                  .image-gallery-image {
                    ${
                      isZoomed
                        ? 'max-height: 120vh !important; max-width: 120vw !important; object-fit: contain !important; cursor: zoom-out !important;'
                        : 'max-height: 100vh !important; max-width: 100vw !important; object-fit: contain !important; cursor: zoom-in !important;'
                    }
                    transition: all 0.3s ease !important;
                  }
                  .image-gallery-slide-wrapper:hover .image-gallery-image {
                    ${
                      isZoomed
                        ? 'transform: scale(1.1) !important;'
                        : 'transform: scale(1.05) !important;'
                    }
                  }
                `}
              </style>
              <ImageGallery
                items={allImages}
                startIndex={startIndex}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                showNav={!isMobile}
                /* When zoomed, make swiping to next slide effectively impossible */
                swipeThreshold={isZoomed ? 10000 : 30}
                disableSwipe={isZoomed}
                useBrowserFullscreen={false}
                onScreenChange={isFs => {
                  if (!isFs) {
                    setIsFullscreen(false)
                  }
                }}
                renderItem={item => (
                  <div
                    className="w-full h-full flex items-center justify-center
                      touch-pan-y"
                    /* Capture and stop touch/pointer events when zoomed to prevent gallery swipe */
                    onTouchStartCapture={e => {
                      if (isZoomed) {
                        e.preventDefault()
                        e.stopPropagation()
                      }
                    }}
                    onTouchMoveCapture={e => {
                      if (isZoomed) {
                        e.preventDefault()
                        e.stopPropagation()
                      }
                    }}
                    onPointerDownCapture={e => {
                      if (isZoomed) {
                        e.preventDefault()
                        e.stopPropagation()
                      }
                    }}
                    onMouseDown={onPointerDown}
                    onMouseMove={onPointerMove}
                    onMouseUp={onPointerUp}
                    onMouseLeave={onPointerUp}
                    onTouchStart={onPointerDown}
                    onTouchMove={onPointerMove}
                    onTouchEnd={onPointerUp}
                    onDoubleClick={toggleZoom}
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      cursor: isZoomed
                        ? isDragging
                          ? 'grabbing'
                          : 'grab'
                        : 'zoom-in',
                    }}
                  >
                    <img
                      src={item.original}
                      alt=""
                      draggable={false}
                      style={{
                        maxWidth: '100vw',
                        maxHeight: '100vh',
                        objectFit: 'contain',
                        transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${zoomScale})`,
                        transition: isDragging ? 'none' : 'transform 0.2s ease',
                        willChange: 'transform',
                        touchAction: isZoomed ? 'none' : 'pan-y',
                      }}
                      onClick={e => {
                        // prevent gallery from advancing when zoomed and clicking
                        if (isZoomed) {
                          e.preventDefault()
                          e.stopPropagation()
                        }
                      }}
                      onDragStart={e => e.preventDefault()}
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PhotoGallery
