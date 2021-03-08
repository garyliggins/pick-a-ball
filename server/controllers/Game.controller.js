const Games = require('../models/Game.model');

module.exports = {
    getAll: (req, res) => {
        Games.find()
        .then((allGames) => res.json(allGames))
        .catch((err) => res.json(err));
    },
    create: (req, res) => {
        console.log(req.body);
        Games.create(req.body)
        .then((newGamesObj) => res.json(newGamesObj))
        .catch((err) => res.json(err));
    },
    getOne: (req, res) => {
        Games.findById(req.params.id)
        .then((oneGame) => res.json(oneGame))
        .catch((err) => res.json(err));
    },
    update: (req, res) => {
        Games.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((updatedGame) => res.json(updatedGame))
        .catch((err) => res.json(err));
    },
    delete: (req, res) => {
        Games.findByIdAndDelete(req.params.id)
        .then((deleted) => res.json(deleted))
        .catch((err) => res.json(err));
    },
};