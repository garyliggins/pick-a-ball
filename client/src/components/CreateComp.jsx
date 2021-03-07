import React, {useState} from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import NavbarComp from "./NavbarComp";
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const CreateComp = () => {

const [game, setGame] = useState("");
const [sport, setSport] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [location, setLocation] = useState("");
const [players, setPlayers] = useState("");
const [time, setTime] = useState("");
const [date, setDate] = useState("");
const [email, setEmail] = useState("");
const [errors, setErrors] = useState("");

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
                  date: date
              })
              .then((res) => {
                  if (res.data.error) {
                      setErrors(res.data.error.errors);
                      console.log(errors);
                      console.log(res.data);
                  }
                  else {
                      setGame(res.data);
                      console.log(game);
                      navigate(`/`)
                      console.log(res.data);
                  }
              })
              .catch((err) => console.log(err));       
      })
  .catch(err => console.log(err));
  console.log("addGame started");
  console.log("this is date" + date)
}

  return (
    <div>
      <NavbarComp />
      <h1 className="create-top">Create a Game</h1>
      <div className="contianer from form-comp-container">
        <Form onSubmit={addGame}>
            {/* sport */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Sport
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder="Sport" onChange={(e) => setSport(e.target.value)}/>
            </Col>
          </Form.Group>           
          {/* City */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              City
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* State */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              State
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder="State" onChange={(e) => setState(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* Location */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Location
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* players */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Players
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder="Number Of Players" onChange={(e) => setPlayers(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* Time */}
          
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Time & Date
            </Form.Label>
            <Col sm="8">
            <select className="btn-sm mr-auto  m-3 " id="phaseSelection" onChange={(e) => setTime(e.target.value)}>
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <input type="date" format="mm-dd-yyyy" className="order-2 mr-auto ml-3 d-inline float-right" onChange={(e) => setDate(e.target.value)} />
            </Col>
          </Form.Group>
          {/* email */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Email
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            </Col>
          </Form.Group>  
          <Button type="submit" variant="outline-primary">Create</Button>{' '}
        </Form>
      </div>
    </div>
  );
};

export default CreateComp;
