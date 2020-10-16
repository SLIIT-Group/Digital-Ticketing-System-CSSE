import React, { useState } from "react";
import NavBar from "./Navbar";
import swal from "sweetalert";

import { Container, Row, Col } from "reactstrap";
import { NavLink } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.info.dark,
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

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Container>
        <Row style={{ marginTop: "4em", marginBottom: "4em" }}>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="right">
                      Route Number
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Bus Number
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Start Location
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      End Location
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Start Time
                    </StyledTableCell>
                    <StyledTableCell align="right">End Time</StyledTableCell>
                    <StyledTableCell align="right">Distance</StyledTableCell>
                    <StyledTableCell align="right">
                      Unit Price
                    </StyledTableCell>
                    <StyledTableCell align="right">Edit/Delete</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}
