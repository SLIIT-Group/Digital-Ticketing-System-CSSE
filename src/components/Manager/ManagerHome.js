import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavBar from './Navbar';
import { connect } from "react-redux";
import Login from "./Login";
import {NavLink} from "react-router-dom";

function ManagerHome(props) {
  return (<>
    {props.man && props.man.userEmail !== null?
    <div>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: '6em' }}>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
              <NavLink style={{ textDecoration: 'none' }} to='/generateTimeTable'>
                  <Button className='border border-warning text-center font-weight-bold text-warning'
                          style={{width: '100%' ,backgroundColor: '#ffffff'}}>
                      <h4 className='font-weight-bold mt-1'>Generate Timetables</h4>
                  </Button>
              </NavLink>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
              <NavLink style={{ textDecoration: 'none' }} to='/stats'>
                  <Button className='border border-warning text-center font-weight-bold text-warning'
                          style={{width: '100%' ,backgroundColor: '#ffffff'}}>
                      <h4 className='font-weight-bold mt-1'>Statistical Reports</h4>
                  </Button>
              </NavLink>
          </Col>
          <Col
              style={{ marginBottom: '2em' }}
              xs={{ size: 10, offset: 1 }}
              md={{ size: 10, offset: 1 }}
          >
              <NavLink style={{ textDecoration: 'none' }} to='/pins'>
                  <Button className='border border-warning text-center font-weight-bold text-warning'
                          style={{width: '100%' ,backgroundColor: '#ffffff'}}>
                      <h4 className='font-weight-bold mt-1'>Manage Pins</h4>
                  </Button>
              </NavLink>
          </Col>

          <Col
              style={{ marginBottom: '2em' }}
              xs={{ size: 10, offset: 1 }}
              md={{ size: 10, offset: 1 }}
          >
              <NavLink style={{ textDecoration: 'none' }} to='/viewInspectors'>
                  <Button className='border border-warning text-center font-weight-bold text-warning'
                          style={{width: '100%' ,backgroundColor: '#ffffff'}}>
                      <h4 className='font-weight-bold mt-1'>Manage Pins</h4>
                  </Button>
              </NavLink>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
              <NavLink style={{ textDecoration: 'none' }} to='/viewPassenger'>
                  <Button className='border border-warning text-center font-weight-bold text-warning'
                          style={{width: '100%' ,backgroundColor: '#ffffff'}}>
                      <h4 className='font-weight-bold mt-1'>View Passengers</h4>
                  </Button>
              </NavLink>
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

