export const LOGIN_USER_OK = 'LOGIN_USER_OK'
export const LOGOUT_USER = 'LOGOUT_USER'

export const loginUser = () => ({
  type: LOGIN_USER_OK
})

export const logoutUser = () => ({
  type: LOGOUT_USER
})