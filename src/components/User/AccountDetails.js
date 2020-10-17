import React from 'react';
import NavBar from './Navbar';
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Login from "./Login";

function AccountDetails(props) {
  const user = {
    name: 'John Doe',
    nic: '963211453V',
    email: 'jdoe@gmail.com',
    lastTravelDate: '2020-10-16',
    lastTravelTime: '16:00',
  };
  return (<>
    {props.pas.user && props.pas.user.pasEmail?
    <div>
      <NavBar></NavBar>
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
                Account Details
              </CardHeader>
              <CardBody>
                <CardText>
                  <Form>
                    <FormGroup>
                      <Label for='exampleEmail'>Name</Label>
                      <Input
                        disabled
                        type='text'
                        name='name'
                        id='exampleName'
                        value={user.name}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='exampleEmail'>Email</Label>
                      <Input
                        disabled
                        type='email'
                        name='email'
                        id='exampleEmail'
                        value={user.email}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='examplePassword'>NIC</Label>
                      <Input
                        disabled
                        type='text'
                        name='password'
                        id='examplePassword'
                        value={user.nic}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='confirmPassword'>Last Travel Date</Label>
                      <Input
                        disabled
                        type='text'
                        name='confirmPassword'
                        id='examplePassword'
                        value={user.lastTravelDate}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='confirmPassword'>Last Travel Time</Label>
                      <Input
                        disabled
                        type='text'
                        name='confirmPassword'
                        id='examplePassword'
                        value={user.lastTravelTime}
                      />
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <NavLink style={{ textDecoration: 'none' }} to='/user'>
                        <Button
                          style={{ backgroundColor: '#f0ad4e', width: '100%' }}
                        >
                          Return
                        </Button>
                      </NavLink>
                    </div>
                  </Form>
                </CardText>
              </CardBody>
              <CardFooter
                style={{
                  color: '#f2f2f2',
                  fontSize: '0.8em',
                  backgroundColor: '#292b2c',
                  textAlign: 'center',
                }}
              ></CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>: <Login />}
  </>);
}
const mapsStateToProps = state => ({
  pas: state.pas
});

export default connect(mapsStateToProps, null)(AccountDetails);

