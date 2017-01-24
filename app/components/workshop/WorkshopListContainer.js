import React, {Component} from 'react'
import WorkshopList from './WorkshopList'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

es6promise.polyfill()

class WorkshopListContainer extends Component {
  constructor() {
    super()
    this.state = {
      workshops: []
    }
    this.showWorkshop = this.showWorkshop.bind(this)
  }

  componentDidMount() {
    fetch('/data/workshops.js', {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ workshops: data })
    }).catch((err)=> {
      console.log(err)
    })
  }

  showWorkshop(workshop) {
    this.context.router.push(`/workshops/${workshop.id}`)
  }

  render() {
    return (
      <WorkshopList
        {...this.props}
        workshop={this.props.params.workshop}
        workshops={this.state.workshops}
        showWorkshop={this.showWorkshop}
      />
    )
  }
}

export default WorkshopListContainer

WorkshopListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}