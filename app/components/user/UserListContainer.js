import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'
import UserList from './UserList'
import withWidth, { LARGE} from '../../utils/WithWidth'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

es6promise.polyfill()

class UserListContainer extends Component {
    constructor() {
      super()
      this.state = {
        users: []
      }
    }

  componentDidMount() {
    fetch('/data/users.js', {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        this.setState({ users: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {

    return (


    <UserList  username={this.props.params.username} users={this.state.users} >
        {this.props.children}
    </UserList>
    )
  }
}

export default UserListContainer
