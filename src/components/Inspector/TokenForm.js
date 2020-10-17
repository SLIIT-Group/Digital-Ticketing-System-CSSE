import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import { connect } from "react-redux";
import Login from "./Login";

function TokenForm(props) {
  const initialState = { bus: '', trip: '', date: '', time: '', location: '' };
  const [tokenFilters, setTokenFilters] = useState(initialState);

  const handleChange = (e) => {
    setTokenFilters({ ...tokenFilters, [e.target.name]: e.target.value });
  };

  return (<>
    {props.ins.user && props.ins.user.insEmail?
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
                Trip Details
              </CardHeader>
              <CardBody>
                <CardText>
                  <Form>
                    <FormGroup>
                      <Label for='exampleEmail'>Bus Number</Label>

                      <Input
                        type='text'
                        name='bus'
                        id='exampleName'
                        placeholder='Enter Bus Number'
                        value={tokenFilters.bus}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='exampleEmail'>Trip ID</Label>
                      <Input
                        type='text'
                        name='trip'
                        id='exampleEmail'
                        placeholder='Enter Trip ID'
                        value={tokenFilters.trip}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='examplePassword'>Date</Label>
                      <Input
                        type='date'
                        name='date'
                        id='examplePassword'
                        value={tokenFilters.date}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='confirmPassword'>Time</Label>
                      <Input
                        type='time'
                        name='time'
                        id='examplePassword'
                        value={tokenFilters.time}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for='confirmPassword'>From</Label>
                      <Input
                        type='text'
                        name='location'
                        id='examplePassword'
                        placeholder='Enter location'
                        value={tokenFilters.location}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Link
                        to={{
                          pathname: '/inspector/viewtokens',
                          data: tokenFilters,
                        }}
                      >
                        <Button
                          style={{ backgroundColor: '#f0ad4e', width: '100%' }}
                        >
                          Proceed
                        </Button>
                      </Link>
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
    </div>
        : <Login />}
      </>
  );
}
const mapsStateToProps = state => ({
  ins: state.ins
});

export default connect(mapsStateToProps, null)(TokenForm);

