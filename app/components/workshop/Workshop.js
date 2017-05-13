import React, {Component} from 'react'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

es6promise.polyfill()

const Workshop = props => {

  let workshop = props.workshop
  let id = props.id
  console.log("Workshop id", props.id)

  if (workshop && workshop.id != id) {
    props.fetchWorkshop(id)
  }
  let title = ''
  let price = ''
  let url = ''
  let avatar = ''

  if (workshop) {
    title = `${workshop.title}`
    price = `${workshop.price}`
    url = `${workshop.url}`
    avatar = `${workshop.instructors[0].avatar}`
  }

  return (
    <Card>
      <CardHeader title={title} subtitle={url} avatar={avatar}/>
      <CardActions/>
    </Card>
  )
}

export default Workshop
