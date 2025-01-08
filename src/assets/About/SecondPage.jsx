import { motion } from 'framer-motion';
import React from 'react';
import './Second.css';
const AboutMe = () => {
  return (
    <div className="about-container" style={{ margin: '0 auto', padding: '20px' }}>
      <motion.h2
        className="about-skills-title"
        initial={{ opacity: 1 }}  // Start fully visible
        animate={{
          opacity: [1, 0, 1],  // Make the text blink by toggling opacity from 1 to 0 and back to 1
        }}
        transition={{
          opacity: {
            repeat: Infinity,  // Make the blinking effect repeat forever
            repeatType: "loop",  // Infinite looping
            duration: 1,  // Set the duration of each blink cycle (1 second)
            ease: "easeInOut",  // Smooth transition for the blinking effect
          },
        }}
        style={{
          fontSize: '30px',
          marginTop: '30px',
          color: 'yellow',       // Text color
          fontWeight: 'bold',    // Bold font
          textShadow: '2px 2px 5px rgba(0, 0, 255, 0.6)', // Blue shadow for emphasis
          letterSpacing: '3px',  // Space out the letters slightly for a modern look
        }}
      >
       ABOUT ME:
      </motion.h2>


      <motion.p
        className="about-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ fontSize: '18px', lineHeight: '1.6' }}
      >
        Hi, I'm <span style={{ fontWeight: 'bold' }}>LOGATHAMILVENTHAN</span>, a passionate and dedicated web developer
        with <span style={{ fontWeight: 'bold' }}>internship experience </span>building modern, responsive, and user-friendly websites and applications. My goal is to create seamless digital experiences that not only look great but are also functional and efficient.
      </motion.p>

      <motion.p
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{ fontSize: '18px', lineHeight: '1.6' }}
      >
        I specialize in front-end development, crafting visually appealing and interactive interfaces using
        <span style={{ fontWeight: 'bold' }}> HTML, CSS, JavaScript, and React.js </span>
        I also have a strong background in back-end development, working with technologies like
        <span style={{ fontWeight: 'bold' }}> Node.js, Express.js and databases such as MongoDB .</span>
      </motion.p>

      <motion.p
        className="about-summary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{ fontSize: '18px', lineHeight: '1.6' }}
      >
        Whether it's a brand-new website, an e-commerce platform, or a custom web application, I take pride in my attention to detail and commitment to delivering high-quality, performant solutions that meet my clients' needs.
      </motion.p>

      <motion.h2
        className="about-skills-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        style={{ fontSize: '29px', marginTop: '30px', color: 'yellow', textShadow: '2px 2px 2px ' }}
      >
        My Skills:
      </motion.h2>

      <motion.ul
        className="about-skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        style={{ fontSize: '18px', lineHeight: '1.6' }}
      >
        <li><strong>Front-End:</strong> HTML5, CSS3, JavaScript, React, Vue.</li>
        <li><strong>Back-End:</strong> Node.js, Express.js.</li>
        <li><strong>Databases:</strong> MongoDB.</li>
        <li><strong>Tools & Technologies:</strong> Git-hub,Post-man,Fire-base.</li>
        <li><strong>UI/UX:</strong> Framer-motion,React-Bootstrap,Responsive Design.</li>
      </motion.ul>

      <motion.p
        className="about-conclusion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        style={{ fontSize: '18px', lineHeight: '1.6' }}
      >
        I’m constantly learning new techniques, staying up-to-date with the latest trends, and improving my skills. When I'm not coding, you can find me exploring new tech or contributing to open-source projects.
      </motion.p>

      <motion.p
        className="about-connect"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3.5 }}
        style={{ fontSize: '18px', lineHeight: '1.6' }}
      >
        Feel free to connect with me if you have a project in mind or if you just want to talk about the latest trends in web development!
      </motion.p>
    </div>
  );
};

export default AboutMe;
