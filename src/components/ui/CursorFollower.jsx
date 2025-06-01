import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './CursorFollower.css'

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setCursorVariant('hover')
      } else {
        setCursorVariant('default')
      }
    }
    
    window.addEventListener('mousemove', mouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])
  
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.4)',
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.6)',
      mixBlendMode: 'difference'
    }
  }
  
  // Don't show on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null
  }

  return (
    <motion.div
      className="cursor-follower"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 300,
        mass: 0.5
      }}
    />
  )
}

export default CursorFollower