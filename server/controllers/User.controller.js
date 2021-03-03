const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    register: (req, res) => {
      const user = new User(req.body);
  
      user
        .save()
        .then(() => {
          res.json({ msg: "success!", user: user });
        })
        .catch(err => res.status(400).json(err));
    },
  
    login(req, res) {
      User.findOne({ email: req.body.email })
        .then(user => {
          if (user === null) {
            // no user was found in the DB with that email address
            res.status(400).json({ msg: "invalid login attempt" });
          } else {
            // we found the user and so we will need to compare the passwords
            bcrypt
              .compare(req.body.password, user.password)
              // .then is a successful case - we have ONLY successfully compared
              //    this is NOT meaning the have given us the correct password
              .then(passwordIsValid => {
                if (passwordIsValid) {
                  // adding a cookie to the response object so the client can talk with us
                  res
                    // cookie are a type of metadata and will take 3 pieces of information
                    .cookie(
                      // key that we can refer to in the cookie
                      "usertoken",
                      // sign the object that contains the user's _id using the secret
                      jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                      // options for this cookie
                      {
                        httpOnly: true,
                        // expires is not required
                        expires: new Date(Date.now() + 900000000),
                      }
                    )
                    .json({ 
                      // this is the json portion of the response to the client
                      //    we can display this
                      msg: "success!",
                      userLogged: {
                        username: user.username
                      }
                    });
                } else {
                  res.status(400).json({ msg: "invalid login attempt" });
                }
              })
              // invalid password - use a generic message to make it harder to hack
              .catch(err =>
                res.status(400).json({ msg: "invalid login attempt" })
              );
          }
        })
        .catch(err => res.json(err));
    },
  
    logout(req, res) {
      res
        .cookie("usertoken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
          httpOnly: true,
          maxAge: 0
        })
        .json({ msg: "ok" });
    },
  
    logout2(req, res) {
      res.clearCookie("usertoken");
      res.json({ msg: "usertoken cookie cleared" });
    },
  
    getLoggedInUser(req, res) {
      const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });
  
      User.findById(decodedJWT.payload._id)
        .then(user => res.json(user))
        .catch(err => res.json(err));
    },
  
    getAll(req, res) {
      User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
    },
  
    getOne(req, res) {
      User.findOne({ _id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.json(err));
    },

  
  };