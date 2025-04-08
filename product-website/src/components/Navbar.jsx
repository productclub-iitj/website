import { useState } from 'react';
import { Navbar, Offcanvas, Nav, Container } from 'react-bootstrap';
import "../styles/Navbar.css";
import logo from '../images/Product_club_Logo-removebg-Preview.png';

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false} className="navbar-custom">
        <Container>
          {/* Logo on the left */}
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className="d-inline-block align-top" />
          </Navbar.Brand>
          
          {/* Hamburger icon on the right */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={() => setShow(true)} />
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="offcanvas-custom">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id='menu'>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#about" onClick={() => setShow(false)}>About</Nav.Link>
            <Nav.Link href="#team" onClick={() => setShow(false)}>Team</Nav.Link>
            <Nav.Link href="#resources" onClick={() => setShow(false)}>Resources</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyNavbar;
