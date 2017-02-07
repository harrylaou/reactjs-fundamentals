import React from 'react'
import ReactDOM from 'react-dom'
import { Router, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store'
import configureRoutes from './config/Routes'
import '../public/css/main.css'
//remove injectTapEventPlugin when React 1.0 is released. Needed for onTouchTap. http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const store = configureStore()
const Routes =  configureRoutes(store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={ hashHistory }>
      {Routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)
