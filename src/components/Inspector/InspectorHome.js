import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavBar from './Navbar';
import {Link, NavLink} from 'react-router-dom';
import { connect } from "react-redux";
import Login from "./Login";


function InspectorHome(props) {
  return (<>
    {props.ins && props.ins.userEmail !== null ?
    <div>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: '14em' }}>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
              <NavLink style={{ textDecoration: 'none' }} to='/inspector/tokenfilter'>
                  <Button className='border border-warning text-center font-weight-bold text-warning'
                          style={{width: '100%' ,backgroundColor: '#ffffff'}}>
                      <h4 className='font-weight-bold mt-1'>View Tokens</h4>
                  </Button>
              </NavLink>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
              <NavLink style={{ textDecoration: 'none' }} to='/inspector/passengers'>
                  <Button className='border border-warning text-center font-weight-bold text-warning'
                          style={{width: '100%' ,backgroundColor: '#ffffff'}}>
                      <h4 className='font-weight-bold mt-1'>Passenger Details</h4>
                  </Button>
              </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
        : <Login />}
      </>
  );
}
const mapsStateToProps = state => ({
  ins: state.ins
});

export default connect(mapsStateToProps, null)(InspectorHome);

