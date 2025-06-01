import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import './HeroSection.css'

const HeroSection = () => {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  return (
    <section className="hero-section" id="home" ref={ref}>
      <motion.div 
        className="hero-background"
        style={{ y, scale }}
      >
        <div className="overlay"></div>
      </motion.div>
      
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          style={{ opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9]
          }}
        >
          <motion.span 
            className="subheading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            New Album Out Now
          </motion.span>
          
          <motion.h1 
            className="heading-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            ECHOES OF <br /> 
            <span className="highlight">TOMORROW</span>
          </motion.h1>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <a href="#music" className="btn btn-primary">Listen Now</a>
            <a href="#tour" className="btn btn-secondary">See Tour Dates</a>
          </motion.div>
        </motion.div>
        
        <motion.a 
          href="#about" 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}

export default HeroSection