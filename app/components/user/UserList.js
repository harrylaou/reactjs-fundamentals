import React, {Component} from 'react'
//import users from '../../../var/data/users.js'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'
import withWidth, { LARGE} from '../../utils/WithWidth'

class UserList extends Component {
  constructor() {
    super()
  }

  render() {
    let listItems = this.props.users.map(user => (
      <ListItem
        onClick={this.props.showUserProfile.bind(this, user)} key={user.username} style={{color: "black"}}
        primaryText={ `${user.name.first} ${user.name.last}`}
        leftIcon={<ActionGrade color={pinkA200} />}
        rightAvatar={<Avatar src={`images/${user.username}_sm.jpg`} />}
      />
    ))

    const listView = <List className="view">{listItems}</List>
    const childrenView = <div className="view">{this.props.children}</div>

    let masterView, detailView

    if (this.props.username && this.props.width !== LARGE) {
      masterView = childrenView
      detailView = null
    } else {
      masterView = listView
      detailView = childrenView
    }
    return (
      <div className="view-container">
        {masterView}
        {detailView}
      </div>
    )
  }
}

export default withWidth()(UserList)
