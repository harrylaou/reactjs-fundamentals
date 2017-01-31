import React, {Component} from 'react'
import {connect} from 'react-redux'
import UserProfile from '../../components/user/UserProfile'
import * as api from '../../api'
import * as actions from '../../actions/user'


class UserProfileContainer extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.fetchUser(this.props.params.username)
  }

  fetchUser(username) {
    api
      .getUser(username)
      .then((user) => {
        this.props.dispatch(actions.receiveUser(user))
      })
      .catch((err)=> {
        console.log(err)
      })
  }

  render() {
    return (
      <UserProfile
        {...this.props}
        user={this.props.username}
        username={this.props.params.username}
      />
    )
  }
}

UserProfileContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileContainer)
