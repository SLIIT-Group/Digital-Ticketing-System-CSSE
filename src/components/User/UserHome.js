import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavBar from './Navbar';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Login from "./Login";



function UserHome(props) {
  return (<>
    {props.pas.user && props.pas.user.pasEmail?
    <div>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: '10em' }}>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
            <Button className='border border-warning text-center font-weight-bold text-warning'
                    style={{width: '100%' ,backgroundColor: '#ffffff'}}>
              <h4 className='font-weight-bold mt-1'>Token</h4>
            </Button>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
            <NavLink style={{ textDecoration: 'none' }} to='/user/account'>
              <Button className='border border-warning text-center font-weight-bold text-warning'
                      style={{width: '100%' ,backgroundColor: '#ffffff'}}>
                <h4 className='font-weight-bold mt-1'>Account</h4>
              </Button>
            </NavLink>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
            <NavLink style={{ textDecoration: 'none' }} to='/addCredit'>
            <Button className='border border-warning text-center font-weight-bold text-warning'
                    style={{width: '100%' ,backgroundColor: '#ffffff'}}>
              <h4 className='font-weight-bold mt-1'>Add Credit</h4>
            </Button>
            </NavLink>
          </Col>
          <Col
            style={{ marginBottom: '2em' }}
            xs={{ size: 10, offset: 1 }}
            md={{ size: 10, offset: 1 }}
          >
            <NavLink style={{ textDecoration: 'none' }} to='/payFares'>
            <Button className='border border-warning text-center font-weight-bold text-warning'
                    style={{width: '100%' ,backgroundColor: '#ffffff'}}>
              <h4 className='font-weight-bold mt-1'> Pay Fares</h4>
            </Button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
        : <Login />}
  </>);
}
const mapsStateToProps = state => ({
  pas: state.pas
});

export default connect(mapsStateToProps, null)(UserHome);
