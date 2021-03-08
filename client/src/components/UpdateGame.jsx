import React, {useEffect, useState} from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import NavbarComp from "./NavbarComp";
import {Link, navigate} from '@reach/router';
import axios from 'axios';

const UpdateGame = (props) => {


const [sport, setSport] = useState("");
const [city, setCity] = useState("");
const [state, setState] = useState("");
const [location, setLocation] = useState("");
const [players, setPlayers] = useState("");
const [time, setTime] = useState("");
const [date, setDate] = useState("");
const [email, setEmail] = useState("");
const [errors, setErrors] = useState([]);

useEffect(()=>{
    axios
        .get(`http://localhost:8000/api/games/` + props.id)
        .then((res)=>{
            console.log(res.data);
            setSport(res.data.sport);
            setCity(res.data.city);
            setState(res.data.state);
            setLocation(res.data.location);
            setPlayers(res.data.players);
            setTime(res.data.time);
            setDate(res.data.date);
            setEmail(res.data.email);
        })

}, [])
    
const editGame = (e) => {
    e.preventDefault();
    axios
        .put(`http://localhost:8000/api/games/${props.id}`, {
            sport: sport,
            city: city,
            state: state,
            location: location,
            players: players,
            time: time,
            date: date,
            email: email,
        })
        .then((res) => {
            if(res.data.errors){
                setErrors(res.data.errors);
            } else {
                navigate(`/`);
            }
        })
        .catch((err) => console.log(err));

}

    return(
    <div>
        <NavbarComp />
        <h1 className="create-top">Update Game</h1>
        <Link className="outline-danger" to={`/`}>Discard Changes</Link>

      <div className="contianer from form-comp-container">
        <Form onSubmit={editGame}>
            {/* sport */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Sport
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder={sport} onChange={(e) => setSport(e.target.value)}/>
            </Col>
          </Form.Group>           
          {/* City */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              City
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder={city} onChange={(e) => setCity(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* State */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              State
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder={state} onChange={(e) => setState(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* Location */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Location
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder={location} onChange={(e) => setLocation(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* players */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Players
            </Form.Label>
            <Col sm="8">
            <Form.Control size="md" type="text" placeholder={players} onChange={(e) => setPlayers(e.target.value)}/>
            </Col>
          </Form.Group>
          {/* Time */}
          <Form.Group as={Row}>
            <Form.Label column sm="3"> 
              Time & Date
            </Form.Label>
            <Col sm="8">
            <select className="btn-sm mr-auto  m-3 " id="phaseSelection" placeholder={time} onChange={(e) => setTime(e.target.value)}>
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
            <Form.Control size="md" type="text" placeholder={email} onChange={(e) => setEmail(e.target.value)}/>
            </Col>
          </Form.Group>  
          <Button type="submit" variant="outline-primary">Update</Button>{' '}
        </Form>
      </div>
    </div>
    )
};

export default UpdateGame;