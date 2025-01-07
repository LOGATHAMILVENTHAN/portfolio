import { useState } from 'react';
import FirstPage from './Components/FirstPage';
import { Button } from 'react-bootstrap';
import NavigateBar from './Components/NavigateBar';
import SecondPage from './assets/About/SecondPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThirdPage from './assets/Skills/ThirdPAge';
import Mainpage from './assets/Projects/Mainpage';
import Contactlog from './assets/Contact/Contactlog';


function App() {
  return (
    <>
      <div style={{ height: "100%" }}>
        <BrowserRouter>
          <div style={{ position: "sticky", top:0 , zIndex: 1000 }}>
            <NavigateBar />
          </div>
          <div style={{ height: "85%", overflowY: 'auto' }}>
            <Routes>
              <Route path="/" exact element={<FirstPage />} />
              <Route path="/SecondPage" element={<SecondPage />} />
              <Route path="/ThirdPage" element={<ThirdPage />} />
             
              <Route path="/Mainpage" element={<Mainpage />} />
              <Route path="/Contactlog" element={<Contactlog/>} />
              
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;

