import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPlay, FaPause, FaSpotify, FaApple, FaAmazon } from 'react-icons/fa'
import useStore from '../../store/useStore'
import './MusicSection.css'

const MusicSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const { currentTrack, isPlaying, setCurrentTrack, togglePlayPause } = useStore()
  
  const albums = [
    {
      id: 'album1',
      title: 'Echoes of Tomorrow',
      year: '2025',
      cover: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=600',
      tracks: [
        { id: 'track1', title: 'Digital Dreams', duration: '3:45' },
        { id: 'track2', title: 'Neon Nights', duration: '4:12' },
        { id: 'track3', title: 'Crystal Clear', duration: '3:58' },
        { id: 'track4', title: 'Future Memories', duration: '5:23' }
      ]
    },
    {
      id: 'album2',
      title: 'Urban Whispers',
      year: '2023',
      cover: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=600',
      tracks: [
        { id: 'track5', title: 'Concrete Jungle', duration: '4:02' },
        { id: 'track6', title: 'Midnight Runner', duration: '3:47' },
        { id: 'track7', title: 'Steel & Glass', duration: '4:35' },
        { id: 'track8', title: 'Silent Streets', duration: '5:10' }
      ]
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
  
  const handlePlayTrack = (track) => {
    if (currentTrack && currentTrack.id === track.id) {
      togglePlayPause()
    } else {
      setCurrentTrack(track)
    }
  }

  return (
    <section className="music-section section" id="music">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Music</h2>
        </motion.div>
        
        <motion.div
          className="albums-container"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {albums.map((album) => (
            <motion.div 
              className="album-card" 
              key={album.id}
              variants={itemVariants}
            >
              <div className="album-cover">
                <img src={album.cover} alt={album.title} />
              </div>
              
              <div className="album-info">
                <div className="album-header">
                  <h3>{album.title}</h3>
                  <span className="album-year">{album.year}</span>
                </div>
                
                <ul className="track-list">
                  {album.tracks.map(track => (
                    <li key={track.id} className="track-item">
                      <button 
                        className="play-button"
                        onClick={() => handlePlayTrack(track)}
                        aria-label={`${isPlaying && currentTrack?.id === track.id ? 'Pause' : 'Play'} ${track.title}`}
                      >
                        {isPlaying && currentTrack?.id === track.id ? <FaPause /> : <FaPlay />}
                      </button>
                      <div className="track-info">
                        <span className="track-title">{track.title}</span>
                        <span className="track-duration">{track.duration}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="streaming-links">
                  <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Listen on Spotify">
                    <FaSpotify />
                  </a>
                  <a href="https://music.apple.com" target="_blank" rel="noopener noreferrer" aria-label="Listen on Apple Music">
                    <FaApple />
                  </a>
                  <a href="https://music.amazon.com" target="_blank" rel="noopener noreferrer" aria-label="Listen on Amazon Music">
                    <FaAmazon />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default MusicSection