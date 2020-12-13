import * as React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./components/pages/Login";
import ClassRoom from "./components/pages/ClassRoom";
import Course from "./components/pages/Course";
import Explore from "./components/pages/Explore";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import UserSettings from "./components/pages/UserSettings";

function Routes({ courses }) {
  const [user, setUser] = React.useState({
    userName: "",
    isLogged: false,
  });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard courses={courses} />
        </Route>
        <Route path="/classroom">
          <ClassRoom />
        </Route>
        <Route path="/course">
          <Course courses={courses} />
        </Route>
        <Route path="/explore">
          <Explore courses={courses} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/settings">
          <UserSettings />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
