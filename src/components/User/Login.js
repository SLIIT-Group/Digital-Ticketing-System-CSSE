import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from "../../actions/pasActions";
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
import {useHistory} from "react-router";
import logo from '../../assets/logo-new.svg';


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
    if (props.isAuthenticated) {
      loginClose();
    }
  });

  const history = useHistory();
  const loginClose = () => {
    clearErrors();
    setEmail('');
    setPassword('');
    setMsg(null);
    history.push('/user');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const existUser = {
      pasEmail: email,
      password : password,
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
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img className='' style={{alignContent : "center"}}
                   height="50%"
                   width="50%"
                   src={logo}
              />
            </div>
            <br />
            {msg ? (
                <Alert color="danger" className='justify-content-center text-center'>{msg}</Alert>
            ) : null}
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
                Not a member?{' '}
                <NavLink style={{ color: '#f2f2f2' }} to='/register'>
                  Register here
                </NavLink>
              </p>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row style={{ marginTop: '1em' }} >
        <Col sm='6' md={{ size: 6, offset: 3 }}>
          <Card>
            <NavLink  to='/manager/login'>
              <Button
                  style={{ backgroundColor: '#ecbe7b', width: '100%' }}

              >
                Manager
              </Button>
            </NavLink>
            <NavLink to='/inspector/login' className='mt-1' >
              <Button
                  style={{ backgroundColor: '#ecbe7b', width: '100%' }}

              >
                Inspector
              </Button>
            </NavLink>

          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.pas.isAuthenticated,
  error : state.error
});

export  default connect(mapStateToProps,{login, clearErrors})(Login);

