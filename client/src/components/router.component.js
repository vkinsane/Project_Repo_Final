import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"; //, Redirect comes from here

//components
import Home from "./home.component.js";
import Home2 from "./home_after_login.component.js";
import SignIn from "./signin.component.js";
import SignUp from "./signup.component.js";
import MyProfile from "./my_profile.component";

function MainRouter() {
  return (
    <React.Fragment>
      <Router>
        <Route
          exact
          path="/"
          component={localStorage.getItem("userLoggedIn") ? Home2 : Home}
        />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        {/* <Route path="/userFeed" component={Home2} /> */}
        <Route path="/my-profile" component={MyProfile} />
      </Router>
    </React.Fragment>
  );
}

export default MainRouter;
