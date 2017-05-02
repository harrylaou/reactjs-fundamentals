/* eslint no-console: 0 */
/* eslint global-require: 0 */

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './components/App'
//remove injectTapEventPlugin when React 1.0 is released. Needed for onTouchTap. http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin'

const rootEl = document.getElementById('root')

injectTapEventPlugin()

try {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  )
  if (module.hot) {
    module.hot.accept('./components/App', () => {
      // If you use Webpack 2 in ES modules mode, you can
      // use <App /> here rather than require() a <NextApp />.
      const NextApp = require('./components/App').default
      ReactDOM.render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        rootEl
      )
    })
  }
} catch (error) {
  console.log(error)
}
