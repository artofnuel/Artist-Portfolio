import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './AboutSection.css'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  }

  return (
    <section className="about-section section" id="about">
      <div className="container">
        <motion.div 
          className="about-content"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="about-image-container" variants={itemVariants}>
            <div className="about-image-wrapper">
              <img 
                src="https://images.pexels.com/photos/3552948/pexels-photo-3552948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Musician portrait" 
                className="about-image"
              />
            </div>
          </motion.div>
          
          <div className="about-text">
            <motion.h2 className="section-title" variants={itemVariants}>About</motion.h2>
            
            <motion.div variants={itemVariants}>
              <p className="lead">
                Creating immersive soundscapes that blend electronic production with raw acoustic elements, 
                SOUND pushes the boundaries of contemporary music.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p>
                Born in Chicago and raised between New York and Los Angeles, SOUND draws inspiration from the urban 
                pulse of America's most vibrant cities. With a background in classical piano and electronic music production, 
                their work explores the intersection of tradition and innovation.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p>
                Their debut album "Echoes of Tomorrow" received critical acclaim from Pitchfork, Rolling Stone, and 
                The New Yorker, establishing them as one of the most exciting new voices in the American music scene.
              </p>
            </motion.div>
            
            <motion.div 
              className="about-stats"
              variants={itemVariants}
            >
              <div className="stat">
                <span className="stat-number">3M+</span>
                <span className="stat-label">Monthly Listeners</span>
              </div>
              
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Countries Toured</span>
              </div>
              
              <div className="stat">
                <span className="stat-number">2</span>
                <span className="stat-label">Grammy Nominations</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection