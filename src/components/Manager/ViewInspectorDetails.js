import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import swal from "sweetalert";
import {Container, Row, Col, Toast, ToastHeader, ToastBody, Button, CardColumns} from "reactstrap";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const axios = require("axios");

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#292b2a",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ViewInspectorDetails() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ins/inspectors")
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Container style={{ margin: '20px 0px', overflowX: 'hidden' }}>
        {setData.length === 0 ? (
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
              {data.map((token) => (
                  <Token token={token}></Token>
              ))}
            </CardColumns>
        )}
      </Container>
    </React.Fragment>
  );
}
