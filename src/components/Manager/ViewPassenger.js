import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import { Container, Toast, ToastHeader, CardColumns } from "reactstrap";
import { connect } from "react-redux";
import PassengerRow from "./passengerRow";
import Login from "./Login";
const axios = require("axios");
function ViewPassenger(props) {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/pas/passenger")
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (<>
    {props.man && props.man.userEmail !== null ?
    <React.Fragment>
      <NavBar></NavBar>
      <Container style={{ margin: "20px 0px", overflowX: "hidden" }}>
        {setData.length === 0 ? (
          <div className="p-3 my-2 rounded">
            <Toast>
              <ToastHeader style={{ color: "#f4f4f4" }} className="bg-warning">
                No results found
              </ToastHeader>
            </Toast>
          </div>
        ) : (
          <CardColumns>
            {data.map((token) => (
              <PassengerRow token={token}></PassengerRow>
            ))}
          </CardColumns>
        )}
      </Container>
    </React.Fragment>
      : <Login />}
    </>
  );
}
const mapsStateToProps = (state) => ({
  man: state.man,
});

export default connect(mapsStateToProps, null)(ViewPassenger);
