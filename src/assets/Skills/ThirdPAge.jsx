import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Third.css';

import htmlIcon from "/src/Images/html-5.png";
import cssIcon from "/src/Images/css.png";
import jsIcon from "/src/Images/java-script.png";


function ThirdPage() {
  const [activeCard, setActiveCard] = useState('');

  const handleCardClick = (card) => {
    setActiveCard(activeCard === card ? null : card);
  };

  return (

    <div className="video-background-container">
      <motion.h1
        className="hw"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        SKILLS
      </motion.h1>
      <div
        className="learning-container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Dynamic grid with flexible columns
          gap: '20px',
          padding: '20px',
          justifyItems: 'center',
          width: '100%',
          color: 'yellow'
        }}
      >
        {/* HTML Card */}
        <motion.div
          className={`learning-item ${activeCard === 'html' ? 'active' : ''}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => handleCardClick('html')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '15px', background: 'black' }}
        >
          <img src={htmlIcon} alt="HTML" className="tech-icon" />
          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            HTML
          </motion.h3>

        </motion.div>

        {/* CSS Card */}
        <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          onClick={() => handleCardClick('css')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '15px', background: 'black' }}
        >
          <img src={cssIcon} alt="CSS" className="tech-icon" />
          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            CSS
          </motion.h3>

        </motion.div>

        {/* JavaScript Card */}
        <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          onClick={() => handleCardClick('js')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '15px', background: 'black' }}
        >
          <img src={jsIcon} alt="JavaScript" className="tech-icon" />
          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            JAVASCRIPT
          </motion.h3>

        </motion.div>

        {/* React Card */}
        <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          onClick={() => handleCardClick('react')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '15px', background: 'black' }}
        >
          <img src="https://imgs.search.brave.com/9vKTcCIDDozQMYqmROSq7hb9MEbNZjl7SDPlkheHaG0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvUmVhY3Rf/bG9nb19sb2dvdHlw/ZV9lbWJsZW0tNzAw/eDYyNi5wbmc" alt="React" className="tech-icon" />
          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            REACT
          </motion.h3>

        </motion.div>

        {/* Node.js Card */}
        <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8 }}
          onClick={() => handleCardClick('node')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '15px', background: 'black' }}
        >
          <img src={'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'} alt="Node.js" className="tech-icon" />
          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center', padding: '10px' }}
          >
            NODE.JS
          </motion.h3>

        </motion.div>

        {/* MongoDB Card */}
        <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          onClick={() => handleCardClick('mongodb')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '15px', background: 'black' }}
        >
          <img src={"https://imgs.search.brave.com/A5fgk_PDeP_UtAwayg6FF0hKArvi-Lh0iZGHNsT-wlA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2xvZ28tbW9u/Z29kYi1wbmctZmls/ZS1tb25nb2RiLWxv/Z28tc3ZnLTEwMjQu/cG5n"} alt="MongoDB" className="tech-icon" />
          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            MONGODB
          </motion.h3>

        </motion.div>
        {/* EXPRESS Card */}
        <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          onClick={() => handleCardClick('mongodb')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '15px', background: 'black' }}
        >
          <img src={"https://imgs.search.brave.com/Nl3NY_blqManrX5mz2JNxeyXGmsAe8bD1lSVtHDKMRw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jbG91/ZC5naXRodWJ1c2Vy/Y29udGVudC5jb20v/YXNzZXRzLzk1MDEx/Mi8xNDA4MDc0MC84/ZjkyMDM3YS1mNTI0/LTExZTUtOGM1Mi0y/N2E5YWM2M2FmNTAu/cG5n"} alt="MongoDB" className="tech-icon" />
          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            EXPRESS.JS
          </motion.h3>

        </motion.div>

        {/* GIT HUB Card */}
        <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          onClick={() => handleCardClick('mongodb')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '15px', background: 'black' }}
        >
          <img src={"https://imgs.search.brave.com/9csQs7n45LOxCX5IKDCmwlJH7UaNxfcbjhQ8eru1tE4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8y/LzI0L0dpdGh1Yl9s/b2dvX3N2Zy5zdmc"} alt="MongoDB" className="tech-icon" />
          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            GITHUB
          </motion.h3>

        </motion.div>



        {/* POST MAN Card */}
        <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          onClick={() => handleCardClick('mongodb')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '10px', background: 'black' }}
        >
          <img src={"https://imgs.search.brave.com/G4W4ekbS31fQcq7GkHDgmKogV4VQ6iafr52f_r53kuc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1AvcG9zdG1h/bi1hcGktcGxhdGZv/cm0tbG9nby1ENkI4/QUI5QjBELXNlZWts/b2dvLmNvbS5wbmc"}alt="MongoDB" className="tech-icon" />

          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            POSTMAN
          </motion.h3>

        </motion.div>


           {/* FIREBASE Card */}
           <motion.div
          className="learning-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1 }}
          onClick={() => handleCardClick('mongodb')}
          whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
          style={{ borderRadius: '12px', overflow: 'hidden', padding: '10px', background: 'black' }}
        >
          <img src={"https://imgs.search.brave.com/sOv_5GQnC11NvZdTD2kCJi1LPmCsTBu48lANSXl2H8M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODQ3ZjQwZWNlZjEw/MTRjMGI1ZTQ4OGEu/cG5n"}alt="MongoDB" className="tech-icon" />

          <motion.h3
            className="tech-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '18px', margin: '10px 0', textAlign: 'center' }}
          >
            FIREBASE
          </motion.h3>

        </motion.div>






      </div>
    </div>


  );
}

export default ThirdPage;
