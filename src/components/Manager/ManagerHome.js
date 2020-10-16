import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavBar from './Navbar';

function ManagerHome() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: '6em' }}>
          {/* <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button color='primary' size='lg' block>
              System Overview
            </Button>
          </Col> */}
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button href='/generateTimeTable' color='primary' size='lg' block>
              Generate Timetable
            </Button>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button color='primary' size='lg' block>
              Statistical Report
            </Button>
          </Col>

          <Col
              style={{ marginBottom: '2em' }}
              xs={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
          >
            <Button  href='/viewInspectors' color='primary' size='lg' block>
              View Inspectors
            </Button>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button href='/viewPassenger' color='primary' size='lg' block>
              View Users
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ManagerHome;
