import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Image, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './Zogly.png';
import Home from './routes/home';
import Calculator from './routes/calculator';
import Contact from './routes/contact';
import AboutUs from './routes/aboutus';
import Checkout from './routes/checkout';
import Success from './routes/success';

function App() {
  return (
    <Router>
      <div className="App" translate='yes'>
        <Container fluid style={{ padding: 0 }}>
          <div className='Header'>
            <Row>
              <Col xs={8} style={{ padding: 0 }}>
                <Navbar expand="lg" className="navbar-custom" variant="dark">
                  <Navbar.Brand href="/">
                    <Image src={logo} alt="Logo" fluid className="nav-logo" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to="/">Home</Nav.Link>
                      <Nav.Link as={Link} to="/calculator">Calculator</Nav.Link>
                      <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
                      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/">Zogly</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/sucess" element={<Success />}/>
          </Routes>
          <div className='Footer'>
            <Row>
              <Col style={{ paddingLeft: 0 }}>
                <Navbar expand="lg" className="navbar-custom" variant="dark">
                  <Navbar.Brand href="/">
                    <Image src={logo} alt="Logo" fluid className="nav-logo" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link href="#facebook">Facebook</Nav.Link>
                      <Nav.Link href="#twitter">Twitter</Nav.Link>
                      <Nav.Link href="#instagram">Instagram</Nav.Link>
                      <Nav.Link href='#sources'>Sources</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                      <Nav.Link as={Link} to="/">Zogly</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Router>
  );
}

export default App;
