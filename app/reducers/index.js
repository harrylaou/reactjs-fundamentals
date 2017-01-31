import { combineReducers } from 'redux'
import users from './users'
import user from './user'
import workshops from './workshops'
import workshop from './workshop'
import login from './login'

const reducers = combineReducers({
  users,
  user,
  workshops,
  workshop,
  login
})

export default reducers