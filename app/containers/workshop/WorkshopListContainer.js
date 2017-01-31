import React, {Component} from 'react'
import {connect} from 'react-redux'
import WorkshopList from '../../components/workshop/WorkshopList'
import * as api from '../../api'
import * as actions from '../../actions/workshops'
import withWidth from '../../utils/WithWidth'
import withRouter from '../../utils/WithRouter'

class WorkshopListContainer extends Component {
  constructor() {
    super()
    this.showWorkshop = this.showWorkshop.bind(this)
  }

  componentDidMount() {
    api
      .getWorkshops()
      .then((workshops) => {
        this.props.dispatch(actions.receiveWorkshops(workshops))
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
        workshops={this.props.workshops}
        showWorkshop={this.showWorkshop}
        width={this.props.width}
      />
    )
  }
}

WorkshopListContainer.propTypes = {
  width: React.PropTypes.number.isRequired,
  params: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  workshops: state.workshops
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withWidth(WorkshopListContainer)))
