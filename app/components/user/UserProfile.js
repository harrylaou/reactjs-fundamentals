import React, {Component} from 'react'
import {
  Card, CardActions, CardHeader,
  CardMedia, CardTitle, CardText
} from 'material-ui/Card'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

es6promise.polyfill()

class UserProfile extends Component {


  render() {
    let user = this.props.user
    let username = this.props.username
    
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
