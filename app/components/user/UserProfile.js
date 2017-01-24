import React, {Component} from 'react'
import {
  Card, CardActions, CardHeader,
  CardMedia, CardTitle, CardText
} from 'material-ui/Card'


class UserProfile extends Component {
  constructor() {
    super()
  }

  render() {
    let user = this.props.user
    let username = this.props.username
    if (user && user.username != username) {
      this.fetchUser(username)
    }
    let fullname = ''
    let email = ''
    let gender = ''

    if (user){
      fullname = `${user.name.title} ${user.name.first} ${user.name.last}`
      email = user.email
      gender = user.gender
    }

    return (
      <Card>
        <CardHeader
          title={fullname}
          subtitle={username}
          avatar={`/images/${username}_sm.jpg`}
        />
        <CardMedia
          overlay={<CardTitle title={email} subtitle={gender} />}
        >
          <img src={`/images/${username}_lg.jpg`} />
        </CardMedia>
        <CardActions />
      </Card>
    )
  }
}

export default UserProfile