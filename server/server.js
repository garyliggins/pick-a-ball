require("dotenv").config()

const express = require('express'),
cookieParser = require("cookie-parser"),
cors = require("cors");
// twilio
const twilio = require("twilio");
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
// const pickaNumber = process.env.TWILIO_NUMBER;
const client = new twilio(accountSid, authToken);


require('./config/mongoose.config')(process.env.DB_NAME);

const mongoose = require('mongoose');
const app = express();




//sign up route


app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
// routes
require("./routes/Game.route")(app);
// twilio route
app.get("/send-text", (req,res) => {
  const {recipient, textmessage} = req.query
  // send text 
  client.messages.create({
      body: textmessage,
      to: recipient, 
      from: "+12144666478"
  })
    .then((messageg) => console.log(messageg.body))

});


app.listen(process.env.DB_PORT, () =>
  console.log(`Listening on port ${process.env.DB_PORT}`) //process.env is new
);