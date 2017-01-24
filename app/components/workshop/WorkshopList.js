import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import {pinkA200} from 'material-ui/styles/colors'
import withWidth, { LARGE} from '../../utils/WithWidth'


const WorkshopList = (props) => {
  let listItems = props.workshops.map(workshop => (
    <ListItem
      onClick={props.showWorkshop.bind(this, workshop)} key={workshop.id} style={{color: "black"}}
      primaryText={ `${workshop.title}  -  ${workshop.price}`}
      leftIcon={<ActionGrade color={pinkA200} />}
      rightAvatar={(
        <div>
          {workshop.instructors.map((instructor, index) => (<Avatar key={index} src={instructor.avatar} /> ))}
        </div>
      )}
    />
  ))

  const listView = <List className="view">{listItems}</List>
  const childrenView = <div className="view">{props.children}</div>

  let masterView, detailView

  if (props.username && props.width !== LARGE) {
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

export default withWidth()(WorkshopList)
