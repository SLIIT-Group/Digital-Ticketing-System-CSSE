import React from 'react';
import NavBar from './Navbar';
import {connect} from "react-redux";
import Login from "./Login";

function PassengerDetails(props) {
  return (<>
    {props.ins && props.ins.userEmail !== null ?
    <div>
      <NavBar></NavBar>
      PassengerDetails
    </div>

      : <Login />}
    </>
  );
}
const mapsStateToProps = state => ({
    ins: state.ins
});

export default connect(mapsStateToProps, null)(PassengerDetails);

