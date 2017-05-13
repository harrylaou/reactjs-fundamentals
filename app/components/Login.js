import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap'
import { withRouter } from 'react-router'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(name, event) {
    let change = {}
    change[name] = event.target.value
    this.setState(change)
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.state.username === 'reactboy' && this.state.password === '1234') {

      // This is a temporary solution until you know more about redux
      // check branch sol008 for a bit more real world solution
      localStorage.setItem('isAuthenticated', 1)

      this.props.router.push('/')
    }
  }

  render() {
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <FormControl className="form-control" id="email" type="email" value={this.state.username} onChange={this.handleChange.bind(this, 'username')} placeholder="Enter email"/>
          <FormControl className="form-control" id="password" type="password" value={this.state.password} onChange={this.handleChange.bind(this, 'password')} placeholder="Password"/>
        </FormGroup>

        <Button bsSize="large" bsStyle="primary" block type="submit" onClick={this.handleSubmit}>Sign in</Button>
      </form>
    )
  }
}

export default withRouter(Login)
