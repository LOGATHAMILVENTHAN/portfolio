import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion for animations
import './Main.css';  // Import the CSS file
import gst from "/src/Images/rb_1238.png";  // Path to the image

function Mainpage() {
    const buttons = [
        
        { to: "https://redux-two-pearl.vercel.app/", text: "REDUX",imgSrc:"https://img.freepik.com/free-vector/circle-arrows-round-rotating-circular-recycle-abstract-low-poly-wireframe-mesh-design-from-connecting-dot-line-vector-illustration-blue-background_587448-497.jpg?t=st=1736360144~exp=1736363744~hmac=217d686c666e4c022ec761f218d66453d0d660301f0276721b546e2fb3cfd783&w=996" },
        { to: "https://calculator-zeta-red-30.vercel.app/", text: "SIMPLE-CALCULATOR",imgSrc:"https://img.freepik.com/premium-photo/stationery-science-education-yellow-calculator-front-view-isolated_662322-1187.jpg?w=740"  },
        { to: "https://gst-calculator-rose.vercel.app/", text: "GST-CALCULATOR",imgSrc:"https://img.freepik.com/premium-photo/3d-illustration-gst-text-golden-color-goods-service-tax_650573-38.jpg?w=900" },
        { to: "https://emi-calculator-nine.vercel.app/", text: "EMI-CALCULATOR" ,imgSrc:"https://img.freepik.com/premium-photo/super-modern-superhero-3d-illustration_183364-58998.jpg?w=740" },
       
        { to: "https://bmi-calculator-seven-self.vercel.app/", text: "BMI-CALCULATOR" ,imgSrc:"https://img.freepik.com/premium-photo/ai-generation-photo-3d-cartoon-illustration-abstract-background_999340-12285.jpg?w=740" },
        { to: "https://age-calculator-dun-omega.vercel.app/", text: "AGE-CALCULATOR" ,imgSrc:"https://img.freepik.com/free-vector/stages-human-growth_1308-110095.jpg?t=st=1736359896~exp=1736363496~hmac=0371c2b67cca25e3d05b09468afe1ed8aaa6cf32d5e7c3466a8df66ae55473b0&w=900" },
       
    ];

    return (
        <div className="main-container">
            <motion.h2
                className="about-skills-title"
                initial={{ opacity: 0, scale: 0.8 }}  // Start with reduced opacity and smaller scale
                animate={{
                    opacity: [0, 1, 0],  // Blink by toggling opacity from 0 to 1 and back to 0
                    scale: [0.8, 1.2, 1], // Scale up slightly when visible and shrink back
                }}
                transition={{
                    opacity: {
                        repeat: Infinity,  // Repeat the blinking effect infinitely
                        repeatType: "loop",  // Infinite loop for blinking
                        duration: 1,  // Duration of each blink cycle
                        ease: "easeInOut",  // Smooth transition for opacity
                    },
                    scale: {
                        repeat: Infinity,  // Keep the scaling repeating
                        repeatType: "loop",  // Infinite loop for scaling effect
                        duration: 1,  // Duration of scaling animation
                        ease: "easeInOut",  // Smooth transition for scaling
                    },
                }}
            >
                PROJECTS:
            </motion.h2>

            <div className="button-container">
                {buttons.map((button, index) => (
                    <Link to={button.to} className="link" key={index}>
                        <div className="card">
                            {/* Display image outside button for GST Calculator */}
                            {button.imgSrc && (
                                <div className="card-image">
                                    <img
                                        src={button.imgSrc}
                                        alt={button.text}
                                        className="gst-image"
                                    />
                                </div>
                            )}
                            <motion.button
                                className="button"
                                initial={{ opacity: 0, x: -100 }} // Start from the left off-screen
                                animate={{ opacity: 1, x: 0 }} // Animate to normal position (centered)
                                transition={{ delay: index * 0.3, type: 'spring', stiffness: 100 }} // Stagger the animation
                            >
                                {button.text}
                            </motion.button>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Mainpage;
