import React, {Component} from 'react'
//import users from '../../../var/data/users.js'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'
import withWidth, {LARGE} from '../../utils/WithWidth'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'
import {withRouter} from 'react-router'
es6promise.polyfill()

const WorkshopList = (props) => {

  const showWorkshopProfile = (workshop) => {
      props.router.push(`/workshops/${workshop.id}`)
    }

    console.log("WorkshopList id", props.id)
    let listItems = props.workshops.map(ws => (
        <ListItem onClick={showWorkshopProfile.bind(this, ws)} key={ws.id} style={{
          color: "black"
        }} primaryText={`${ws.title} with ${ws.instructors[0].name}`} leftIcon={< ActionGrade color = {
          pinkA200
        } />} rightAvatar={< Avatar src = {
          ws.instructors[0].avatar
        } />}/>
      ))

      const listView = <List className="view">{listItems}</List>
        const childrenView = <div className="view">{props.children}</div>

          let masterView,
            detailView

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

        export default withWidth()(withRouter(WorkshopList));

        WorkshopList.propTypes = {
          router: React.PropTypes.object.isRequired,
          width : React.PropTypes.number.isRequired
        }
