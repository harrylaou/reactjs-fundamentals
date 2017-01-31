import { combineReducers } from 'redux'
import users from './users'
import user from './user'
import workshops from './workshops'
import workshop from './workshop'

const reducers = combineReducers({
  users,
  user,
  workshops,
  workshop
})

export default reducers