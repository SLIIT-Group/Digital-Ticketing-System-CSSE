import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavBar from './Navbar';
import { Link } from 'react-router-dom';

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
            <Link
              style={{ textDecoration: 'none' }}
              to='/inspector/tokenfilter'
            >
              <Button color='primary' size='lg' block>
                View Tokens
              </Button>
            </Link>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Link style={{ textDecoration: 'none' }} to='/inspector/passengers'>
              <Button color='primary' size='lg' block>
                Passenger Details
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default InspectorHome;
