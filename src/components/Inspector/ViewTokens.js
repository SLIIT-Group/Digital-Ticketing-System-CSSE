import React, { useState } from 'react';
import Token from './Token';
import NavBar from './Navbar';
import {
  CardColumns,
  Container,
  Toast,
  ToastBody,
  ToastHeader,
  Button,
} from 'reactstrap';

import tokens from '../../data/tokenData';
import buses from '../../data/busData';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import Login from "./Login";

function ViewTokens(props) {
  const data = props.location;
  const tokenFilter = data.data;
  const [filteredTokens, setFilteredTokens] = useState([]);
  // const tempFilter = {
  //   bus: 'KW-138',
  //   date: '2020-10-16',
  //   location: 'Koswatte',
  //   time: '10:18',
  //   trip: 'FF-222',
  // };
  const filterTokens = (tokenFilter) => {
    if (
      tokenFilter &&
      tokenFilter.bus &&
      tokenFilter.date &&
      tokenFilter.location &&
      tokenFilter.trip
    ) {
      let nextStopsArr = getNextStops(tokenFilter.bus, tokenFilter.location);

      let filteredTokens = [];

      for (let index1 = 0; index1 < tokens.length; index1++) {
        for (let index2 = 0; index2 < nextStopsArr.length; index2++) {
          if (
            tokens[index1].origin === nextStopsArr[index2].halt ||
            tokens[index1].destination === nextStopsArr[index2].halt
          ) {
            // console.log(tokens[index1]);
            filteredTokens.push(tokens[index1]);
            break;
          }
        }
      }

      filteredTokens = tokens.filter(
        (token) =>
          token.tripId === tokenFilter.trip && token.date === tokenFilter.date
      );
      console.log('Final filter');
      console.log(filteredTokens);
      setFilteredTokens(filteredTokens);
    } else {
      return [];
    }
  };

  //Get all future stops from a given point
  const getNextStops = (busNo, stop) => {
    let nextStops = [];
    buses.map((bus) => {
      if (bus.busNo === busNo) {
        let x = bus.stops
          .map(function (e) {
            return e.halt;
          })
          .indexOf(stop);
        nextStops = bus.stops.slice(x, bus.stops.length);
      }
    });
    return nextStops;
  };

  useEffect(() => {
    filterTokens(tokenFilter);
  }, []);

  return (<>
    {props.ins && props.ins.userEmail !== null ?
    <div>
      <NavBar></NavBar>

      <Container style={{ margin: '20px 0px', overflowX: 'hidden' }}>
        {filteredTokens.length === 0 ? (
          <div className='p-3 my-2 rounded'>
            <Toast>
              <ToastHeader style={{ color: '#f4f4f4' }} className='bg-warning'>
                No results found
              </ToastHeader>
              <ToastBody>
                Please re-check your filter parameters
                <Link
                  style={{ textDecoration: 'none' }}
                  to='/inspector/tokenfilter'
                >
                  <Button
                    small
                    style={{
                      padding: '0px',
                      marginTop: '5px',
                      backgroundColor: '#f0ad4e',
                      border: '3px',
                      width: '30%',
                    }}
                  >
                    Return
                  </Button>
                </Link>
              </ToastBody>
            </Toast>
          </div>
        ) : (
          <CardColumns>
            {filteredTokens.map((token) => (
              <Token token={token}></Token>
            ))}
          </CardColumns>
        )}
      </Container>
    </div>
      : <Login />}
</>
  );
}
const mapsStateToProps = state => ({
  ins: state.ins
});

export default connect(mapsStateToProps, null)(ViewTokens);

