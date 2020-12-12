import { Route, Switch } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import ClassRoom from "./components/pages/ClassRoom";
import Course from "./components/pages/Course";
import Explore from "./components/pages/Explore";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import UserSettings from "./components/pages/UserSettings";

function Routes() {
  return (
    <Switch>
      <Route path="/">
        <LoginPage />
      </Route>
      <Route path="/classroom">
        <ClassRoom />
      </Route>
      <Route path="/course">
        <Course />
      </Route>
      <Route path="/explore">
        <Explore />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/settings">
        <UserSettings />
      </Route>
    </Switch>
  );
}

export default Routes;
