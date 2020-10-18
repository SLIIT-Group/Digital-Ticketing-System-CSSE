import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavBar from './Navbar';
import { connect } from "react-redux";
import Login from "./Login";

function ManagerHome(props) {
  return (<>
    {props.man && props.man.userEmail !== null?
    <div>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: '6em' }}>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button href='/generateTimeTable' color='primary' size='lg' block>
              Generate Timetables
            </Button>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 6, offset: 3 }}
            md={{ size: 6, offset: 3 }}
          >
            <Button href='/stats' color='primary' size='lg' block>
              Statistical Reports
            </Button>
          </Col>
          <Col
              style={{ marginBottom: '2em' }}
              xs={{ size: 6, offset: 3 }}
              md={{ size: 6, offset: 3 }}
          >
            <Button href='/pins' color='primary' size='lg' block>
              Manage Pins
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
              View Passengers
            </Button>
          </Col>
        </Row>
      </Container>
    </div>: <Login />}
      </>
  );
}
const mapsStateToProps = state => ({
  man: state.man
});

export default connect(mapsStateToProps, null)(ManagerHome);

