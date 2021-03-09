import React from "react";

import Signin from "../components/SignIn";
import SignUp from "../components/SignUp";

const LogReg = () => {
  return (
    <div className="container-flex">
      <Signin />
      <SignUp />
    </div>
  );
};

export default LogReg;