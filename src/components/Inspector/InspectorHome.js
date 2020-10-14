import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavBar from '../Navbar';

function InspectorHome() {
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
              View Tokens
            </Button>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button color='primary' size='lg' block>
              Passenger Details
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InspectorHome;
