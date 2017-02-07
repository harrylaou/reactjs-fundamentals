import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { withRouter } from 'react-router'

class AppNavDrawer extends Component {
  menuItemClicked(value) {
    this.props.router.push(value)
    this.props.toggleNav()
  }

  render() {
    return (
      <Drawer
        open={this.props.open}
        docked={true}
        onRequestChange={this.props.toggleNav}
      >
        <div onClick={this.menuItemClicked.bind(this, '/')} style={this.props.styles.logo}>
          Course Manager
        </div>
        <MenuItem onClick={this.menuItemClicked.bind(this,'/users')}>Students</MenuItem>
        <MenuItem onClick={this.menuItemClicked.bind(this,'/workshops')}>Courses</MenuItem>
      </Drawer>
    )
  }
}

AppNavDrawer.propTypes = {
  toggleNav: React.PropTypes.func.isRequired,
  styles: React.PropTypes.object.isRequired,
  router: React.PropTypes.object.isRequired
}

export default withRouter(AppNavDrawer)
