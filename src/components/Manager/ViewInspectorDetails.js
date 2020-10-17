import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
<<<<<<< HEAD
import { Container, Row, Col } from "reactstrap";
=======
import {Container, Row, Col, Toast, ToastHeader, ToastBody, Button, CardColumns} from "reactstrap";
>>>>>>> main
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Token  from './inspectorRow'


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
<<<<<<< HEAD
      <Container>
        <Row style={{ marginTop: "4em", marginBottom: "4em" }}>
          <Col sm="12" md={{ size: 12, offset: 0 }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">UserName</StyledTableCell>

                    <StyledTableCell align="center">Email</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row) => (
                    <StyledTableRow key={row._id}>
                      <StyledTableCell
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {row.userName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.insEmail}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
=======
      <Container style={{ margin: '20px 0px', overflowX: 'hidden' }}>
        {setData.length === 0 ? (
            <div className='p-3 my-2 rounded'>
              <Toast>
                <ToastHeader style={{ color: '#f4f4f4' }} className='bg-warning'>
                  No results found
                </ToastHeader>
              </Toast>
            </div>
        ) : (
            <CardColumns>
              {data.map((token) => (
                  <Token token={token}></Token>
              ))}
            </CardColumns>
        )}
>>>>>>> main
      </Container>
    </React.Fragment>
  );
}
