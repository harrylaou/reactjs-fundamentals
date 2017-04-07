import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import UserList from '../../components/user/UserList'
import * as api from '../../api'
import * as actions from '../../actions/users'
import withWidth from '../../utils/WithWidth'

export class UserListContainer extends Component {
  constructor() {
    super()
    this.showUserProfile = this.showUserProfile.bind(this)
  }

  componentDidMount() {
    // Imagine we want to fetch users from another component. How do you think
    // we could reuse this code?
    api
      .getUsers()
      .then((users) => {
        this.props.dispatch(actions.receiveUsers(users))
      })
      .catch((err)=> {
        console.log(err)
      })

  }

  showUserProfile(user) {
    this.props.router.push(`/users/${user.username}`)
  }

  render() {
    return (
      <UserList
        {...this.props}
        username={this.props.params.username}
        users={this.props.users}
        showUserProfile={this.showUserProfile}
        width={this.props.width}
      />
    )
  }
}

UserListContainer.propTypes = {
  params: React.PropTypes.object.isRequired,
  width: React.PropTypes.number.isRequired,
  router: React.PropTypes.object.isRequired,
  users: React.PropTypes.array,
}

const mapStateToProps = (state) => ({
  users: state.users
})

// Could you refactor this to make it better? Hint: LoginContainer
const mapDispatchToProps = (dispatch) => ({
  dispatch
})

// Do you think the order of these components matter?
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withWidth(UserListContainer)))
