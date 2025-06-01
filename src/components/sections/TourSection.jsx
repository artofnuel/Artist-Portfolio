import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaTicketAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './TourSection.css'

const TourSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const tourDates = [
    {
      id: 1,
      date: 'May 15, 2025',
      venue: 'The Fillmore',
      location: 'San Francisco, CA',
      status: 'available' // available, sold-out, limited
    },
    {
      id: 2,
      date: 'May 18, 2025',
      venue: 'The Wiltern',
      location: 'Los Angeles, CA',
      status: 'limited'
    },
    {
      id: 3,
      date: 'May 22, 2025',
      venue: 'Gothic Theatre',
      location: 'Denver, CO',
      status: 'available'
    },
    {
      id: 4,
      date: 'May 25, 2025',
      venue: 'House of Blues',
      location: 'Chicago, IL',
      status: 'sold-out'
    },
    {
      id: 5,
      date: 'May 30, 2025',
      venue: 'Brooklyn Steel',
      location: 'New York, NY',
      status: 'available'
    },
    {
      id: 6,
      date: 'June 2, 2025',
      venue: '9:30 Club',
      location: 'Washington, DC',
      status: 'limited'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] }
    }
  }

  return (
    <section className="tour-section section" id="tour">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Tour</h2>
        </motion.div>
        
        <motion.div 
          className="tour-background-element"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          TOUR 2025
        </motion.div>
        
        <motion.div
          className="tour-dates-container"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {tourDates.map((show) => (
            <motion.div 
              className="tour-date-item" 
              key={show.id}
              variants={itemVariants}
            >
              <div className="tour-date">
                <span>{show.date}</span>
              </div>
              
              <div className="tour-venue">
                <h3>{show.venue}</h3>
                <div className="tour-location">
                  <FaMapMarkerAlt />
                  <span>{show.location}</span>
                </div>
              </div>
              
              <div className="tour-action">
                {show.status === 'sold-out' ? (
                  <span className="tour-status sold-out">Sold Out</span>
                ) : (
                  <a 
                    href="#tickets" 
                    className={`btn btn-secondary ${show.status === 'limited' ? 'limited' : ''}`}
                  >
                    {show.status === 'limited' ? 'Limited Tickets' : 'Get Tickets'}
                    <FaTicketAlt />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="tour-cta text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="#contact" className="btn btn-primary">Request a Show</a>
        </motion.div>
      </div>
    </section>
  )
}

export default TourSection