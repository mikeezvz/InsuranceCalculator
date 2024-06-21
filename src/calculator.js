import React from 'react';
import { useState } from 'react';
import { Row, Col, Container, Carousel, Button, Image, Form } from 'react-bootstrap';

function Calculator() {
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
    setInsurancePremium(basePremium + addOnPremium);
  };

  const handleAddOnChange = (event) => {
    const { id, checked } = event.target;
    setAddOns(prevState => {
      const newAddOns = { ...prevState, [id]: checked };
      let basePremium = 0;
      if (selectedPlan === 'plan1') basePremium = 20;
      if (selectedPlan === 'plan2') basePremium = 50;
      if (selectedPlan === 'plan3') basePremium = 80;

      let addOnPremium = Object.values(newAddOns).filter(Boolean).length * 10;

      setInsurancePremium(basePremium + addOnPremium);

      return newAddOns;
    });
  };
  return (
    <div className='Calculator'>
      <Row>
        <Col>
        <h1>Insurance calculator</h1>
        </Col>
      </Row>
      <br></br>
      <br></br>
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
            checked={addOns.sportsLeisureDamage}
            onChange={handleAddOnChange}
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
      <Row>
        <Col>
        <div className='plandetails'>
        <h2>Plan Details</h2>
        <h4>Coverage: CHF {coverage}</h4>
        <h4>Total Insurance Premium: CHF {insurancePremium}</h4>
        </div>
        </Col>
      </Row>
      <br></br>
      <br></br> 
      <Row>
        <Col>
        <Button>Checkout</Button>
        </Col>
      </Row>
    </div>
  );
} 

export default Calculator;
