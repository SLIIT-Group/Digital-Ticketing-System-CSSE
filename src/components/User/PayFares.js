import React, {useState} from 'react';

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

function PayFares() {
    return (
        <Container>
            <Row style={{ marginTop: '8em' }}>
                <Col sm='12' md={{ size: 6, offset: 3 }}>
                    <Card>
                        <CardHeader
                            style={{
                                color: '#f2f2f2',
                                backgroundColor: '#1976D2',
                                textAlign: 'center',
                                fontSize: '1.2em',
                            }}
                        >
                            Pay Fares
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                <Form>
                                    <FormGroup>
                                        <Label for='examplePassword'>From</Label>
                                        <TextField
                                            id="fromId"
                                            select
                                            label="From"
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
                                    <FormGroup>
                                        <Label for='examplePassword'>To</Label>
                                        <TextField
                                            id="toId"
                                            select
                                            label="To"
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
                                    <FormGroup>
                                        <Label for='exampleEmail'>No of KM</Label>
                                        <Input
                                            type='text'
                                            name='nokm'
                                            id='nokm'
                                            placeholder='KM.'
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for='exampleEmail'>Fee</Label>
                                        <Input
                                            type='text'
                                            name='fee'
                                            id='fee'
                                            placeholder='Rs.'
                                        />
                                    </FormGroup>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <NavLink to='/user'>
                                            <Button style={{ backgroundColor: '#4CAF50' }}>
                                                Pay
                                            </Button>
                                        </NavLink>
                                    </div>
                                </Form>
                            </CardText>
                        </CardBody>
                        <CardFooter
                            style={{
                                padding: ' 0px',
                                color: '#f2f2f2',
                                fontSize: '0.8em',
                                backgroundColor: '#1976D2',
                                textAlign: 'center',
                            }}
                        >
                            <p>
                                {/*Not a member?{' '}*/}
                                <NavLink style={{ color: '#f2f2f2' }} to='/register'>
                                    All rights reserved
                                </NavLink>
                            </p>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default PayFares;
