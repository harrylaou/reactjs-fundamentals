import React, {Component} from 'react'
import {connect} from 'react-redux'
import WorkshopInfo from '../../components/workshop/WorkshopInfo'
import * as api from '../../api'
import * as actions from '../../actions/workshop'

class WorkshopInfoContainer extends Component {
  constructor() {
    super()
    this.fetchWorkshop = this.fetchWorkshop.bind(this)
  }

  componentDidMount() {
    this.fetchWorkshop(this.props.params.workshop)
  }

  fetchWorkshop(workshop) {
    api
      .getWorkshop(workshop)
      .then((workshop) => {
        this.props.dispatch(actions.receiveWorkshop(workshop))
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
        workshop={this.props.workshop}
        workshopID={this.props.params.workshop}
      />
    )
  }
}

WorkshopInfoContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  workshop: state.workshop
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkshopInfoContainer)
