import React from "react";
// import nav component
import NavbarComp from "./NavbarComp";
import { Jumbotron, Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <div className="container">
        <h1 className="homeHead">Upcoming Games</h1>
        <Jumbotron fluid className="homeJumbo">
          <Container>
            <h1>No Upcoming Games</h1>
            <p>
              add games to attend!
            </p>
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Home;
