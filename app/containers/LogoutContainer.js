import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Logout from '../components/Logout'
import * as actions from '../actions/session'
import { setSessionToken } from '../utils/localStorage'

class LogoutContainer extends React.Component {
  constructor() {
    super()
    this.logoutUser = this.logoutUser.bind(this)
  }

  logoutUser() {
    setSessionToken(null)
    this.props.logout()
    this.props.router.push('/login')
  }

  render() {
    return (
      <Logout
        {...this.props}
        logoutUser={ this.logoutUser }
      />
    )
  }
}

LogoutContainer.propTypes = {
  router: React.PropTypes.object.isRequired,
  color: React.PropTypes.string.isRequired,
  logout: React.PropTypes.func.isRequired
}

const mapDispatchToProps = {
  logout: actions.logout
}

export default withRouter(connect(
  null,
  mapDispatchToProps
)(LogoutContainer))
