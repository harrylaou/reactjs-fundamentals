import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store'
//remove injectTapEventPlugin when React 1.0 is released. Needed for onTouchTap. http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'
import Root from "./components/Root"

injectTapEventPlugin()

const store = configureStore()

ReactDOM.render(
  <Root store={ store } />,
  document.getElementById('app')
)
