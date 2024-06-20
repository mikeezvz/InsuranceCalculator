import React from 'react';
import { Row, Col, Container, Carousel, Button, Image, Form } from 'react-bootstrap';

function TextControlsExample() {
    return (
    <div className='Contact'>
        <h1>Contact</h1>
        <br></br>
        <br></br>
      <Form>
        <Form.Group className="form">
          <Form.Label>Subject</Form.Label>
          <Form.Control type="" placeholder="" />
        </Form.Group>
        <br></br>
        <Form.Group className="form">
          <Form.Label>Describe your Problem</Form.Label>
          <Form.Control as="textarea" rows={10} />
        </Form.Group>
      </Form>
      <br></br>
      <Button>Submit</Button>
    </div>
    );
  }
  
  export default TextControlsExample;