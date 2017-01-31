import {LOGIN_USER_OK, LOGOUT_USER} from '../actions/login'


const login = (state = localStorage.getItem('isAuthenticated') || 0, action) => {
  switch (action.type) {
    case LOGIN_USER_OK: {
      localStorage.setItem('isAuthenticated', 1)
      return true
    }
    case LOGOUT_USER: {
      localStorage.setItem('isAuthenticated', 0)
      return false
    }
    default:
      return state
  }
}

export default login