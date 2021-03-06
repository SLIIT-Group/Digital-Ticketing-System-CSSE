import React, {useState, useEffect, useRef} from 'react';
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
  Input, Alert,
} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {register} from "../../actions/pasActions";
import { clearErrors } from "../../actions/errorActions";
import swal from "sweetalert";
import reg from "../../assets/reg.svg";


/*propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};*/

function Register(props) {
   let propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [msgTop, setMsgTop] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    if (e.target.value !== password) {
      setConfirmPassword(e.target.value);
      setMsgTop("Confirm Password Does Not Match");

    }
    if (e.target.value === password) {
      setConfirmPassword(e.target.value);
      setMsgTop('');

    }
  };

  const prevProps = useRef();
  useEffect(() => {
    if (props.error !== prevProps.error) {
      if (props.error.id === "REGISTER_FAIL") {
        setMsg(props.error.msg.msg);
      } else {
        setMsg(null );
      }
    }

    if (props.isAuthenticated) {
      registerClose();
    }
  });

  const registerClose = () => {
    clearErrors();
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setMsg(null);
    setMsgTop(null);
    props.history.push('/user');
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      userName : name,
      pasEmail: email,
      password : password,
    };

    props.register(newUser);

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setMsg(null);
    setMsgTop(null);
  };

  return (
    <Container>
      <Row style={{ marginTop: '2em', marginBottom: '2em' }}>
        <Col sm='12' md={{ size: 6, offset: 3 }}>
          <Card>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img className='' style={{alignContent : "center"}}
                   height="20%"
                   width="20%"
                   src={reg}
              />
            </div>
            <br />
            {msg ? (
                <Alert color="danger">{msg}</Alert>
            ) : null}
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
                      value={name}
                      onChange={onChangeName}
                      placeholder='Enter Name'
                    />
                  </FormGroup>
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
                  <FormGroup>
                    <Label for='confirmPassword'>Confirm Password</Label>
                    <Input
                      type='password'
                      name='confirmPassword'
                      id='examplePassword'
                      value={confirmPassword}
                      onChange={onChangeConfirmPassword}
                      placeholder='Confirm Password'
                    />
                  </FormGroup>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      style={{ backgroundColor: '#f0ad4e', width: '100%' }}
                      onClick={onSubmit}
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.pas.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
    Register
);

