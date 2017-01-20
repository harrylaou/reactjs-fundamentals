import React from "react";
import Main from "../components/Main";
import Home from "../components/Home";
import { Route, IndexRoute } from 'react-router';
import UserProfile from "../components/user/UserProfile";
import UserList from "../components/user/UserList";
import Login from "../components/Login";
import WorkshopList from "../components/workshop/WorkshopList";

const Routes = (
  <Route>
    <Route path="/" component={Main}>
      <Route path="users" component={UserList}>
          <Route path=":username" component={UserProfile} />
      </Route>
      <IndexRoute component={Home} />
    </Route>
    <Route path="login" component={Login}></Route>
  </Route>
);

export default Routes;