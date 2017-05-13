import React, {Component} from 'react'

import es6promise from 'es6-promise'
import 'isomorphic-fetch'
import Workshop from './Workshop'

es6promise.polyfill()

class WorkshopContainer extends Component {
  constructor() {
    super()
    this.fetchWorkshop = this.fetchWorkshop.bind(this)
    this.state = { id: null }
  }

  componentDidMount() {
    console.log("WorkshopContainer id",this.props.params.id)
    this.fetchWorkshop(this.props.params.id)
  }

  fetchWorkshop(id) {
    fetch(`/data/workshops/${id}.json`, {
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
    <Workshop
        id={this.props.params.id}
        workshop={this.state.workshop}
        fetchWorkshop={this.fetchWorkshop}
    />
    )
  }
}

export default WorkshopContainer
