import { motion } from 'framer-motion'
import './Loader.css'

const Loader = () => {
  return (
    <motion.div 
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 0.8,
          ease: [0.65, 0, 0.35, 1]
        }
      }}
    >
      <motion.div 
        className="loader-content"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: [0.65, 0, 0.35, 1]
          }
        }}
        exit={{ 
          scale: 1.1, 
          opacity: 0,
          transition: {
            duration: 0.5,
            ease: [0.65, 0, 0.35, 1]
          }
        }}
      >
        <motion.div 
          className="logo-container"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: 0.3,
                duration: 0.8,
                ease: [0.65, 0, 0.35, 1]
              }
            }}
          >
            SOUND
          </motion.h1>
          <motion.div 
            className="loading-bar"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: {
                delay: 0.8,
                duration: 1,
                ease: [0.65, 0, 0.35, 1]
              }
            }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Loader