import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './GallerySection.css'

const GallerySection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Concert performance with dramatic lighting",
      span: "col-span-2"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1749822/pexels-photo-1749822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Studio session with equipment",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Behind the scenes at photoshoot",
      span: "col-span-2"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Live performance at festival",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/144429/pexels-photo-144429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Recording studio session closeup",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Backstage candid moment",
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] }
    }
  }

  return (
    <section className="gallery-section section" id="gallery">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Gallery</h2>
        </motion.div>
        
        <motion.div
          className="gallery-grid"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {images.map((image) => (
            <motion.div 
              className={`gallery-item ${image.span || ''}`} 
              key={image.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image.src} alt={image.alt} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default GallerySection