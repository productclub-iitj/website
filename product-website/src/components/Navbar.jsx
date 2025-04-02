import { useState } from 'react';
import { Navbar, Offcanvas, Nav, Container } from 'react-bootstrap';

const MyNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand={false}>
        <Container>
          {/* Logo on the left */}
          <Navbar.Brand href="#home">
            <img
              src="/logo.png" // Replace with your logo path
              alt="Logo"
              height="40"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          
          {/* Hamburger icon on the right */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
        </Container>
      </Navbar>

      {/* Offcanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} placement="end" style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#about" onClick={handleClose}>About</Nav.Link>
            <Nav.Link href="#team" onClick={handleClose}>Team</Nav.Link>
            <Nav.Link href="#resources" onClick={handleClose}>Resources</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default MyNavbar;
