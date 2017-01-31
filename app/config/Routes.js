import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import { Route, IndexRoute } from 'react-router'
import UserProfileContainer from '../containers/user/UserProfileContainer'
import UserListContainer from '../containers/user/UserListContainer'
import Login from '../components/Login'
import WorkshopListContainer from '../containers/workshop/WorkshopListContainer'
import WorkshopInfoContainer from '../containers/workshop/WorkshopInfoContainer'
import authCheck from './authCheck'

const Routes = (
  <Route>
    <Route path="/" component={Main} onEnter={authCheck}>
      <Route path="users" component={UserListContainer} >
        <Route path=":username" component={UserProfileContainer} />
      </Route>
      <Route path="workshops" component={WorkshopListContainer} >
        <Route path=":workshop" component={WorkshopInfoContainer} />
      </Route>
      <IndexRoute component={Home} />
    </Route>
    <Route path="login" component={Login}></Route>
  </Route>
)

export default Routes