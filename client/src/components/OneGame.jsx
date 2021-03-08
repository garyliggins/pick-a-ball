import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const OneGame = (props) => {
    const [ game, setGame ] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/games/" + props.id)
            .then((res) => setGame(res.data))
            .catch((err) => console.log(err));
    }, []);

    const deleteGame = (e, gameId) => {
        axios
        .delete("http://localhost:8000/api/games/" + gameId)
        .then((res) => {
            console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
        
        return (
            <div>
                <h2> {game.sport} Game</h2>
                <p>Sport: {game.sport}</p>
                <p>City: {game.city}</p>
                <p>State: {game.state}</p>
                <p>Location: {game.location}</p>
                <p>Players: {game.players}</p>
                <p>Date: {game.date}</p>
                <p>Time: {game.time}</p>


                <Link to="/">
                <button onClick ={ (e) => deleteGame(e, game._id) }>Delete</button>
                <button>Back</button>
                </Link>
                </div>
        )
}

export default OneGame;