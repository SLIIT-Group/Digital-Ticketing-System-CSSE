import React from 'react';
import { Card, Button, CardTitle, CardText, Badge, Row, Col } from 'reactstrap';

function Token() {
  const subheaderStyle = {
    color: 'grey',
    fontSize: '12px',
  };

  const infoStyle = {
    color: '#383838',
    fontSize: '14px',
    fontWeight: 'bold',
  };

  const sectionStyle = {
    marginBottom: '5px',
  };

  return (
    <Card style={{ backgroundColor: '#fcfcfc' }} body outline color='warning'>
      <CardTitle>
        {/* <Badge color='dark'>TRIP ID: #123</Badge> */}
        <Row xs='2'>
          <Col>
            <Badge color='dark'>TRIP ID: #123</Badge>
          </Col>
          <Col>
            <p className='font-weight-bold text-dark float-right'>
              {' '}
              E-TickeT !
            </p>
          </Col>
        </Row>
      </CardTitle>
      <CardText>
        <section style={sectionStyle}>
          <Row xs='2'>
            <Col style={subheaderStyle}>ORIGIN</Col>

            <Col style={subheaderStyle}>DESTINATION</Col>
          </Row>
          <Row xs='2'>
            <Col style={infoStyle}>Kaduwela</Col>

            <Col style={infoStyle}>Malabe</Col>
          </Row>
        </section>
        <section style={sectionStyle}>
          <Row xs='2'>
            <Col style={subheaderStyle}>DATE</Col>
            <Col style={subheaderStyle}>TIME</Col>
          </Row>
          <Row xs='2'>
            <Col style={infoStyle}>4 Mar 2020</Col>
            <Col style={infoStyle}>04:00PM</Col>
          </Row>
        </section>
        <section>
          <Row xs='2'>
            <Col style={subheaderStyle}>NAME</Col>
            <Col style={subheaderStyle}>AMOUNT</Col>
          </Row>
          <Row xs='2'>
            <Col style={infoStyle}>John Doe</Col>
            <Col style={infoStyle}>Rs. 150.00</Col>
          </Row>
        </section>
      </CardText>
    </Card>
  );
}

export default Token;
