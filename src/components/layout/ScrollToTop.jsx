import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button 
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop