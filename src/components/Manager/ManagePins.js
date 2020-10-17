import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import axios from 'axios';
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
import { connect } from "react-redux";
import Login from "./Login";

function ManagePins(props) {
  const [managerPin, setManagerPin] = useState("");
  const [inspectorPin, setInspectorPin] = useState("");


  const updatePins = () => {
    if(managerPin === '' || inspectorPin === ''){
      swal("Unsuccessful","Empty Fields", "error");
    }else {
      const req = {
        inspectorPin: inspectorPin,
        managerPin: managerPin,
      };

      axios.post('http://localhost:5000/api/pin/update', req).then((res) => {
        if (res.data === "Update complete") {
          swal("Successful", "Pin Updated Successfully", "success");
        } else {
          swal("Unsuccessful", "Pin Updating Failed", "error");
        }

      });
      props.history.push('/manager');
    }

  };


  useEffect(() => {
    axios

        .get("http://localhost:5000/api/pin/byID/5f8960f931e9acda8a1021a1")
        .then((res) => {
          setManagerPin(res.data.managerPin);
          setInspectorPin(res.data.inspectorPin);
        });

  },[])


  return (<>
    {props.man && props.man.userEmail !== null ?
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
                Manage Pin Numbers
              </CardHeader>
              <CardBody>
                <CardText>
                  <Form>
                    <FormGroup>
                      <Label>Manager Pin</Label>
                      <Input
                        type="text"
                        value={managerPin}
                        onChange={(e) => setManagerPin(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Inspector Pin</Label>
                      <Input
                        type="text"
                        value={inspectorPin}
                        onChange={(e) => setInspectorPin(e.target.value)}
                      />
                    </FormGroup>

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <NavLink to="/user">
                        <Button
                          type="submit"
                          style={{ backgroundColor: "#f0ad4e" }}
                          onClick={updatePins}
                        >
                          Update Pins
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
                <p style={{marginTop:10}}>All rights reserved</p>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>: <Login />}
      </>
  );
}
const mapsStateToProps = state => ({
  man: state.man
});

export default connect(mapsStateToProps, null)(ManagePins);
