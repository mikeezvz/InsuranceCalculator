import React, { useState, useEffect } from 'react';
import { Form, Row, Col, OverlayTrigger, Tooltip, Accordion, Card, Button } from 'react-bootstrap';
import questionMark from '../images/question.png';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('None');
  const navigate = useNavigate();

  const renderTooltip1 = (props) => (
    <Tooltip {...props}>
      You can choose to pay via bank transfer. The money is withdrawed directly from your account balance. It can take up to 2 days for the money to reach us. Your order will be placed matterless of the transaction.
    </Tooltip>
  );

  const renderTooltip2 = (props) => (
    <Tooltip {...props}>
      You can choose to pay with TWINT. TWINT is a Swiss payment service that allows you to pay via QR-Code or just a numeric code.
    </Tooltip>
  );

  const [selectedPlan, setSelectedPlan] = useState('');
  const [persons, setPersons] = useState([]);
  const [coverage, setCoverage] = useState('');
  const [insurancePremium, setInsurancePremium] = useState('');

  useEffect(() => {
    const storedPlan = localStorage.getItem('selectedPlan');
    const storedPersons = localStorage.getItem('persons');
    const storedCoverage = localStorage.getItem('coverage');
    const storedInsurancePremium = localStorage.getItem('insurancePremium');

    if (storedPlan) {
      setSelectedPlan(storedPlan);
    }

    if (storedPersons) {
      setPersons(JSON.parse(storedPersons));
    }

    if (storedCoverage) {
      setCoverage(storedCoverage);
    }

    if (storedInsurancePremium) {
      setInsurancePremium(storedInsurancePremium);
    }
  }, []);

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'Credit-/Debitcard':
        return (
          <Card className="paymentMethodForm">
            <Card.Body>
              <Card.Title>Your Credit-/Debitcard details</Card.Title>
          <Form>
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter card number" />
            </Form.Group>
            <Form.Group controlId="cardName">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control type="text" placeholder="Enter name on card" />
            </Form.Group>
            <Form.Group controlId="expiryDate">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
            <Form.Group controlId="cvv">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" placeholder="CVV" />
            </Form.Group>
          </Form>
          </Card.Body>
          </Card>
        );

      case 'Pay via bank transfer':
        return (
          <Card className="paymentMethodForm">
          <Card.Body>
            <Card.Title>Enter bank details</Card.Title>
          <Form>
            <Form.Group controlId="accountHolder">
              <Form.Label>Account holder</Form.Label>
              <Form.Control type="text" placeholder="Enter the name of the account holder" />
            </Form.Group>
            <Form.Group controlId="IBAN">
              <Form.Label>IBAN</Form.Label>
              <Form.Control type="text" placeholder="Enter your IBAN" />
            </Form.Group>
            <Form.Group controlId="BIC">
              <Form.Label>BIC/SWIFT-Code</Form.Label>
              <Form.Control type="text" placeholder="Enter your BIC/SWIFT-Code" />
            </Form.Group>
          </Form>
          </Card.Body>
          </Card>
        );
      default:
        return null;
    }
  };

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
    renderPaymentForm();
  };

  const handlePayment = () => {
    navigate('/success')
  }

  return (
    <div className='Checkout'>
      <h1>Checkout</h1>
      <br />
      <Form id='payment'>
        <Row className="mb-3 align-items-center">
          <Col xs="auto">
            <Form.Check
              onChange={handlePaymentChange}
              inline
              label="Pay via bank transfer"
              name="paymentMethod"
              type={'radio'}
              id="inline-radio-1"
              value="Pay via bank transfer"
            />
          </Col>
          <Col xs="auto">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip1}
            >
              <img
                className='questionMark'
                src={questionMark}
                alt="Question Mark"
              />
            </OverlayTrigger>
          </Col>
        </Row>
        <Row className="mb-3 align-items-center">
          <Col xs="auto">
            <Form.Check
              onChange={handlePaymentChange}
              inline
              label="Credit-/Debitcard"
              name="paymentMethod"
              type={'radio'}
              id="inline-radio-2"
              value="Credit-/Debitcard"
            />
          </Col>
        </Row>
        <Row className="mb-3 align-items-center">
          <Col xs="auto">
            <Form.Check
              onChange={handlePaymentChange}
              inline
              label="TWINT"
              name="paymentMethod"
              type={'radio'}
              id="inline-radio-3"
              value="TWINT"
            />
          </Col>
          <Col xs="auto">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip2}
            >
              <img
                className='questionMark'
                src={questionMark}
                alt="Question Mark"
              />
            </OverlayTrigger>
          </Col>
        </Row>
        <Row>
          <Col xs="auto">
            <Form.Check
              onChange={handlePaymentChange}
              inline
              label="Apple Pay"
              name="paymentMethod"
              type={'radio'}
              id="inline-radio-4"
              value="Apple Pay"
            />
          </Col>
        </Row>
      </Form>
      <br />
      <Row>
        <Col>
          <h2>Frequently asked questions</h2>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Accordion defaultActiveKey='0'>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Why is your payment safe?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Your security is our priority. 
                  We use advanced encryption and Secure Socket Layer (SSL) technology to ensure that all transactions are secure and your information 
                  remains private. Our payment system complies with the Payment Card Industry Data Security Standard (PCI DSS), 
                  which ensures that your data is handled with the highest security standards. Additionally, we employ fraud detection and prevention mechanisms to monitor 
                  transactions for any suspicious activity. Our secure payment gateways and commitment to data privacy further guarantee the safety of your transactions. 
                  You can trust that your payments are secure with us.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Why do you exclude certain customers from payment methods?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  To maintain the highest level of security and compliance, we may exclude certain customers from specific payment methods. 
                  This could be due to a variety of factors, including the risk associated with the payment method, regulatory requirements, or past transaction history.
                  By implementing these exclusions, we aim to protect both our customers and our business from potential fraud and financial loss. 
                  If you have any questions about your eligibility for certain payment methods, please contact our customer support team for assistance.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Can I refund my purchase?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Yes you can refund your purchase and get refunded the whole amount within 10 days after your purchase.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                How long does it take for my subscription to be activated?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3"> 
                <Card.Body>
                  Right after you bought it. Although some customers face issues with the activation of their subscription. This can be due to payment issues (card declined, insufficient funds, etc.), slow connection and so on.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
      <br/>
      {renderPaymentForm()}
      <br />
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
        <h4>Selected payment method: {paymentMethod}</h4>
      </div>
      <br/>
    <Button
    onClick={handlePayment}
    >Pay and place order</Button>
    </div>
  );
}

export default Checkout;
