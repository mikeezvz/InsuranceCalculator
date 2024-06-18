import React from 'react';
import { Navbar, Nav, Image, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // oder './index.css', je nachdem, wo deine CSS-Datei ist
import logo from './Zogly.png';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" className="navbar-custom" variant="dark">
        <Navbar.Brand href="#main">
          <Image src={logo} alt="Logo" fluid className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#main">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#calculator">Calculator</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#main">Zogly</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-5">
        <h1>Welcome to the Private Liability Insurance  Calculator</h1>
        <br></br>
        <br></br>
        <p>Calculate your liability insurance coverage and costs</p>
        <br></br>
        <br></br>
        <Button variant="primary" size='lg'>Get Started</Button>
      </Container>
    </div>
  );
}

export default App;
