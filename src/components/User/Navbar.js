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
import { logout } from "../../actions/pasActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import swal from "sweetalert";

function Example (props) {

  let propTypes = {
    logout: PropTypes.func.isRequired,
  };

  const logoutUser = (e) => {
    e.preventDefault();
    props.logout();
    /*props.history.push('/');*/
  };

  const [collapsed, setCollapsed] = useState(true);
  const [name, setName] = useState('');

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    if(props.pas.user) {
      setName(props.pas.user.userName);
    }
  });
  return (

    <div>
      <Navbar color='dark' dark>
        <NavbarBrand href='/' className='mr-auto font-weight-bold text-warning'>
          E-TickeT !
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="justify-content-center">
              <NavLink href='/user' className="justify-content-center text-center"><Button
                  style={{ backgroundColor: '#f0ad4e', width: '100%' }}
              >
                Passenger : {name}
              </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/user' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Home
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/generateTimeTable' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Token
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/user/account'  className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Account
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/addCredit' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Add Credit
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/payFares' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Pay Fares
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
  pas: state.pas
});

export default connect(mapsStateToProps, { logout })(Example);

