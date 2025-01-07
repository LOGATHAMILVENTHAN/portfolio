
import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavbarStyle.css';  // Assuming you'll add custom CSS in this file.

function NavigateBar() {
    return (
        <div className="navweb">
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#">LOGATHAMILVENTHAN</Navbar.Brand>
                    <Link to="/">
                        <button>HOME</button>
                    </Link>
                   <Link to='/Contactlog'>
                    <button>CONTACT</button>
                    </Link>
                    <Link to="/ThirdPage">
                        <Button variant="outline-warning">SKILLS</Button>
                    </Link>

                    <Link to="/SecondPage">
                        <Button variant="outline-secondary">ABOUT</Button>
                    </Link>
                    <Link to="/Mainpage">
                        <Button variant="outline-primary">PROJECT</Button>
                    </Link>
                    
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigateBar;
