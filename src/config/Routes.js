import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import { Route, IndexRoute } from 'react-router'
import UserProfileContainer from '../containers/user/UserProfileContainer'
import UserListContainer from '../containers/user/UserListContainer'
import LoginContainer from '../containers/LoginContainer'
import WorkshopListContainer from '../containers/workshop/WorkshopListContainer'
import WorkshopInfoContainer from '../containers/workshop/WorkshopInfoContainer'

export const authCheck = (store, nextState, replace) => {
  const token = store.getState().session.token

  if (!token) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const configureRoutes = store => (
  <Route>
    <Route path="/" component={Main} onEnter={authCheck.bind(this, store)}>
      <Route path="users" component={UserListContainer} >
        <Route path=":username" component={UserProfileContainer} />
      </Route>
      <Route path="workshops" component={WorkshopListContainer} >
        <Route path=":workshop" component={WorkshopInfoContainer} />
      </Route>
      <IndexRoute component={Home} />
    </Route>
    <Route path="login" component={LoginContainer}></Route>
  </Route>
)

export default configureRoutes
