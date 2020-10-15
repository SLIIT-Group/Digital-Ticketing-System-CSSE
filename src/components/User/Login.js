import React from 'react';

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
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <Container>
      <Row style={{ marginTop: '8em' }}>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Card>
            <CardHeader
              style={{
                color: '#f2f2f2',
                backgroundColor: '#292b2c',
                textAlign: 'center',
                fontSize: '1.2em',
              }}
            >
              Welcome
            </CardHeader>
            <CardBody>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for='exampleEmail'>Email</Label>
                    <Input
                      type='email'
                      name='email'
                      id='exampleEmail'
                      placeholder='Enter Email'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='examplePassword'>Password</Label>
                    <Input
                      type='password'
                      name='password'
                      id='examplePassword'
                      placeholder='Enter Password'
                    />
                  </FormGroup>
                  <NavLink style={{ textDecoration: 'none' }} to='/user'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        style={{ backgroundColor: '#f0ad4e', width: '100%' }}
                      >
                        Login
                      </Button>
                    </div>
                  </NavLink>
                </Form>
              </CardText>
            </CardBody>
            <CardFooter
              style={{
                padding: ' 0px',
                color: '#f2f2f2',
                fontSize: '0.8em',
                backgroundColor: '#292b2c',
                textAlign: 'center',
              }}
            >
              <p>
                Not a member?{' '}
                <NavLink style={{ color: '#f2f2f2' }} to='/register'>
                  Register here
                </NavLink>
              </p>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
