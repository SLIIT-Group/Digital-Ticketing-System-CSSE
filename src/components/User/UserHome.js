import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavBar from '../Navbar';

function UserHome() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: '6em' }}>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button color='primary' size='lg' block>
              Request Token
            </Button>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button color='primary' size='lg' block>
              Account
            </Button>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button href='/addCredit' color='primary' size='lg' block>
              Add Credit
            </Button>
          </Col>
          <Col
              style={{ marginBottom: '2em' }}
              xs={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
          >
            <Button href='/payFares' color='primary' size='lg' block>
              Pay fares
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserHome;
