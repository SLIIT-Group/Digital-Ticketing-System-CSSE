import React, { useState } from "react";
import NavBar from './Navbar';

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
  Navbar,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const paymentMethod = [
  {
    value: "Credit Card",
    label: "Credit Card",
  },
  {
    value: "Debit card",
    label: "Debit card",
  },
  {
    value: "Frimi Account",
    label: "Frimi Account",
  },
];

function GenerateTImeTable() {
  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: "4em", marginBottom: "4em" }}>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Card>
              <CardHeader
                style={{
                  color: "#f2f2f2",
                  backgroundColor: "#292b2c",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                Generate TimeTable
              </CardHeader>
              <CardBody>
                <CardText>
                  <Form>
                    <FormGroup>
                      <Label>Route Number</Label>
                      <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Bus Number</Label>
                      <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Starting From</Label>
                      <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Going To</Label>
                      <Input type="text" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Starting Time</Label>
                      <Input type="time" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Arrival Time</Label>
                      <Input type="time" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Total Distance</Label>
                      <Input type="number" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Price Per Km</Label>
                      <Input type="number" />
                    </FormGroup>
                    <FormGroup>
                    <Label>Starting From</Label>
                    <TextField
                     
                      select
                      label="Starting From"
                      // value={faculty}
                      // onChange={handleFacultyChange}
                      variant="outlined"
                      fullWidth
                    >
                      {paymentMethod.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormGroup>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <NavLink to="/user">
                        <Button style={{ backgroundColor: "#f0ad4e" }}>
                          Save Details
                        </Button>
                      </NavLink>
                    </div>
                  </Form>
                </CardText>
              </CardBody>
              <CardFooter
                style={{
                  padding: " 0px",
                  color: "#f2f2f2",
                  fontSize: "0.8em",
                  backgroundColor: "#292b2c",
                  textAlign: "center",
                }}
              >
                <p>
                  {/*Not a member?{' '}*/}
                  <NavLink style={{ color: "#f2f2f2" }} to="/register">
                    All rights reserved
                  </NavLink>
                </p>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default GenerateTImeTable;
