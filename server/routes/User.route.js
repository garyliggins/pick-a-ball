const userController = require("../controllers/User.controller");

// add in the JWT middleware function "authenticate" - we named it in jwt.config.js
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
  app.post("/api/register", userController.register);
  app.post("/api/login", userController.login);
  app.post("/api/logout", userController.logout);
  
  // this route now has to be authenticated
  //    if this fails authentication, it will return the error
  //    if it is successful the "next" method that is called comes from userController
  app.get("/api/users", authenticate, userController.getAll);
  app.get("/api/users/loggedin", authenticate, userController.getLoggedInUser);
};