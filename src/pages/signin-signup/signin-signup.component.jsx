import React from "react";
import "./signin-signup.style.scss";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

const SignInSignUp = () => {
  return (
    <div className="signin-signup">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInSignUp;
