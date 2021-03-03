import React from "react";
import NavbarComp from "./NavbarComp";
import { Form } from "react-bootstrap";

const FindGameComp = () => {
  return (
    <div>
      <NavbarComp />
      <div className="container">
        <h1 className="findHead">Find</h1>
        {/* search form */}
        <Form.Group className="findFormContainer">
          <Form.Control as="select" size="lg">
            <option>Basketball</option>
            <option>Football</option>
            <option>Baseball</option>
            <option>Volleyball</option>
          </Form.Control>
          <Form.Control size="lg" type="text" placeholder="City" />
          <Form.Control size="lg" type="text" placeholder="State" />
        </Form.Group>
        {/* results */}
        <div className="resultsContainer">

        </div>
      </div>
    </div>
  );
};

export default FindGameComp;
