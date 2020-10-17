import React, {useEffect, useRef, useState} from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardText,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import access from '../../assets/access.svg';
import {NavLink} from "react-router-dom";

function NoAccess() {


  return (
    <Container>
      <Row style={{ marginTop: '8em' }}>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Card>
            <img
                height="100%"
                width="100%"
                src={access}
            />
            <NavLink style={{ textDecoration: 'none' }} to='/'>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    style={{ backgroundColor: '#d71010', width: '100%' }}
                >
                  <h4>No Access</h4>
                </Button>
              </div>
            </NavLink>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.ins.isAuthenticated,
  error : state.error
});

export  default NoAccess;

