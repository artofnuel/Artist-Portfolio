import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import useStore from '../../store/useStore'
import './VideoModal.css'

const VideoModal = ({ videoId }) => {
  const { closeVideoModal } = useStore()
  
  useEffect(() => {
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden'
    
    // Add escape key listener
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeVideoModal()
      }
    }
    
    window.addEventListener('keydown', handleEscape)
    
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleEscape)
    }
  }, [closeVideoModal])
  
  const handleBackdropClick = (e) => {
    // Only close if clicking the backdrop directly, not the content
    if (e.target === e.currentTarget) {
      closeVideoModal()
    }
  }

  return (
    <motion.div 
      className="video-modal-overlay"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="video-modal-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <button 
          className="close-modal-btn"
          onClick={closeVideoModal}
          aria-label="Close video"
        >
          <FaTimes />
        </button>
        
        <div className="video-wrapper">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default VideoModal