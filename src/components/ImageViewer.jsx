import React, { useState, useEffect, useCallback } from 'react'

const ImageViewer = ({ isOpen, onClose, images, currentIndex, onIndexChange }) => {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [touchStart, setTouchStart] = useState(null)
  const [touchDistance, setTouchDistance] = useState(null)

  const currentImage = images[currentIndex]

  // Reset zoom and pan when opening or changing image
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setZoom(1)
      setPan({ x: 0, y: 0 })
      setIsDragging(false)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
    setIsDragging(false)
  }, [currentIndex])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = e => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          if (currentIndex > 0) {
            onIndexChange(currentIndex - 1)
          }
          break
        case 'ArrowRight':
          if (currentIndex < images.length - 1) {
            onIndexChange(currentIndex + 1)
          }
          break
        case '+':
        case '=':
          handleZoomIn()
          break
        case '-':
          handleZoomOut()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, currentIndex, images.length])

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.3, 5))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.3, 1))
  }

  const resetZoom = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  // Mouse drag handlers
  const handleMouseDown = e => {
    if (zoom > 1) {
      e.preventDefault()
      setIsDragging(true)
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }

  const handleMouseMove = e => {
    if (isDragging && zoom > 1) {
      e.preventDefault()
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile
  const getTouchDistance = touches => {
    const dx = touches[0].clientX - touches[1].clientX
    const dy = touches[0].clientY - touches[1].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  const handleTouchStart = e => {
    if (e.touches.length === 1) {
      // Single touch - start drag if zoomed
      if (zoom > 1) {
        setIsDragging(true)
        setDragStart({
          x: e.touches[0].clientX - pan.x,
          y: e.touches[0].clientY - pan.y,
        })
      }
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY })
    } else if (e.touches.length === 2) {
      // Pinch zoom
      const distance = getTouchDistance(e.touches)
      setTouchDistance(distance)
    }
  }

  const handleTouchMove = e => {
    if (e.touches.length === 1 && isDragging && zoom > 1) {
      // Drag zoomed image
      e.preventDefault()
      setPan({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      })
    } else if (e.touches.length === 2 && touchDistance) {
      // Pinch zoom
      e.preventDefault()
      const newDistance = getTouchDistance(e.touches)
      const scale = newDistance / touchDistance
      setZoom(prev => Math.max(1, Math.min(5, prev * scale)))
      setTouchDistance(newDistance)
    }
  }

  const handleTouchEnd = e => {
    if (e.touches.length === 0) {
      setIsDragging(false)
      setTouchStart(null)
      setTouchDistance(null)
    } else if (e.touches.length === 1) {
      setTouchDistance(null)
    }
  }

  // Swipe detection for navigation
  const handleSwipe = e => {
    if (zoom > 1 || !touchStart) return

    const deltaX = e.changedTouches[0].clientX - touchStart.x
    const deltaY = Math.abs(e.changedTouches[0].clientY - touchStart.y)

    // Only trigger swipe if horizontal movement is significant and vertical is minimal
    if (Math.abs(deltaX) > 50 && deltaY < 50) {
      if (deltaX > 0 && currentIndex > 0) {
        onIndexChange(currentIndex - 1)
      } else if (deltaX < 0 && currentIndex < images.length - 1) {
        onIndexChange(currentIndex + 1)
      }
    }
  }

  const handleTouchEndWithSwipe = e => {
    handleSwipe(e)
    handleTouchEnd(e)
  }

  // Double tap to zoom
  const [lastTap, setLastTap] = useState(0)
  const handleDoubleTap = e => {
    const now = Date.now()
    const DOUBLE_TAP_DELAY = 300

    if (now - lastTap < DOUBLE_TAP_DELAY) {
      e.preventDefault()
      if (zoom > 1) {
        resetZoom()
      } else {
        setZoom(2.5)
      }
    }
    setLastTap(now)
  }

  if (!isOpen || !currentImage) return null

  return (
    <div
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
      style={{ touchAction: zoom > 1 ? 'none' : 'pan-y' }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 w-10 h-10 flex items-center justify-center text-2xl"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Zoom controls */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="Zoom in"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
            />
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          className="text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors"
          aria-label="Zoom out"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM7 10h6"
            />
          </svg>
        </button>
        {zoom > 1 && (
          <button
            onClick={resetZoom}
            className="text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors text-xs font-bold"
            aria-label="Reset zoom"
          >
            1:1
          </button>
        )}
      </div>

      {/* Navigation arrows - desktop only */}
      {currentIndex > 0 && (
        <button
          onClick={() => onIndexChange(currentIndex - 1)}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors"
          aria-label="Previous image"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      {currentIndex < images.length - 1 && (
        <button
          onClick={() => onIndexChange(currentIndex + 1)}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors"
          aria-label="Next image"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* Image container */}
      <div
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEndWithSwipe}
        onClick={handleDoubleTap}
        style={{
          cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
        }}
      >
        <img
          src={currentImage.original}
          alt=""
          draggable={false}
          className="max-w-full max-h-full object-contain select-none"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
            transformOrigin: 'center center',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

export default ImageViewer
