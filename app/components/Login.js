import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import withRouter from '../utils/WithRouter'
import * as actions from '../actions/login'

class Login extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (name, event) {
    let change = {}
    change[name] = event.target.value
    this.setState(change)
  }

  handleSubmit () {
    debugger
    if (this.state.username === 'demo' &&
        this.state.password === '1234') {

      this.props.dispatch(actions.loginUser())
      this.props.router.push('/')
    }
  }

  render () {
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <FormControl
            className="form-control"
            id="email"
            type="string"
            value={this.state.username}
            onChange={this.handleChange.bind(this, 'username')}
            placeholder="Enter email"
          />
          <FormControl
            className="form-control"
            id="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange.bind(this, 'password')}
            placeholder="Password"
          />
        </FormGroup>

        <Button
          bsSize="large"
          bsStyle="primary"
          onClick={this.handleSubmit}
        >
          Sign in
        </Button>
      </form>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(Login))
