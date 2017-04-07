import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { pink, pink700 } from 'material-ui/styles/colors'
import AppNavDrawer from './AppNavDrawer'
import { spacing, colorManipulator, typography, zIndex } from 'material-ui/styles'
import withWidth, { LARGE } from '../utils/WithWidth'
import theme from './Theme'
import LogoutContainer from '../containers/LogoutContainer'

const muiTheme = getMuiTheme(theme)

export class Main extends Component {
  constructor() {
    super()
    this.state = {
      nav: { open: false }
    }
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
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
      nav: {
        color: typography.textFullWhite,
      },
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
            onLeftIconButtonTouchTap={this.toggleNav}
            iconElementRight={<LogoutContainer color={styles.nav.color} />}
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

export default withWidth(Main)
