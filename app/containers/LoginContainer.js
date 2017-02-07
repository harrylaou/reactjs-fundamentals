import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { loggedIn } from '../actions/session'
import { setSessionToken } from '../utils/localStorage'

class LoginContainer extends React.Component {
  constructor () {
    super()

    // Do you think it's better to store this state (username, password) here,
    // or you think it's better to store it in Redux?
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (name, event) {
    let change = {}
    change[name] = event.target.value
    this.setState(change)
  }

  handleSubmit () {
    if (this.state.username === 'demo' &&
        this.state.password === '1234') {

      const token = 'this_token_should_come_from_your_auth_api'

      // There is a better way to do this with the Redux middleware and sagas.
      // We will refactor this when we explain the advanced Redux part of the course
      // Do you see any problem with this implementation? testing? reusing  code?
      setSessionToken(token)

      // Why do you think we can do this instead of this.props.dispatch(loggedIn(token)) ?
      this.props.dispatchLoggedInAction(token)

      /*
        What do you think is better?
        this.props.dispatchLoggedInAction(token) or this.props.dispatch(loggedIn(token))
        Hint, think of encapsulation and testing
      */

      this.props.router.push('/')
    } else {
      alert('Invalid credentials')
    }
  }

  render() {
    return (
      <Login
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        username={this.username}
        password={this.password}
      />
    )
  }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
  dispatchLoggedInAction: (token) => {
    dispatch(loggedIn(token))
  }
})

/*
// Do you think this would work? why?
const mapDispatchToProps = ({
  dispatchLoggedInAction: loggedIn(token)
})
*/

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer))
