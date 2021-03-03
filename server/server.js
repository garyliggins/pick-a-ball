require("dotenv").config()

const express = require('express'),
cookieParser = require("cookie-parser"),
cors = require("cors");


require('./config/supreme.config')(process.env.DB_NAME);

const mongoose = require('mongoose');
const app = express();



//sign up route


app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

require("./routes/User.routes")(app);


app.listen(process.env.DB_PORT, () =>
  console.log(`Listening on port ${process.env.DB_PORT}`) //process.env is new
);