import React, { useState } from 'react';
import { Navbar, Nav, Image, Container, Button, Row, Col, Dropdown, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './Zogly.png';
import car from './liability/brokencar.png';
import dish from './liability/brokendish.jpg';
import handy from './liability/brokenhandy.jpg';
import caricon from './liability/car.png';
import houseicon from './liability/house.png';
import cybericon from './liability/padlock.png';
import map from './liability/map.png'


function App() {
  const [language, setLanguage] = useState('DE');

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <Container fluid style={{ padding: 0 }}>
        <div className='Header'>
          <Row>
            <Col xs={8} style={{ padding: 0 }}>
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
            </Col>
            <Col xs={1} style={{ padding: 0 }} className='language'>
              <h2>{language}</h2>
            </Col>
            <Col xs={2} className='language'>
              <Dropdown onSelect={handleLanguageChange}>
                <Dropdown.Toggle>
                  Language/Sprache
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="DE">Deutsch</Dropdown.Item>
                  <Dropdown.Item eventKey="EN">English</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </div>
        <div className='GetStarted'>
          <Row>
            <Col>
              <h1>Welcome to the Private Liability Insurance Calculator</h1>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <p>Calculate your liability insurance coverage and costs</p>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <Button variant="primary" size='lg'>Get started</Button>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row className='mt-5'>
            <Container className='mt-5'>
              <Carousel>
                <Carousel.Item>
                  <img
                    class = "carousel-image"
                    src= {handy}
                    alt="First slide"
                  />
                  <Carousel.Caption className='transbox'>
                    <h3>Broke the phone of your friend?</h3>
                    <p>You are moving and the phone got under the shelf. We got you covered. </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    class = "carousel-image"
                    src= {car}
                    alt="Second slide"
                  />
                  <Carousel.Caption className='transbox'>
                    <h3>Your silly child decided to throw a rock out of fun and messed up?</h3>
                    <p>The owner won't be happy. But we got you covered.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    class = "carousel-image" 
                    src= {dish}
                    alt="Third slide"
                  />
                  <Carousel.Caption className='transbox'>
                    <h3>You've been invited to someone's dinner and the collector plates broke?</h3>
                    <p>It is going to be expensive. But we got you covered.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Container>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <h2 id='ViewAlso'>View also</h2>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div className='ViewAlso'>
          <Row>
            <Col>
              <h3 className='Insurance'>Car insurance</h3>
            </Col>
            <Col>
              <h3 className='Insurance'>Household contents insurance</h3>
            </Col>
            <Col>
              <h3 className='Insurance'>Cyber insurance</h3>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <Row>
            <Col>
              <Image src={caricon} className='icon'></Image>
            </Col>
            <Col>
              <Image src={houseicon} className='icon'></Image>
            </Col>
            <Col>
              <Image src={cybericon} className='icon'></Image>
            </Col>
          </Row>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <div className='Locations'>
              <h2 className='space'>Locations</h2>
              <p className='space'><a href='https://maps.app.goo.gl/tKqBdPXkVcHWjN3e8' className='space'>5th Avenue, New York City</a></p>
              <p className='space'><a href='https://maps.app.goo.gl/siVqm4xR2Av8CfJg7' className='space'>Times Square, New York City</a></p>
              <p className='space'><a href='https://maps.app.goo.gl/g3Jk4LPeaHxJBNnV9' className='space'>Bahnofstrasse, Zurich</a></p>  
              <p className='space'><a href='https://maps.app.goo.gl/RB76eKUncvveBuur5' className='space'>Paradeplatz, Zurich</a></p>
            </div>
          </Col>
          <Col>
          <div className='Map'>
            <img src={map} id='map'></img>
          </div>
          </Col>
        </Row>
        <div className='Footer'>
          <Row>
            <Col style={{ paddingLeft: 0 }}>
              <Navbar expand="lg" className="navbar-custom" variant="dark">
                <Navbar.Brand href="#main">
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
                    <Nav.Link href="#main">Zogly</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
