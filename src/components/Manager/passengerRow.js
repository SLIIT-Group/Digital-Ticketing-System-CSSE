import React from "react";
import { Card, CardTitle, CardText, Badge, Row, Col } from "reactstrap"; //Relevant Imports

function PassengerRow({ token }) {

  //Styles
  const subheaderStyle = {
    color: "grey",
    fontSize: "12px",
  };

  const infoStyle = {
    color: "#383838",
    fontSize: "12px",
    fontWeight: "bold",
  };

  const sectionStyle = {
    marginBottom: "5px",
  };

  return (
    <Card style={{ backgroundColor: "#fcfcfc" }} body outline color="warning">
      <CardTitle>
        <Row xs="2">
          <Col>
            <Badge color="dark">User Name: {token.userName}</Badge>
          </Col>
          <Col>
            <p className="font-weight-bold text-dark float-right">
              {" "}
              E-TickeT !
            </p>
          </Col>
        </Row>
      </CardTitle>
      <CardText>
        <div style={sectionStyle}>
          <Row xs="2">
            <Col style={subheaderStyle}>Email</Col>

            <Col style={subheaderStyle}>Amount</Col>
          </Row>
          <Row xs="2">
            <Col style={infoStyle}>{token.pasEmail}</Col>

            <Col style={infoStyle}>{token.pasAmount}</Col>
          </Row>
        </div>
      </CardText>
    </Card>
  );
}

export default PassengerRow;
