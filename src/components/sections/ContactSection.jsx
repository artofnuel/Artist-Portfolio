import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'
import './ContactSection.css'

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState(null) // null, 'submitting', 'success', 'error'
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset form status after delay
      setTimeout(() => {
        setFormStatus(null)
      }, 5000)
    }, 1500)
  }
  
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
    <section className="contact-section section" id="contact">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Contact</h2>
        </motion.div>
        
        <motion.div
          className="contact-content"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>Get in Touch</h3>
            <p>
              For booking inquiries, press opportunities, or just to say hello, 
              feel free to reach out using the form or contact information below.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:hello@soundmusic.com">hello@soundmusic.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Management</h4>
                  <address>
                    Sound Management<br />
                    123 Music Row<br />
                    Nashville, TN 37203
                  </address>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div className="contact-form-container" variants={itemVariants}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required 
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  disabled={formStatus === 'submitting'}
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className={`submit-btn ${formStatus ? formStatus : ''}`}
                disabled={formStatus === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'submitting' ? (
                  'Sending...'
                ) : formStatus === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection