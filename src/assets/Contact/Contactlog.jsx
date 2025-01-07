import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animations
import './Contactlog.css'; // Import a CSS file for styles

// Import icons
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contactlog() {
  return (
    <div className="contact-page">
      <motion.div 
        className="contact-card"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className="contact-title"
        >
          LET'S CONNECT TOGETHER
        </motion.h1>
        <hr/>

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        >
          {/* Email */}
          <motion.div 
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope size={40} />
            <a href="mailto:your-email@example.com" className="contact-text">
              EMAIL: logathamilventhan.com
            </a>
          </motion.div>

          {/* GitHub */}
          <motion.div 
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={40} />
            <a href="https://github.com/LOGATHAMILVENTHAN " target="_blank" rel="noopener noreferrer" className="contact-text">
              GITHUB: LOGATHAMILVENTHAN
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div 
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={40} />
            <a href="https://www.linkedin.com/in/logathamilventhan" target="_blank" rel="noopener noreferrer" className="contact-text">
              LINKEDIN: logathamilventhan
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div 
            className="contact-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone size={40} />
            <a href="tel: 8778006337" className="contact-text">
              Phone:+91 8778006337
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Contactlog;
