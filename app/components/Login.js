import React, {Component} from 'react'
import {FormGroup, FormControl, Button} from 'react-bootstrap';

class Login extends Component {
  render () {
    return (
      <form className="form-signin">
        <FormGroup>
          <h2 className="form-signin-heading">Please sign in</h2>
        </FormGroup>

        <FormGroup>
          <FormControl className="form-control" id="email" type="email" value="" placeholder="Enter email" />
          <FormControl className="form-control" id="password" type="password" value="" placeholder="Password" />
        </FormGroup>

        <Button bsSize="large" bsStyle="primary" block type="submit">Sign in</Button>
      </form>
    )
  }
}

export default Login