import React from 'react';
import { Card, CardTitle, CardText, Badge, Row, Col } from 'reactstrap';

function Token({ token }) {
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
        <Row xs='2'>
          <Col>
            <Badge color='dark'>TRIP ID: {token.tripId}</Badge>
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
        <div style={sectionStyle}>
          <Row xs='2'>
            <Col style={subheaderStyle}>ORIGIN</Col>

            <Col style={subheaderStyle}>DESTINATION</Col>
          </Row>
          <Row xs='2'>
            <Col style={infoStyle}>{token.origin}</Col>

            <Col style={infoStyle}>{token.destination}</Col>
          </Row>
        </div>
        <div style={sectionStyle}>
          <Row xs='2'>
            <Col style={subheaderStyle}>DATE</Col>
            <Col style={subheaderStyle}>TIME</Col>
          </Row>
          <Row xs='2'>
            <Col style={infoStyle}>{token.date}</Col>
            <Col style={infoStyle}>{token.time}</Col>
          </Row>
        </div>
        <div>
          <Row xs='2'>
            <Col style={subheaderStyle}>NAME</Col>
            <Col style={subheaderStyle}>AMOUNT</Col>
          </Row>
          <Row xs='2'>
            <Col style={infoStyle}>{token.name}</Col>
            <Col style={infoStyle}>{token.amount}</Col>
          </Row>
        </div>
      </CardText>
    </Card>
  );
}

export default Token;
