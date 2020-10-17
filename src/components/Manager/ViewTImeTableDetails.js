import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";
import swal from "sweetalert";
import { Container, Row, Col } from "reactstrap";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
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

export default function ViewTImeTableDetails() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/timetable/timeTable")
      .then((response) => {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:5000/api/timetable/timeTable/${id}`)
      .then((res) => {
        swal("successfull", "Data Successfully removed", "success");

        axios
          .get("http://localhost:5000/api/timetable/timeTable")
          .then((response) => {
            setData(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch((err) => console.log("Error"));
  };

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: "4em", marginBottom: "4em" }}>
          <Col sm="12" md={{ size: 12, offset: 0 }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Route Number
                    </StyledTableCell>
                    <StyledTableCell align="center">Bus Number</StyledTableCell>
                    <StyledTableCell align="center">
                      Start Location
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      End Location
                    </StyledTableCell>
                    <StyledTableCell align="center">Start Time</StyledTableCell>
                    <StyledTableCell align="center">End Time</StyledTableCell>
                    <StyledTableCell align="center">Distance</StyledTableCell>
                    <StyledTableCell align="center">Unit Price</StyledTableCell>
                    <StyledTableCell align="center">Delete</StyledTableCell>
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
                        {row.routeNo}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.busNo}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.startLocation}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.endLocation}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.startTime}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.arrivalTime}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.distance}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.unitPrice}
                      </StyledTableCell>
                      <TableCell align="center">
                        <DeleteIcon
                          onClick={() => {
                            deleteData(row._id);
                          }}
                        >
                          {" "}
                        </DeleteIcon>
                      </TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
