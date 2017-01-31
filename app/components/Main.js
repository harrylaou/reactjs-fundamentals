import React, {Component} from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { pink, pink700 } from 'material-ui/styles/colors'
import AppNavDrawer from './AppNavDrawer'
import {spacing, colorManipulator, typography, zIndex} from 'material-ui/styles'
import withWidth, {LARGE} from '../utils/WithWidth'
import theme from '../Theme'
import * as actions from '../actions/login'

const muiTheme = getMuiTheme(theme)

class Main extends Component {
  constructor() {
    super()
    this.state = {
      nav: { open: false }
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }
  getStyles() {
    const styles = {
      appBar: {
        position: 'fixed',
        zIndex: muiTheme.zIndex.appBar + 1,
        top: 0,
        color: typography.textFullWhite
      },
      root: {},
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: typography.textFullWhite,
        lineHeight: `${spacing.desktopKeylineIncrement}px`,
        fontWeight: typography.fontWeightLight,
        backgroundColor: pink700,
        paddingLeft: spacing.desktopGutter,
        marginBottom: 8
      }
    }

    return styles
  }

  logoutUser() {
    this.props.dispatch(actions.logoutUser())
    this.props.router.push('/login')
  }

  toggleNav() {
    this.setState({ nav: { open: !this.state.nav.open } })
  }

  closeNav() {
    this.setState({ nav: { open: false } })
  }

  render() {
    const {prepareStyles} = muiTheme
    let docked = false
    let navDrawerOpen = this.state.nav.open
    let styles = this.getStyles()

    if (this.props.width === LARGE) {
      docked = true
      navDrawerOpen = true
      styles.root.paddingLeft = 256
    }

    let sectionStyles = prepareStyles(styles.root)

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="main-view">
          <AppBar
            title="Course Manager"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.toggleNav}
            iconElementRight={<FlatButton label="Logout" onClick={()=>{ this.logoutUser() }}/>}
            className="app-bar"
          />
          <AppNavDrawer
            open={navDrawerOpen}
            toggleNav={this.toggleNav}
            closeNav={this.closeNav}
            styles={styles}
            docked={docked}
          />
          <div style={sectionStyles} className="view-container">
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

Main.propTypes = {
  width: React.PropTypes.number.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  dispatch
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withWidth(Main)))
