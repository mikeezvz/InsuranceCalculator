import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Account() {
  const [user, setUser] = useState(null);
  const [newPlan, setNewPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://localhost:5000/user', {
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json();
          console.log('User data:', data);
          setUser(data);
        } else {
          setUser(null);
          navigate('/');
        }
      } catch (error) {
        console.error('Error checking session:', error);
        setUser(null);
        navigate('/');
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, [navigate]);

  useEffect(() => {
    if (!loading && !user) {
      navigate('/');
    }
  }, [loading, user, navigate]);

  const handlePlanChange = async () => {
    try {
      const response = await fetch('http://localhost:5000/changeplan', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          plan: newPlan,
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
      } else {
        const errorData = await response.json();
        console.error('Error updating plan and costs:', errorData);
      }
    } catch (error) {
      console.error('Error updating plan and costs:', error);
    }
  };

  const handleLogout = async () => {
    const response = await fetch('http://localhost:5000/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include'
    });

    if (response.ok) {
      setUser(null);
      navigate('/');
    } else {
      console.error('Logout failed');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='Account'>
      <h1>My Account</h1>
      <br/>
      <h4>Welcome, {user.username}</h4>
      <br/>
      <div className='plandetails'>
      <h2>Plan Details</h2>
      <h4>Your Plan: {user.plan}</h4>
      
      {user.plan === "Plan 1" && (
        <>
          <p className='price'>CHF {user.costs}/month</p>
          <h4>Persons</h4>
          <ul>
          {user.persons.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
          </ul>
          <h4>Includes</h4>
          <ul>
            <li>Personal Injury</li>
            <li>Property Damage</li>
            <li>Financial Loss</li>
          </ul>
          <h4>Payment Method</h4>
          <p>Your most recent payment method: {user.paymentmethod}</p>
        </>
      )}
      {user.plan === "Plan 2" && (
        <>
          <p className='price'>CHF {user.costs}/month</p>
          <h4>Includes</h4>
          <ul>
            <li>Personal Injury</li>
            <li>Property Damage</li>
            <li>Financial Loss</li>
            <li>Rental Property Damage</li>
            <li>Damages Caused by Children</li>
            <li>Good Samaritan Acts</li>
          </ul>
          <h4>Payment Method</h4>
          <p>Your most recent payment method: {user.paymentmethod}</p>
        </>
      )}
      {user.plan === "Plan 3" && (
        <>
          <p className='price'>CHF {user.costs}/month</p>
          <h4>Includes</h4>
          <ul>
            <li>Personal Injury</li>
            <li>Property Damage</li>
            <li>Financial Loss</li>
            <li>Rental Property Damage</li>
            <li>Damages Caused by Children</li>
            <li>Good Samaritan Acts</li>
            <li>Key Loss</li>
            <li>Internet Damage</li>
            <li>Pet Damage</li>
          </ul>
          <h4>Payment Method</h4>
          <p>Your most recent payment method: {user.paymentmethod}</p>
        </>
      )}
      </div>
      <br/>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Account;
