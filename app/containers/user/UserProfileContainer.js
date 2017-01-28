import React, {Component} from 'react'
import UserProfile from '../../components/user/UserProfile'
import * as api from '../../api'


class UserProfileContainer extends Component {
  constructor() {
    super()
    this.state = { username: null }
  }

  componentDidMount() {
    this.fetchUser(this.props.params.username)
  }

  fetchUser(username) {
    api
      .getUser(username)
      .then((data) => {
        this.setState({ user: data })
      })
      .catch((err)=> {
        console.log(err)
      })
  }

  render() {
    return (
      <UserProfile
        {...this.props}
        user={this.state.username}
        username={this.props.params.username}
      />
    )
  }
}

UserProfileContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default UserProfileContainer
