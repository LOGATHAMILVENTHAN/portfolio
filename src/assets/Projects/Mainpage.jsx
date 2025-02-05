import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';  
import './Main.css';  
import gst from "/src/Images/rb_1238.png";  

function Mainpage() {
    const buttons = [
        { to: "https://redux-two-pearl.vercel.app/", text: "REDUX", imgSrc:"https://img.freepik.com/free-vector/circle-arrows-round-rotating-circular-recycle-abstract-low-poly-wireframe-mesh-design-from-connecting-dot-line-vector-illustration-blue-background_587448-497.jpg?t=st=1736360144~exp=1736363744~hmac=217d686c666e4c022ec761f218d66453d0d660301f0276721b546e2fb3cfd783&w=996" },
        { to: "https://calculator-zeta-red-30.vercel.app/", text: "SIMPLE-CALCULATOR", imgSrc:"https://img.freepik.com/premium-photo/stationery-science-education-yellow-calculator-front-view-isolated_662322-1187.jpg?w=740" },
        { to: "https://gst-calculator-rose.vercel.app/", text: "GST-CALCULATOR", imgSrc:"https://img.freepik.com/premium-photo/3d-illustration-gst-text-golden-color-goods-service-tax_650573-38.jpg?w=900" },
        { to: "https://emi-calculator-nine.vercel.app/", text: "EMI-CALCULATOR", imgSrc:"https://img.freepik.com/premium-photo/super-modern-superhero-3d-illustration_183364-58998.jpg?w=740" }, 
        { to: "https://bmi-calculator-seven-self.vercel.app/", text: "BMI-CALCULATOR", imgSrc:"https://img.freepik.com/premium-photo/ai-generation-photo-3d-cartoon-illustration-abstract-background_999340-12285.jpg?w=740" },
        { to: "https://age-calculator-dun-omega.vercel.app/", text: "AGE-CALCULATOR", imgSrc:"https://img.freepik.com/free-vector/stages-human-growth_1308-110095.jpg?t=st=1736359896~exp=1736363496~hmac=0371c2b67cca25e3d05b09468afe1ed8aaa6cf32d5e7c3466a8df66ae55473b0&w=900" },
        { to: "https://todo-list-drab-pi-78.vercel.app/", text:"TO-DO LIST", imgSrc:"https://img.freepik.com/free-vector/colorful-todo-list-illustration_1308-172589.jpg?t=st=1736441157~exp=1736444757~hmac=f66fb6f57f25ce42b5606ad79b91f0eda4f8a7db3566a0dd8de2f9ee9bf46a4b&w=360" },
        { to: "https://facebook-seven-olive.vercel.app/", text:"FACEBOOK", imgSrc:"https://img.freepik.com/free-psd/facebook-logo-3d-social-media-icon-isolated_47987-11965.jpg?t=st=1736443889~exp=1736447489~hmac=5de3eb086d5b87f81c51fa7548e8f809c67b07f9980e662b063eee22e34daaea&w=740" },
        { to: "https://ola-nu-lemon.vercel.app/", text:"OLA", imgSrc:"https://img.freepik.com/premium-vector/electric-vehicle-concept-colored-flat-vector-illustration-isolated_612079-4839.jpg?w=826" }
    ];

    return (
        <div className="main-container">
            <motion.h2
                className="about-skills-title"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 1],
                }}
                transition={{
                    opacity: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1,
                        ease: "easeInOut",
                    },
                    scale: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 1,
                        ease: "easeInOut",
                    },
                }}
            >
                PROJECTS:
            </motion.h2>

            <div className="button-container">
                {buttons.map((button, index) => (
                    <Link to={button.to} className="link" key={index}>
                        <div className="card">
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
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.3, type: 'spring', stiffness: 100 }}
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
