
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  // Import motion for animations
import './Main.css';  // Import the CSS file
import gst from "/src/Images/rb_1238.png";  // Path to the image

function Mainpage() {
    const buttons = [
        { to: "https://redux-two-pearl.vercel.app/", text: "REDUX" },
        { to: "https://gst-calculator-rose.vercel.app/", text: "GST-CALCULATOR", imgSrc: gst },
        { to: "https://emi-calculator-nine.vercel.app/", text: "EMI-CALCULATOR" },
        { to: "https://calculator-zeta-red-30.vercel.app/", text: "SIMPLE-CALCULATOR" },
        { to: "https://bmi-calculator-seven-self.vercel.app/", text: "BMI-CALCULATOR" },
        { to: "https://age-calculator-dun-omega.vercel.app/", text: "AGE-CALCULATOR" }
    ];

    return (
        <div className="main-container">
            {buttons.map((button, index) => (
                <Link to={button.to} className="link" key={index}>
                    <motion.button
                        className="button"
                        initial={{ opacity: 0, x: -100 }} // Start from the left off-screen
                        animate={{ opacity: 1, x: 0 }} // Animate to normal position (centered)
                        transition={{ delay: index * 0.3, type: 'spring', stiffness: 100 }} // Stagger the animation
                    >
                        {button.imgSrc && (
                            <img 
                                src={button.imgSrc} 
                                alt={button.text} 
                                style={{ width: '50px', height: '50px', marginRight: '10px' }} // Adjust image size and spacing
                            />
                        )}
                        {button.text}
                    </motion.button>
                </Link>
            ))}
        </div>
    );
}

export default Mainpage;
