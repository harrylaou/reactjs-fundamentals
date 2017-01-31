const authCheck = (nextState, replace) => {
  const auth = parseInt(localStorage.getItem('isAuthenticated') || 0)

  if (!auth) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default authCheck
