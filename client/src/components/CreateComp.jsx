import React, {useState} from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import NavbarComp from "./NavbarComp";

const CreateComp = () => {

const [game, setGame] = useState("");
const [sport, setSport] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [location, setLocation] = useState("");
const [players, setPlayers] = useState("");
const [time, setTime] = useState("");

const addGame = (e) => {
  e.preventDefault();
  axios
      .get("http://localhost:8000/api/games")
      .then((res) => {
          axios
              .post("http://localhost:8000/api/games/", {
                  sport: sport,
                  city: city,
                  state: state,
                  location: location,
                  players: players,
                  time: time,
              })
              .then((res) => {
                  if (res.data.error) {
                      setErrors(res.data.error.errors);
                      console.log(errors);
                      console.log(res.data);
                  }
                  else {
                      setGame(res.data);
                      console.log(deviation);
                      navigate(`/api/games/${res.data._id}`)
                      console.log(res.data);
                  }
              })
              .catch((err) => console.log(err));       
      })
  .catch(err => console.log(err));
  console.log("addGame started");
}

  return (
    <div>
      <NavbarComp />
      <h1 className="create-top">Create a Game</h1>
      <div className="contianer from form-comp-container">
        <Form onSubmit={addGame}>
            {/* sport */}
          <Form.Group as={Row}>
            <Form.Label column sm="2"> 
              Sport
            </Form.Label>
            <Col sm="10">
            <Form.Control size="md" type="text" placeholder="Sport" onChange={(e) => setSport(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* City */}
          <Form.Group as={Row}>
            <Form.Label column sm="2"> 
              City
            </Form.Label>
            <Col sm="10">
            <Form.Control size="md" type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
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
