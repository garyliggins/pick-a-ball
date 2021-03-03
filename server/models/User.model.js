const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        // regular expressions (regex) create patterns that we must match
        //      this is what we would use if we wanted to require special 
        //      characters and upper and lower case letters
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
    },
  },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
  },
  { timestamps: true }
);

// create a "virtual" field that can be compared / validated, but it does
//    not get added to the database when it is saved
UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set(value => (this._confirmPassword = value));

// This is where the validation / comparison actually happens
//    the pre "hook" allows it to run before any other validations
UserSchema.pre("validate", function(next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
  }
  next();
});

// We must encrypt the password prior to saving it to the database
UserSchema.pre("save", function(next) {
  bcrypt.hash(this.password, 10).then(hash => {   // the number 10 is the number of times the password is hashed
    this.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema); //creates brand new collection

module.exports = User;