import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../styles/Navbar.css";
import logo from '../images/Product_club_Logo-removebg-Preview.png';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      bg="dark" 
      variant="dark" 
      expand="lg" 
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      fixed="top"
    >
      <Container>
        
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="d-inline-block align-top" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/team">Team</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/achievements">Achievements</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
