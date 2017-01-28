import React, {Component} from 'react'
import {
  Card, CardActions, CardHeader, CardTitle
} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

const WorkshopInfo = (props) => {
  let workshop = props.workshop
  let workshopID = props.workshopID
  let instructors = ''
  let title = ''
  let button = ''

  if (workshop && workshop.id != workshopID) {
    props.fetchWorkshop(workshopID)
  }

  if (workshop) {
    instructors = workshop.instructors.map((instructor, index) => (
      <CardHeader
        key={index}
        title={instructor.name}
        subtitle={instructor.url}
        avatar={instructor.avatar}
      />
    ))
    title = `${workshop.title}  -  ${workshop.price}`
    button = (<FlatButton label="Buy" href={workshop.url} />)
  }

  return (
    <Card>
      <CardTitle title={title} />
      <CardTitle title="Instructors" />
      {instructors}
      <CardActions>
        {button}
      </CardActions>
    </Card>
  )
}

WorkshopInfo.propTypes = {
  workshop: React.PropTypes.object,
  workshopID: React.PropTypes.string
}

export default WorkshopInfo
