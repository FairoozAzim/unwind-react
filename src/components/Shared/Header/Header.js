import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css'
const Header = () => {
    const {user,logOut,isLoading} = useAuth();
    return (
<>
  <Navbar collapseOnSelect expand="lg" className="orange" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Unwind</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="nav-item" as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link className="nav-item" as={HashLink} to="/home#about">About Us</Nav.Link>
      <Nav.Link className="nav-item" as={HashLink} to="/#services">Services</Nav.Link>
      <Nav.Link className="nav-item" as={HashLink} to="/#testimonials">Testimonials</Nav.Link>
      <Nav.Link className="nav-item" as={HashLink} to="/home#schedule">Schedule</Nav.Link>
      <Nav.Link className="nav-item" as={Link} to="/contact">Contact</Nav.Link>
      
      {
          user.email? 
          <Button className="button" onClick={logOut}>Log Out</Button>
          : <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      {
        !isLoading && <Nav.Link to="/home" className="nav-item">{user.displayName}</Nav.Link>
      }
      <Nav.Link className="ms nav-item" as={Link} to="/appointment">Appointment</Nav.Link>
      
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
  
</>
    );
};

export default Header;