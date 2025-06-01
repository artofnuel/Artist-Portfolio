import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPlay } from 'react-icons/fa'
import useStore from '../../store/useStore'
import VideoModal from '../ui/VideoModal'
import './VideoSection.css'

const VideoSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const { openVideoModal, videoModalOpen, currentVideo } = useStore()
  
  const videos = [
    {
      id: 'Tn6-PIqc4UM',
      title: 'Digital Dreams',
      thumbnail: 'https://images.pexels.com/photos/2404444/pexels-photo-2404444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Official Music Video (2025)'
    },
    {
      id: 'bpOSxM0rNPM',
      title: 'Crystal Clear',
      thumbnail: 'https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Official Music Video (2025)'
    },
    {
      id: 'vGc4mg5pul4',
      title: 'Live at Metro',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Live Performance (2024)'
    }
  ]
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <>
      <section className="video-section section" id="videos" ref={ref}>
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Videos</h2>
          </motion.div>
          
          <motion.div
            className="videos-container"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {videos.map((video) => (
              <motion.div 
                className="video-card" 
                key={video.id}
                variants={itemVariants}
              >
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <button 
                    className="play-overlay"
                    onClick={() => openVideoModal(video.id)}
                    aria-label={`Play ${video.title} video`}
                  >
                    <FaPlay />
                  </button>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {videoModalOpen && <VideoModal videoId={currentVideo} />}
    </>
  )
}

export default VideoSection