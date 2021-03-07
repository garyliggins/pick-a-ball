const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({

    sport: { 
        type: String,
        required: [true, "Sport is required"]
    },
    
    city: { 
        type: String,
        required: [true, "City is required"]
    },

    state: {
        type: String,
        required: [true, "State is required"]
    },

    location: {
        type: String,
        required: [true, "Location is required"]
    },

    players: {
        type: Number,
        required: [true, "Number of players is required"]
    },

    date: {
        type: String,
        required: [false, "Date is required"]
    },

    time: {
        type: Number,
        required: true,
    }
}, );

module.exports = mongoose.model("Game", GameSchema);