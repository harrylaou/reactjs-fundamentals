import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import {pinkA200, transparent} from 'material-ui/styles/colors'
import WorkshopList from './WorkshopList'
import withWidth, { LARGE} from '../../utils/WithWidth'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'
import {withRouter} from 'react-router'

es6promise.polyfill()

class WorkshopListContainer extends Component {
    constructor() {
      super()
      this.state = {
        workshops: []
      }
    }

  componentDidMount() {
    fetch('/data/workshops.js', {
        method: 'get'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        this.setState({ workshops: data })
    }).catch((err)=> {
        console.log(err)
    })
  }

  render() {


    console.log("WorkshopListContainer id",this.props.params.id)
    return (


    <WorkshopList  id={this.props.params.id} workshops={this.state.workshops} >
        {this.props.children}
    </WorkshopList>
    )
  }
}

export default withRouter(WorkshopListContainer)

WorkshopListContainer.propTypes = {
  router: React.PropTypes.object.isRequired
}
