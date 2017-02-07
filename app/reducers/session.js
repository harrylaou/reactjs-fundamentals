import { LOG_OUT, LOGGED_IN } from "../actions/session"
import { getSessionToken } from '../utils/localStorage'

// There is a better way to initialize the state with the store initial_state and the
// Redux middleware. We will refactor this when we explain you the Redux middleware
// Do you see any problem by doing this here? coupling? testing?
const token = getSessionToken()

const session = (state = { token }, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...state, token: action.token }
      break;
    case LOG_OUT:
      return { ...state, token: null }
      break;
    default:
      return state
  }
}

export default session
