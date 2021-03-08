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

const deleteGame = (e, gameId) => {
    axios
    .delete("http://localhost:8000/api/games/" + gameId)
    .then((res) => {
        console.log(res.data);
        setAllGames(games.filter((game) => game._id !== gameId));
    })
    .catch((err) => console.log(err));
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
                  <h3>You Have a {game.sport} game on {(new Date(game.date)).toLocaleDateString("en-us")}</h3>
                  <p>be there by {game.time}:00 @ {game.location}</p>
                  <p>
                      <Link to={`/games/${game._id}`}>Details</Link>
                  </p>
                  <button onClick ={ (e) => deleteGame(e, game._id) }>Delete</button>
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
