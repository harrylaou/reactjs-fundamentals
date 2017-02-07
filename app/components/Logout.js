import React from 'react'
import FlatButton from 'material-ui/FlatButton'

const Logout = ({ logoutUser, color }) => (
  <FlatButton style={{color}} label="Logout" onClick={()=>{ logoutUser() }}/>
)


Logout.propTypes = {
  color: React.PropTypes.string.isRequired,
  logoutUser: React.PropTypes.func.isRequired,
}

export default Logout
