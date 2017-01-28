import React, {Component} from 'react'
import UserList from '../../components/user/UserList'
import * as api from '../../api'
import withWidth from '../../utils/WithWidth'
import { withRouter } from 'react-router'

class UserListContainer extends Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
    this.showUserProfile = this.showUserProfile.bind(this)
  }

  componentDidMount() {
    api
      .getUsers()
      .then((data) => {
        this.setState({ users: data })
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
        users={this.state.users}
        showUserProfile={this.showUserProfile}
        width={this.props.width}
      />
    )
  }
}

UserListContainer.propTypes = {
  params: React.PropTypes.object.isRequired,
  width: React.PropTypes.number.isRequired
}

export default withRouter(withWidth(UserListContainer))
