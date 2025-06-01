import { FaInstagram, FaTwitter, FaYoutube, FaSpotify, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' },
    { icon: <FaSpotify />, url: 'https://spotify.com', label: 'Spotify' },
    { icon: <FaTiktok />, url: 'https://tiktok.com', label: 'TikTok' }
  ]
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <footer className="footer">
      <div className="container footer-container">
        <motion.div 
          className="footer-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
        >
          <motion.div className="footer-logo" variants={itemVariants}>
            <h2>SOUND</h2>
          </motion.div>
          
          <motion.div className="footer-social" variants={itemVariants}>
            <h3>Connect</h3>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="footer-newsletter" variants={itemVariants}>
            <h3>Join the List</h3>
            <p>Subscribe to get the latest updates</p>
            <form>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
          <p className="copyright">&copy; {currentYear} SOUND. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer