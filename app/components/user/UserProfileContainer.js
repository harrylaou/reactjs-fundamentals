import React, {Component} from 'react'
import UserProfile from './UserProfile'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

es6promise.polyfill()

class UserProfileContainer extends Component {
  constructor() {
    super()
    this.state = { username: null }
  }

  componentDidMount() {
    this.fetchUser(this.props.params.username)
  }

  fetchUser(username) {
    fetch(`/data/users/${username}.json`, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({user : data})
    }).catch((err)=> {
      console.log(err)
    })
  }

  render() {
    return (
      <UserProfile
        children={this.props.children}
        user={this.state.username}
        username={this.props.params.username}
      />
    )
  }
}

export default UserProfileContainer