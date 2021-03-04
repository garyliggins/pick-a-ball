import React from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import NavbarComp from "./NavbarComp";

const CreateComp = () => {
  return (
    <div>
      <NavbarComp />
      <h1 className="create-top">Create a Game</h1>
      <div className="contianer from form-comp-container">
        <Form>
            {/* sport */}
          <Form.Group as={Row}>
            <Form.Label column sm="2"> 
              Sport
            </Form.Label>
            <Col sm="10">
            <Form.Control size="md" type="text" placeholder="Sport" />
            </Col>
          </Form.Group>
          {/* City */}
          <Form.Group as={Row}>
            <Form.Label column sm="2"> 
              City
            </Form.Label>
            <Col sm="10">
            <Form.Control size="md" type="text" placeholder="City" />
            </Col>
          </Form.Group>
          {/* State */}
          <Form.Group as={Row}>
            <Form.Label column sm="2"> 
              State
            </Form.Label>
            <Col sm="10">
            <Form.Control size="md" type="text" placeholder="State" />
            </Col>
          </Form.Group>
          {/* Location */}
          <Form.Group as={Row}>
            <Form.Label column sm="2"> 
              Location
            </Form.Label>
            <Col sm="10">
            <Form.Control size="md" type="text" placeholder="Location" />
            </Col>
          </Form.Group>
          {/* players */}
          <Form.Group as={Row}>
            <Form.Label column sm="2"> 
              Players
            </Form.Label>
            <Col sm="10">
            <Form.Control size="md" type="text" placeholder="Number Of Players" />
            </Col>
          </Form.Group>
          {/* Time */}
          <Form.Group as={Row}>
            <Form.Label column sm="2"> 
              Time
            </Form.Label>
            <Col sm="10">
            <Form.Control size="md" type="text" placeholder="Time" />
            </Col>
          </Form.Group>
          <Button variant="outline-primary">Create</Button>{' '}
        </Form>
      </div>
    </div>
  );
};

export default CreateComp;
