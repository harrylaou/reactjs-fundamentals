import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import { Route, IndexRoute } from 'react-router'
import UserProfileContainer from '../components/user/UserProfileContainer'
import UserListContainer from '../components/user/UserListContainer'
import Login from '../components/Login'
import WorkshopListContainer from '../components/workshop/WorkshopListContainer'
import WorkshopContainer from '../components/workshop/WorkshopContainer'

const Routes = (
  <Route>
    <Route path="/" component={Main}>
      <Route path="users" component={UserListContainer}>
          <Route path=":username" component={UserProfileContainer} />
      </Route>
      <Route path="workshops" component={WorkshopListContainer}>
           <Route path=":id" component={WorkshopContainer} />
      </Route>
      <IndexRoute component={Home} />
    </Route>
    <Route path="login" component={Login}></Route>
  </Route>
)

export default Routes
