import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from "../../actions/manActions";
import {clearErrors} from "../../actions/errorActions";
import {Alert} from 'reactstrap';
import swal from "sweetalert";
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

function Login(props) {
  let propTypes = {
    isAuthenticated: PropTypes.bool,
    error : PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors : PropTypes.func.isRequired
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const prevProps = useRef();
  useEffect(() => {
    if(props.error !== prevProps.error){
      if(props.error.id === 'LOGIN_FAIL'){
        setMsg(props.error.msg.msg);
      } else {
        setMsg(null );
      }
    }


    if (msg) {
      swal("Unsuccessful", msg, "error");
      setMsg(null );
    }

    if (props.isAuthenticated) {
      loginClose();
    }
  });

  const loginClose = () => {
    clearErrors();
    setEmail('');
    setPassword('');
    setMsg(null);
    props.history.push('/manager');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const existUser = {
      manEmail: email,
      manPassword : password,
    };

    props.login(existUser);

    setEmail('');
    setPassword('');
    setMsg(null);
  };

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
              Manager Login
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
                      value={email}
                      onChange={onChangeEmail}
                      placeholder='Enter Email'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='examplePassword'>Password</Label>
                    <Input
                      type='password'
                      name='password'
                      id='examplePassword'
                      value={password}
                      onChange={onChangePassword}
                      placeholder='Enter Password'
                    />
                  </FormGroup>
                  <NavLink style={{ textDecoration: 'none' }} to='/user'>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        style={{ backgroundColor: '#f0ad4e', width: '100%' }}
                        onClick={onSubmit}
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
                Not a Manager?{' '}
                <NavLink style={{ color: '#f2f2f2' }} to='/manager/add'>
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

const mapStateToProps = state => ({
  isAuthenticated: state.man.isAuthenticated,
  error : state.error
});

export  default connect(mapStateToProps,{login, clearErrors})(Login);

