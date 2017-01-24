import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'
import withWidth, { LARGE} from '../../utils/WithWidth'

class WorkshopList extends Component {
  constructor() {
    super()
  }

  render() {
    let listItems = this.props.workshops.map(workshop => (
      <ListItem
        onClick={this.props.showWorkshop.bind(this, workshop)} key={workshop.id} style={{color: "black"}}
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

export default withWidth()(WorkshopList)
