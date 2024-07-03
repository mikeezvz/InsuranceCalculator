import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import Check from '../images/check.svg'

function Success() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    if (isLoading) {
        return (
            <Spinner animation="border" variant="success" />
        )
    }

  return (
    <div className="Success">
        <img src={Check} className='checkImage'></img>
        <br/>
        <br/>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <Button onClick={handleBackToHome} variant="primary">Back to Home</Button>
    </div>
  );
}

export default Success;
