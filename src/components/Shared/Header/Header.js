import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const {user,logOut} = useAuth();
    return (
<>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Unwind</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/home#testimonials">Testimonials</Nav.Link>
      <Nav.Link as={Link} to="/home#schedule">Schedule</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      <Nav.Link as={Link} to="/appointment">Appointment</Nav.Link>
      
      {
          user.email? 
          <Button onClick={logOut}>Log Out</Button>
          : <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      

      
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <br />
  
</>
    );
};

export default Header;