import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; //, Redirect comes from here

//components
import Home from "./home.component.js";
import Home2 from "./home-after-login.component.js";
import SignIn from "./signin.component.js";
import SignUp from "./signup.component.js";
import MyProfile from "./my-profile.component";

function MainRouter() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/home-after-login" component={Home2} />
        <Route path="/my-profile" component={MyProfile} />
      </Router>
    </div>
  );
}

export default MainRouter;
