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

const Example = (props) => {
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
    console.log(props);
    if(props.ins.user) {
      setName(props.ins.user.userName);
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
            <NavItem>
              <NavLink href='/inspector' className="justify-content-center text-center"><Button
                  style={{ backgroundColor: '#f0ad4e', width: '100%' }}
              >
                Inspector : {name}
              </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/user' className="justify-content-center text-center"><Button className='btn btn-warning'
                  style={{width: '50%' }}
              >
                User
              </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/manager' className="justify-content-center text-center"><Button className='btn btn-warning'
                  style={{ width: '50%' }}
              >
                Manager
              </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/' className="justify-content-center text-center"><Button className='btn btn-warning'
                  style={{width: '50%' }}
              >
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
