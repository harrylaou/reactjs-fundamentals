import React, {Component} from 'react'
import WorkshopInfo from './WorkshopInfo'
import es6promise from 'es6-promise'
import 'isomorphic-fetch'

es6promise.polyfill()

class WorkshopInfoContainer extends Component {
  constructor() {
    super()
    this.state = { workshop: null }
    this.fetchWorkshop = this.fetchWorkshop.bind(this)
  }

  componentDidMount() {
    this.fetchWorkshop(this.props.params.workshop)
  }

  fetchWorkshop(workshop) {
    fetch(`/data/workshops/${workshop}.json`, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({workshop : data})
    }).catch((err)=> {
      console.log(err)
    })
  }

  render() {
    return (
      <WorkshopInfo
        {...this.props}
        fetchWorkshop={this.fetchWorkshop}
        workshop={this.state.workshop}
        workshopID={this.props.params.workshop}
      />
    )
  }
}

export default WorkshopInfoContainer