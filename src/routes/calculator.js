import React, { useState } from 'react';
import { Row, Col, Container, Card, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Calculator() {
  const [personalInfo, setPersonalInfo] = useState({
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const [persons, setPersons] = useState([{ firstName: '', lastName: '', birthday: '' }]);
  const [insurancePremium, setInsurancePremium] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [coverage, setCoverage] = useState(0);
  const [addOns, setAddOns] = useState({
    claimsDefault: false,
    cyberRisks: false,
    lossKeys: false,
    courtesyDamage: false,
    pureFinancialLoss: false,
    sportsLeisureDamage: false,
  });

const savePlanDetails = () => {
  localStorage.setItem('selectedPlan', selectedPlan);
  localStorage.setItem('persons', JSON.stringify(persons));
  localStorage.setItem('coverage', coverage);
  localStorage.setItem('insurancePremium', insurancePremium);
};

  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newPersons = [...persons];
    newPersons[index][name] = value;
    setPersons(newPersons);
  };

 

  const handleCheckout = () => {
    navigate('/checkout');
    savePlanDetails ();
  }

  const addPerson = () => {
    setPersons([...persons, { firstName: '', lastName: '', birthday: '' }]);
  };

  const countPersons = () => {
    return persons.length;
  };

  const handlePlanSelect = (plan) => {
    let basePremium = 0;
    let planCoverage = 0;
    if (plan === 'plan1') {
      basePremium = 20;
      planCoverage = 500000;
    }
    if (plan === 'plan2') {
      basePremium = 50;
      planCoverage = 2000000;
    }
    if (plan === 'plan3') {
      basePremium = 80;
      planCoverage = 10000000;
    }

    let addOnPremium = Object.values(addOns).filter(Boolean).length * 10;

    setSelectedPlan(plan);
    setCoverage(planCoverage);
    setInsurancePremium((basePremium + addOnPremium) * countPersons());
  };

  const handleAddOnChange = (event) => {
    const { id, checked } = event.target;
    setAddOns((prevState) => {
      const newAddOns = { ...prevState, [id]: checked };
      let basePremium = 0;
      if (selectedPlan === 'plan1') basePremium = 20;
      if (selectedPlan === 'plan2') basePremium = 50;
      if (selectedPlan === 'plan3') basePremium = 80;

      let addOnPremium = Object.values(newAddOns).filter(Boolean).length * 10;
      const totalPremium = (basePremium + addOnPremium) * countPersons();
      setInsurancePremium(totalPremium);

      return newAddOns;
    });
  };  return (
    <div className='Calculator'>
       <h1>Your information</h1>
        <br></br>
        <br></br>
       <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>E-Mail</Form.Label>
                  <Form.Control type="email" placeholder="E-Mail" />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone Nr.</Form.Label>
                  <Form.Control type="tel" placeholder="Phone Nr." />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Address</Card.Title>
              <Form>
                <Form.Group controlId="residence">
                  <Form.Label>Place of Residence</Form.Label>
                  <Form.Control type="text" placeholder="Place of Residence" />
                </Form.Group>
                <Form.Group controlId="zipCode">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control type="text" placeholder="Zip Code" />
                </Form.Group>
                <Form.Group controlId="street">
                  <Form.Label>Street</Form.Label>
                  <Form.Control type="text" placeholder="Street" />
                </Form.Group>
                <Form.Group controlId="houseNumber">
                  <Form.Label>House Number</Form.Label>
                  <Form.Control type="text" placeholder="House Number" />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Persons to be insured</Card.Title><p id='cardtitle'>(including yourself)</p>
          {persons.map((person, index) => (
            <Form key={index}>
              <Row className="mb-3">
                <Col md={1} className="d-flex align-items-center">
                  <div>{index + 1}</div>
                </Col>
                <Col md={3}>
                  <Form.Group controlId={`firstName${index}`}>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={person.firstName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId={`lastName${index}`}>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={person.lastName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group controlId={`birthday${index}`}>
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                      type="date"
                      name="birthday"
                      value={person.birthday}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          ))}
          <Button onClick={addPerson} variant="primary">
            Add Person
          </Button>
          <br></br>
          <br></br>
          <p>Anzahl der Personen: {countPersons()}</p>
        </Card.Body>
      </Card>
      <br></br>
      <Row>
        <Col>
        <h1>Plans</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <h3>View our plans.</h3>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col className='plan-col'>
          <div className='plan'>
            <h2>Plan 1</h2>
            <p className='price'>CHF 20/month</p>
            <h3>Includes</h3>
            <ul>
              <li>Personal Injury</li>
              <li>Property Damage</li>
              <li>Financial Loss</li>
            </ul>
            <Button onClick={() => handlePlanSelect('plan1')}>Select Plan 1</Button>
          </div>
          <br></br>
          <div className='addons'>
          <h2>Optional Add-ons</h2>
          <p className='price'>+CHF 10 per Add-on</p>
      
      <Row>
        <Col>
          <Form.Check 
            type="checkbox" 
            id="claims-default" 
            label="Coverage for Claims Default" 
            checked={addOns.claimsDefault}
            onChange={handleAddOnChange}
          />
        </Col>
        <Col>
          <Form.Check 
            type="checkbox" 
            id="cyber-risks" 
            label="Cyber Risks" 
            checked={addOns.cyberRisks}
            onChange={handleAddOnChange}
          />
        </Col>
        <Col>
          <Form.Check 
            type="checkbox" 
            id="loss-keys" 
            label="Loss of Keys" 
            checked={addOns.lossKeys}
            onChange={handleAddOnChange}
          />
        </Col>
      </Row>
      
      <Row>
        <Col>
          <Form.Check 
            type="checkbox" 
            id="courtesy-damage" 
            label="Courtesy Damage"
            checked={addOns.courtesyDamage}
            onChange={handleAddOnChange}
          />
        </Col>
        <Col>
          <Form.Check 
            type="checkbox" 
            id="pure-financial-loss" 
            label="Pure Financial Loss" 
            checked={addOns.pureFinancialLoss}
            onChange={handleAddOnChange}
          />
        </Col>
        <Col>
          <Form.Check 
            type="checkbox" 
            id="sports-leisure-damage" 
            label="Sports and Leisure Damage" 
            onChange={handleAddOnChange}
            checked={addOns.sportsLeisureDamage}
          />
        </Col>
      </Row>
          </div>

        </Col>
        <Col className='plan-col'>
          <div className='plan'>
            <h2>Plan 2</h2>
            <p className='price'>CHF 50/month</p>
            <h3>Includes</h3>
            <ul>
              <li>Personal Injury</li>
              <li>Property Damage</li>
              <li>Financial Loss</li>
              <li>Rental Property Damage</li>
              <li>Damages Caused by Children</li>
              <li>Good Samaritan Acts</li>
            </ul>
            <Button onClick={() => handlePlanSelect('plan2')}>Select Plan 2</Button>
          </div>        
        </Col>
        <Col className='plan-col'>
          <div className='plan'>
          <h2>Plan 3</h2>
          <p className='price'>CHF 80/month</p>
          <h3>Includes</h3>
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
        <Button onClick={() => handlePlanSelect('plan3')}>Select Plan 3</Button>
          </div>
        </Col>   
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Row>
  <Col>
    <div className='plandetails'>
      <h2>Plan Details</h2>
      <h4>Persons:</h4>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.firstName} {person.lastName}, Birthday: {person.birthday}
          </li>
        ))}
      </ul>
      <h4>Coverage: CHF {coverage}</h4>
      <h4>Total Insurance Premium: CHF {insurancePremium}</h4>
    </div>
  </Col>
</Row>
      <br></br>
      <br></br> 
      <Row>
        <Col>
        <Button
        onClick={handleCheckout}
        >Checkout</Button>
        </Col>
      </Row>
    </div>
  );
} 

export default Calculator;
