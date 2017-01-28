import React, {Component} from 'react'
import WorkshopList from '../../components/workshop/WorkshopList'
import * as api from '../../api'


class WorkshopListContainer extends Component {
  constructor() {
    super()
    this.state = {
      workshops: []
    }
    this.showWorkshop = this.showWorkshop.bind(this)
  }

  componentDidMount() {
    api
      .getWorkshops()
      .then((data) => {
        this.setState({ workshops: data })
      })
      .catch((err)=> {
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

WorkshopListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

WorkshopListContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}

export default WorkshopListContainer