import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Loader from './components/layout/Loader'
import ScrollToTop from './components/layout/ScrollToTop'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import MusicSection from './components/sections/MusicSection'
import VideoSection from './components/sections/VideoSection'
import GallerySection from './components/sections/GallerySection'
import TourSection from './components/sections/TourSection'
import ContactSection from './components/sections/ContactSection'
import CursorFollower from './components/ui/CursorFollower'
import useStore from './store/useStore'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const setScrollY = useStore(state => state.setScrollY)

  // Simulate loading for smooth intro
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setScrollY])

  return (
    <div className="app">
      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <MusicSection />
            <VideoSection />
            <GallerySection />
            <TourSection />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
          <CursorFollower />
        </>
      )}
    </div>
  )
}

export default App