import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormGroup, FormControl, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'

const Login = ({ username, password, handleSubmit, handleChange }) => (
  <form className="form-signin">
    <FormGroup>
      <h2 className="form-signin-heading">Please sign in</h2>
    </FormGroup>

    <FormGroup>
      <FormControl
        className="form-control"
        id="email"
        type="string"
        value={username}
        onChange={handleChange.bind(null, 'username')}
        placeholder="Enter email"
      />
      <FormControl
        className="form-control"
        id="password"
        type="password"
        value={password}
        onChange={handleChange.bind(null, 'password')}
        placeholder="Password"
      />
    </FormGroup>

    <Button
      bsSize="large"
      bsStyle="primary"
      onClick={handleSubmit}
    >
      Sign in
    </Button>
  </form>
)

Login.propTypes = {
  router: React.PropTypes.object,
  username: React.PropTypes.string,
  password: React.PropTypes.string,
  handleSubmit: React.PropTypes.func,
  handleChange: React.PropTypes.func,
}

export default Login
