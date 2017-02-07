import React, { Component } from 'react'
import {
  Card, CardActions, CardHeader,
  CardMedia, CardTitle
} from 'material-ui/Card'

const UserProfile = ({ user, username }) => {
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

UserProfile.propTypes = {
  user: React.PropTypes.object,
  username: React.PropTypes.string
}

export default UserProfile
