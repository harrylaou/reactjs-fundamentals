import React, {Component} from 'react'
import WorkshopList from '../../components/workshop/WorkshopList'
import * as api from '../../api'
import withWidth from '../../utils/WithWidth'
import withRouter from '../../utils/WithRouter'

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
    this.props.router.push(`/workshops/${workshop.id}`)
  }

  render() {
    return (
      <WorkshopList
        {...this.props}
        workshop={this.props.params.workshop}
        workshops={this.state.workshops}
        showWorkshop={this.showWorkshop}
        width={this.props.width}
      />
    )
  }
}
/*
WorkshopListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}
*/
WorkshopListContainer.propTypes = {
  width: React.PropTypes.number.isRequired,
  params: React.PropTypes.object.isRequired
}

export default withRouter(withWidth(WorkshopListContainer))
