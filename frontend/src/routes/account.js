import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Account() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/user`, {
          credentials: 'include'
        });
        if (response.ok) {
          const data = await response.json();
          console.log('User data:', data);
          setUser(data.username);
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

  const handleLogout = async () => {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/logout`, {
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
      <h4>Welcome, {user}</h4>
      <br/>
      <div className='plandetails'>
      <h2>Plan Details</h2>
      </div>
      <br/>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default Account;
