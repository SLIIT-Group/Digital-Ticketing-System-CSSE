import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Button,
} from 'reactstrap';

const Example = (props) => {
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
            <NavItem className="justify-content-center">
              <NavLink href='/user' className="justify-content-center text-center"><Button
                  style={{ backgroundColor: '#f0ad4e', width: '100%' }}
              >
                Passenger ID :
              </Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/manager' className="justify-content-center text-center">Manager</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/inspector' className="justify-content-center text-center">Inspector</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/' className="justify-content-center text-center">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
