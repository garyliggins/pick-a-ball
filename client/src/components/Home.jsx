import React, {useState, useEffect} from "react";
// import nav component
import NavbarComp from "./NavbarComp";
import {Link} from '@reach/router';
import { Jumbotron, Container, Button } from "react-bootstrap";
// axios to make calls to backend
import axios from "axios";

const Home = () => {

  const [games,setAllGames] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/games")
      .then((res) => setAllGames(res.data))
      .catch((err) => console.log(err))
  }, []);

  const deleteGame = (e, id) => {
    e.preventDefault();
    axios
      .delete(`/api/games/${id}`)
      .catch((err)=>console.log(err));
      window.location.reload();
  }

  return (
    <div>
      <NavbarComp />
      <div className="container">
        <h1 className="homeHead">Upcoming Games</h1>
        <Jumbotron fluid className="homeJumbo">
          <Container className="head-comp-container">
            {
              games.map((game,index) => (
                <div key={index}>
                  <h3>You Have a {game.sport} game on {game.date}</h3>
                  <p>be there by {game.time}:00 @ {game.location}</p>
                  <Button variant="outline-danger" onClick={(e)=>deleteGame(e, game._id)}>Delete Game</Button>{' '}
                  <Link varient="outline-success" to={`/api/games/${game._id}`}>Update Game</Link>
                  {/* <Button variant="outline-success">Update Game</Button>{' '} */}
                </div>
              ))
            }

            {/* if theres no games show this in the jumbotron */}

            {/* <h1>No Upcoming Games</h1>
            <p>
              add games to attend!
            </p> */}
          </Container>
        </Jumbotron>
      </div>
    </div>
  );
};

export default Home;
