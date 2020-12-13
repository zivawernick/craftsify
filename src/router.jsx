import * as React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./components/pages/Login";
import ClassRoom from "./components/pages/ClassRoom";
import Course from "./components/pages/Course";
import Explore from "./components/pages/Explore";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import UserSettings from "./components/pages/UserSettings";

const name = "Vinicius";
const greetings = {
  dashboard: `Welcome ${name}`,
  clasroom: "Classroom",
  course: "Course",
  explore: "Explore",
  profile: "Profile",
  settings: "Settings",
};

const courses = [
  {
    name: "Sewing",
    dificult: 2,
    text: "This course consists of learning to sew",
    completed: 50,
  },
  {
    name: "Carpentry",
    dificult: 3,
    text: "This course consists of learning to build a desk",
    completed: 24,
  },
  {
    name: "Painting",
    dificult: 1,
    text: "This course consists of learning to paint",
    completed: 5,
  },
];

function Routes() {
  const [user, setUser] = React.useState({
    userName: "",
    isLogged: false,
  });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard greet={greetings.dashboard} courses={courses} />
        </Route>
        <Route path="/classroom">
          <ClassRoom greet={greetings.clasroom} />
        </Route>
        <Route path="/course">
          <Course greet={greetings.course} courses={courses} />
        </Route>
        <Route path="/explore">
          <Explore greet={greetings.explore} courses={courses} />
        </Route>
        <Route path="/profile">
          <Profile greet={greetings.profile} />
        </Route>
        <Route path="/settings">
          <UserSettings greet={greetings.settings} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
