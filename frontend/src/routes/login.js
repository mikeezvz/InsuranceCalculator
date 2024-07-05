import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Button, Spinner, Card, Form, Alert } from 'react-bootstrap';
function Login () {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showError, setShowError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
      setLoggedIn(true)
      localStorage.setItem('username', username);
      const result = await response.text();
      setTimeout(() => {
        navigate('/home');
    }, 2000);
    } 
    
    else {
      setShowError(true)
    }
};

if (loggedIn) {
  return (
    <div className='Login'>
      <Alert variant="success">
        <Alert.Heading>Login Successful</Alert.Heading>
        <p>You're logged in!</p>
      </Alert>
    </div>
  );
}

return(
    <div className='Login'>
       {showError && (
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
          <Alert.Heading>Login failed</Alert.Heading>
          <p>Incorrect password and/or username</p>
        </Alert>
      )}
      <Row>
        <Col>
        <h1>Login</h1>
        <br/>
        </Col>
        </Row>
        <Row className='login-row'>
          <Col>
        <Card className="logincard">
            <Card.Body>
              <Form className="login">
                <Form.Group controlId="">
                  <Form.Label>Your Username</Form.Label>
                  <Form.Control 
                  type="username" 
                  placeholder="username" 
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  />
                </Form.Group>
                <br/>
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
          <br/>
        <Button
        onClick={handleLogin}
        >Login</Button>
        </Col>
        </Row>
    </div>
)
};

export default Login;