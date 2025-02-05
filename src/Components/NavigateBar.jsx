import React, { useState } from 'react'; 
import { Button, Navbar, Container } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import '../Components/NavbarStyle.css';

function NavigateBar() {
   

    return (
        <div>
            <div className="webnav">

                <Navbar fixed="top" bg="dark" variant="dark" >
                    <Container>

                        <Navbar.Brand href="#">PORTFOLIO</Navbar.Brand>

                        {/* Regular navbar items */}
                        <Link to="/" className="nav-link">
                            <button>HOME</button>
                        </Link>
                        <Link to='/Contactlog' className="nav-link">
                            <button>CONTACT</button>
                        </Link>
                        <Link to="/ThirdPage" className="nav-link">
                            <Button variant="outline-warning">SKILLS</Button>
                        </Link>

                        <Link to="/SecondPage" className="nav-link">
                            <Button variant="outline-secondary">ABOUT</Button>
                        </Link>
                        <Link to="/Mainpage" className="nav-link">
                            <Button variant="outline-primary">PROJECT</Button>
                        </Link>

                    </Container>
                </Navbar>
            </div>


            <div className='mobile'>
                <Navbar fixed="top" bg="dark" variant="dark" >
                    <Container>

                        <Navbar.Brand href="#">PORTFOLIO</Navbar.Brand>

                    
                        </Container>
                </Navbar>
            </div>
            <br/>
        </div>
    );
}

export default NavigateBar;
