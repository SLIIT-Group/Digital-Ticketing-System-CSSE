import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { Container, Row, Col } from "reactstrap";
import Chart from "react-apexcharts";
import { connect } from "react-redux";
import Login from "./Login";
const axios = require("axios");

function Stats(props) {
  const [inspectors, setInspectors] = useState([]);
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ins/inspectors")
      .then((response) => {
        setInspectors(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/api/pas/passenger")
      .then((response) => {
        setPassengers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const options = {
    chart: {
      id: "E-Ticket",
    },
    xaxis: {
      categories: ["Passengers", "Inspectors"],
    },
    
  
  };
  const series = [
    {
      name: "Total",
      data: [passengers.length, inspectors.length],
    },
  ];

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: "4em", marginBottom: "4em" }}>
          <Col sm="12" md={{ size: 12, offset: 2 }}>
            <Chart
              options={options}
              series={series}
              type="bar"
              width={500}
              height={320}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
const mapsStateToProps = state => ({
  man: state.man
});

export default connect(mapsStateToProps, null)(Stats);
