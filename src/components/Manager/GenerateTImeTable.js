import React, { useState } from "react";
import NavBar from "./Navbar";
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
} from "reactstrap";
import { NavLink } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const locations = [
  "Colombo",
  "kandy",
  "Galle",
  "Ampara",
  "Anuradhapura",
  "Badulla",
  "Batticaloa",
  "Gampaha",
  "Hambantota",
  "Jaffna",
  "Kalutara",
  "Kilinochchi",
  "Kurunegala",
  "Mannar",
  "Matale",
  "Matara",
  "Monaragala",
  "Mullativu",
  "Nuwara Eliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];

function GenerateTImeTable() {
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [routeNumber, setRouteNumber] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [distance, setDistance] = useState("");
  const [price, setPrice] = useState("");

  const filteredLocation = locations.filter(
    (location_filter) => location_filter !== startLocation
  );

  const test = (e) => {
    e.preventDefault();
    if (
      startLocation === "" ||
      endLocation === "" ||
      routeNumber === "" ||
      busNumber === "" ||
      startTime === "" ||
      endTime === "" ||
      distance === "" ||
      price === ""
    ) {
      swal("sorry", "Fill the form correctly", "error");
    } else if (parseFloat(distance) < 0) {
      swal("sorry", "Distance should be a positive value", "error");
    } else if (parseFloat(price) < 0) {
      swal("sorry", "Price should be a positive value", "error");
    } else if (
      parseFloat(startTime.split(":")[0]) > parseFloat(endTime.split(":")[0])
    ) {
      swal("sorry", "Arrival time should be greater than start time", "error");
    } else if (
      parseFloat(startTime.split(":")[0]) ===
        parseFloat(endTime.split(":")[0]) &&
      parseFloat(startTime.split(":")[1]) > parseFloat(endTime.split(":")[1])
    ) {
      swal("sorry", "Arrival time should be greater than start time", "error");
    } else if (startTime === endTime) {
      swal("sorry", "Times should be different", "error");
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routeNo: routeNumber,
          busNo: busNumber,
          startTime: startTime,
          startLocation: startLocation,
          endLocation: endLocation,
          arrivalTime: endTime,
          distance:distance,
          unitPrice:price
        }),
      };
      fetch("http://localhost:5000/api/timetable/timeTable", requestOptions)
        .then((response) => response.json())
        .then((data) => {
          if (data["success"]) {
            swal("successfull", "Data Saved Successfully", "success");
          } else {
            swal("sorry", "Data is already saved", "error");
          }
        })
        .catch((err) => {
          swal("error", "retry", "error");
        });
    }
  };

  return (
    <React.Fragment>
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
                      <Input
                        type="text"
                        value={routeNumber}
                        onChange={(e) => setRouteNumber(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Bus Number</Label>
                      <Input
                        type="text"
                        value={busNumber}
                        onChange={(e) => setBusNumber(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Starting From</Label>
                      <TextField
                        select
                        label="Starting From"
                        value={startLocation}
                        onChange={(e) => {
                          setStartLocation(e.target.value);
                        }}
                        variant="outlined"
                        fullWidth
                      >
                        {locations.map((location) => (
                          <MenuItem key={location} value={location}>
                            {location}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormGroup>
                    <FormGroup>
                      <Label>Going To</Label>
                      <TextField
                        select
                        label="Going To"
                        disabled={!startLocation}
                        value={endLocation}
                        onChange={(e) => {
                          setEndLocation(e.target.value);
                        }}
                        variant="outlined"
                        fullWidth
                      >
                        {filteredLocation.map((location) => (
                          <MenuItem key={location} value={location}>
                            {location}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormGroup>
                    <FormGroup>
                      <Label>Starting Time</Label>
                      <Input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Arrival Time</Label>
                      <Input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Total Distance</Label>
                      <Input
                        type="number"
                        value={distance}
                        onChange={(e) => setDistance(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Price Per Km</Label>
                      <Input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </FormGroup>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        type="submit"
                        style={{ backgroundColor: "#f0ad4e" }}
                        onClick={(e) => test(e)}
                      >
                        Save Details
                      </Button>

                      <NavLink to="/viewTimeTable">
                        <Button type="submit" style={{ marginLeft: 5 }}>
                          View Details
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
                <p style={{ marginTop: 10 }}>All rights reserved</p>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default GenerateTImeTable;
