import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color='dark' dark>
        <NavbarBrand href='/' className='mr-auto'>
          Digital Ticketing System
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/user'>User</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/manager'>Manager</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/inspector'>Inspector</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
