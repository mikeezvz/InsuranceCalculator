import React from 'react';
import { Row, Col, Container, Carousel, Button, Image } from 'react-bootstrap';
import handy from './images/brokenhandy.jpg';
import car from './images/brokencar.png';
import dish from './images/brokendish.jpg';
import caricon from './images/car.png';
import houseicon from './images/house.png';
import cybericon from './images/padlock.png';
import map from './images/map.png';

function Home() {
  return (
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
                className="carousel-image"
                src={handy}
                alt="First slide"
              />
              <Carousel.Caption className='transbox'>
                <h3>Broke the phone of your friend?</h3>
                <p>You are moving and the phone got under the shelf. We got you covered.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={car}
                alt="Second slide"
              />
              <Carousel.Caption className='transbox'>
                <h3>Your silly child decided to throw a rock out of fun and messed up?</h3>
                <p>The owner won't be happy. But we got you covered.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src={dish}
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
    </div>
  );
}

export default Home;
