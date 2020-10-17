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
            <Badge color='dark'>Inspector ID: {token._id}</Badge>
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
            <Col style={subheaderStyle}>Name</Col>

            <Col style={subheaderStyle}>Email</Col>
          </Row>
          <Row xs='2'>
            <Col style={infoStyle}>{token.insUserName}</Col>

            <Col style={infoStyle}>{token.insEmail}</Col>
          </Row>
        </div>
      </CardText>
    </Card>
  );
}

export default Token;
