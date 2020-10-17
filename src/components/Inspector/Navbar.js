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
import { logout } from "../../actions/insActions";
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
      <Navbar color='dark' dark>
        <NavbarBrand href='/' className='mr-auto font-weight-bold text-warning'>
          E-TickeT !
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/inspector' className="justify-content-center text-center"><Button
                  style={{ backgroundColor: '#f0ad4e', width: '100%' }}
              >
                Inspector : {localStorage.getItem('userName')}
              </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/inspector' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Home
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/inspector/tokenfilter' className="justify-content-center text-left pb-1">
                <Button className='border border-warning text-left font-weight-bold text-warning'
                        style={{width: '100%' ,backgroundColor: '#292b2c'}}>
                  Tokens
                </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/inspector/passengers' className="justify-content-center text-left pb-1">
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
  ins: state.ins
});

export default connect(mapsStateToProps, { logout })(Example);
