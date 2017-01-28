import React, {Component} from 'react'
import WorkshopInfo from '../../components/workshop/WorkshopInfo'
import * as api from '../../api'

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
    api
      .getWorkshop(workshop)
      .then((data) => {
        this.setState({ workshop : data })
      })
      .catch((err)=> {
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

WorkshopInfoContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default WorkshopInfoContainer
