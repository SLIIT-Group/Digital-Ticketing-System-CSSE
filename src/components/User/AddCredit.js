import React, {useEffect, useState} from 'react';
import axios from "axios";
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
    Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import NavBar from "./Navbar";
import { connect } from "react-redux";
import Login from "./Login";


const paymentMethod = [
    {
        value: 'Credit Card',
        label: 'Credit Card',
    },
    {
        value: 'Debit card',
        label: 'Debit card',
    },
    {
        value: 'Frimi Account',
        label: 'Frimi Account',
    }
];

function AddCredit(props) {
    const [existingAmount, setExistingAmount] = useState();
    const [amount, setAmount] = useState();

    const handleAmount = (event) => {
        setAmount(event.target.value);
    }

    useEffect(() => {
        if(props.pas.user) {
            setId(props.pas.user._id);
        }

        //console.log(id);
        axios.get('http://localhost:5000/api/passenger/edit/' +id)
            .then(response => {
                setExistingAmount(response.data.pasAmount);

            })
            .catch(function (error) {
                console.log(error);
            })
    })

    const [id, setId] = useState('');

    const updateCredit = () => {
        const req = {
            userName: 'abc',
            pasEmail: 'abc',
            password: 'abc',
            pasAmount: existingAmount + parseInt(amount),
        };

        // let id = '5f88a946963f79b26e909f06';
        axios.post('http://localhost:5000/api/passenger/updateCredit/' +id, req)
            .then((res) => {
                if(res.data == 'Update complete'){
                    swal("Successful", "Credits added to account", "success");
                }else{
                    swal("Unsuccessful", "Error while adding credits", "error");
                }
            });
        console.log(parseInt(amount));
        console.log(existingAmount);
    };

    return (
        <>
            {props.pas.user && props.pas.user.pasEmail?
        <div>
        <NavBar></NavBar>
        <Container>
            <Row style={{ marginTop: '6em', marginBottom: '2em' }}>
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
                            Add Credit
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                <Form>
                                    <FormGroup>
                                        <Label for='exampleEmail'>Current Balance</Label>
                                        <Input
                                            type='text'
                                            name='cbalance'
                                            id='cbalance'
                                            placeholder='Rs.'
                                            value = {existingAmount}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='exampleEmail'>Recharging Amout</Label>
                                        <Input
                                            type='text'
                                            name='amount'
                                            id='amount'
                                            placeholder='Rs.'
                                            onChange = {handleAmount}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='examplePassword'>Payment Method</Label>
                                        <TextField
                                            id="paymentMethodId"
                                            select
                                            label="Payment Method"
                                            // value={faculty}
                                            // onChange={handleFacultyChange}
                                            variant="filled"
                                            fullWidth
                                        >
                                            {paymentMethod.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.value}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </FormGroup>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <NavLink to='/user'>
                                            <Button style={{ backgroundColor: '#f0ad4e', width: '100%' }} onClick={updateCredit}>
                                                Proceed
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
                        >
                        </CardFooter>
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

export default connect(mapsStateToProps, null )(AddCredit);

