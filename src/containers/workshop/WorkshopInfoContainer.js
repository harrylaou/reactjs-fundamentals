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

  componentWillReceiveProps(nextProps) {
    // If you are thinking that performance could be improved by caching
    // the user, we agree. But we want to keep this example simple.
    // We are going to improve this code in the next lessons. We are building up :)
    if (this.props.params.workshop !== nextProps.params.workshop) {
      this.fetchWorkshop(nextProps.params.workshop)
    }
  }

  // Imagine we want to fetch another workshop from another component. How do you
  // think we could reuse this code?
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
        workshop={this.props.workshop}
      />
    )
  }
}

WorkshopInfoContainer.propTypes = {
  params: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  workshop: React.PropTypes.object
}

const mapStateToProps = (state) => ({
  workshop: state.workshop
})

// Could you refactor this to make it better? Hint: LoginContainer
const mapDispatchToProps = (dispatch) => ({
  dispatch
})

// Do you think the order of these components matter?
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkshopInfoContainer)
