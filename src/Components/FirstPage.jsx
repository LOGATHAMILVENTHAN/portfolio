import { color, motion } from 'framer-motion'; // Import Framer Motion for animations
import React from 'react';
import './First.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import AboutMe from '../assets/About/SecondPage';
import ThirdPage from '../assets/Skills/ThirdPAge';
import Mainpage from '../assets/Projects/Mainpage';
import Contactlog from '../assets/Contact/Contactlog';

const FirstPage = () => {
  return (

    <div className="video-background-container">

      <Container className="video-content">
        <Row>
          <Col md={6} className="text-center">

            <motion.h1 className="text-name">
              {Array.from('LOGATHAMILVENTHAN').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    damping: 25,
                    stiffness: 150,
                    repeat: Infinity,  // Repeat the wave animation for each letter
                    repeatType: "reverse"  // Make it move up and down in a wave
                  }}
                  style={{
                    color: 'yellow',  // Set the text color to yellow
                    textShadow: '2px 2px 5px blue', 
                    textShadow: '2px 2px 5px blue' // Add a blue shadow to the text
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Animated Paragraph (Portfolio) */}
        
            <motion.h1 className="text-name">
              {Array.from('PORTFOLIO').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    damping: 25,
                    stiffness: 150,
                    repeat: Infinity,  // Repeat the wave animation for each letter
                    repeatType: "reverse"  // Make it move up and down in a wave
                  }}
                  style={{
                    color: 'BLUE',  // Set the text color to yellow
                    textShadow: '2px 2px 5px blue', 
                    textShadow: '2px 2px 5px blue' // Add a blue shadow to the text
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            {/* Animated Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} // Fade-in effect
              transition={{ duration: 3, delay: 0.8 }} // Delayed animation for button
            >
              <Button variant="outline-dark" >RESUME</Button>
            </motion.div>

          </Col>
        </Row>
      </Container>
      <div style={{backgroundColor : "black", color : "white"}}>
      <AboutMe />
      </div>
      <ThirdPage/>
      <Mainpage/>
      <Contactlog/>
    </div>
  );
};

export default FirstPage;
