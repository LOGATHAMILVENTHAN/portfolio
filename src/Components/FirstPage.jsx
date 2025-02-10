import { motion } from 'framer-motion';
import './First.css';
import { Row, Col } from 'react-bootstrap';
import AboutMe from '../assets/About/SecondPage';
import ThirdPage from '../assets/Skills/ThirdPAge';
import Mainpage from '../assets/Projects/Mainpage';
import Contactlog from '../assets/Contact/Contactlog';
import { jsPDF } from "jspdf";

const FirstPage = () => {

  const handleDownload = async () => {
    const doc = new jsPDF();
    doc.text("Resume", 10, 10);

    const imagePath = "/Images/Resume.png"; // Ensure image is in public/Images folder

    // Convert image to Base64
    const toDataURL = async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };

    try {
      const imgData = await toDataURL(imagePath);
      doc.addImage(imgData, "PNG", 10, 20, 180, 160);
      doc.save("Logathamilventhan_Resume.pdf");
    } catch (error) {
      console.error("Error loading image: ", error);
    }
  };

  return (
    <div className="video-background-container">
      <Row>
        <Col md={6} className="text-center">
          {/* Name Animation */}
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
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  color: 'yellow',
                  textShadow: '2px 2px 5px white'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <hr className='line' style={{
            color: 'white',
            marginLeft: '120px',
            border: 'none',
            height: '2px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 20px 5px white'
          }} />

          {/* Role Animation */}
          <motion.h1 className="text-name">
            {Array.from('Mern Stack Developer').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: "spring",
                  damping: 25,
                  stiffness: 150,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                style={{
                  color: 'blue',
                  textShadow: '2px 2px 5px white'
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <hr className='line' style={{
            color: 'white',
            marginLeft: '120px',
            border: 'none',
            height: '2px',
            backgroundColor: 'white',
            boxShadow: '0px 0px 20px 5px white'
          }} />

          {/* Resume Download Button */}
          <div className='resume'>
            <motion.div onClick={handleDownload}>
              <motion.button
                style={{
                  padding: '18px 36px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: '#00FFFF',
                  border: '2px solid #fff',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  outline: 'none',
                  background: 'transparent',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 0,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 15px 5px rgba(0, 255, 255, 0.7)',
                  transition: { duration: 0.3, type: 'spring', stiffness: 300 },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '300%',
                    height: '300%',
                    background: 'linear-gradient(45deg, #00FF00, #00FF00, #00FF00)',
                    animation: 'move 3s linear infinite',
                    filter: 'blur(10px)',
                    zIndex: -1,
                  }}
                ></span>
                <span>RESUME</span>
              </motion.button>
            </motion.div>
          </div>
        </Col>
      </Row>

      <hr style={{ color: "white" }} />

      {/* About Section */}
      <div style={{ backgroundColor: "black", color: "white" }}>
        <AboutMe />
      </div>

      <hr style={{ color: "white" }} />

      {/* Skills Section */}
      <div>
        <ThirdPage />
      </div>

      <hr style={{ color: "white" }} />

      {/* Projects Section */}
      <div>
        <Mainpage />
      </div>

      <hr style={{ color: "white" }} />

      {/* Contact Section */}
      <div>
        <Contactlog />
      </div>
    </div>
  );
};

export default FirstPage;
