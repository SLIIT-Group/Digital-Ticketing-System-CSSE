import React from 'react';
import Token from './Token';
import NavBar from './Navbar';
import { CardColumns, Container } from 'reactstrap';

function ViewTokens() {
  return (
    <div>
      <NavBar></NavBar>
      <Container style={{ margin: '20px 0px', overflowX: 'hidden' }}>
        <CardColumns>
          <Token></Token>
          <Token></Token>
          <Token></Token>
          {/* <Token></Token>
          <Token></Token>
          <Token></Token>
          <Token></Token> */}
        </CardColumns>
      </Container>
    </div>
  );
}

export default ViewTokens;
