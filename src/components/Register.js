import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

function Register() {
  return (
    <Container>
      <Row style={{ marginTop: '2em', marginBottom: '2em' }}>
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
              Register
            </CardHeader>
            <CardBody>
              <CardText>
                <Form>
                  <FormGroup>
                    <Label for='exampleEmail'>Name</Label>
                    <Input
                      type='text'
                      name='name'
                      id='exampleName'
                      placeholder='Enter Name'
                    />
                  </FormGroup>
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
                    <Label for='exampleEmail'>NIC</Label>
                    <Input
                      type='text'
                      name='nic'
                      id='exampleNIC'
                      placeholder='Enter NIC'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='exampleEmail'>Phone No.</Label>
                    <Input
                      type='text'
                      name='phone'
                      id='examplePhone'
                      placeholder='Enter Phone No'
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
                  <FormGroup>
                    <Label for='confirmPassword'>Confirm Password</Label>
                    <Input
                      type='password'
                      name='confirmPassword'
                      id='examplePassword'
                      placeholder='Confirm Password'
                    />
                  </FormGroup>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      style={{ backgroundColor: '#f0ad4e', width: '100%' }}
                    >
                      Register
                    </Button>
                  </div>
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
                Already a member?{' '}
                <NavLink style={{ color: '#f2f2f2' }} to='/'>
                  Login here
                </NavLink>
              </p>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
