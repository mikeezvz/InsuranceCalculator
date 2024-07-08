import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';

function Login() {
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('https://zogly-backend.vercel.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
      credentials: 'include' 
    });

    if (response.ok) {
      console.log('Login successful'); 
      navigate('/account');
    } else {
      setShowError(true);
    }
  };

  return (
    <div className='Login'>
      {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Login failed</Alert.Heading>
          <p>Incorrect username and/or password</p>
        </Alert>
      )}
      <Row>
        <Col>
          <h1>Login</h1>
          <br />
        </Col>
      </Row>
      <Row className='login-row'>
        <Col>
          <Card className="logincard">
            <Card.Body>
              <Form className="login">
                <Form.Group controlId="username">
                  <Form.Label>Your Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </Form.Group>
                <br />
                <Form.Group controlId="password">
                  <Form.Label>Your Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <br />
          <Button onClick={handleLogin}>Login</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
