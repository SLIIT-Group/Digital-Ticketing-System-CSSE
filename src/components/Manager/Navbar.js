import React, {useEffect, useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Button,
} from 'reactstrap';
import { logout } from "../../actions/manActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import swal from "sweetalert";
import {useHistory} from "react-router";

const Example = (props) => {
  let propTypes = {
    logout: PropTypes.func.isRequired,
  };

  const history = useHistory();
  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
    history.push('/');
  };
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  return (
    <div>
      {console.log(props)}
      <Navbar color='dark' dark>
        <NavbarBrand href='/' className='mr-auto font-weight-bold text-warning'>
          E-TickeT !
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/manager' className="justify-content-center text-center"><Button
                  style={{ backgroundColor: '#f0ad4e', width: '100%' }}>
                Manager : {localStorage.getItem('userName')}
              </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/manager' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Home
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/generateTimeTable' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Timetables
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/stats'  className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Statistical Reports
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/pins' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Pins
              </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/viewInspectors' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Inspectors
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/viewPassenger' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Passengers
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}} onClick={logoutUser}>
                Logout
              </Button></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapsStateToProps = state => ({
  man: state.man
});

export default connect(mapsStateToProps, { logout })(Example);
