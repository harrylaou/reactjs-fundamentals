import React from 'react'
import { Router, hashHistory } from 'react-router'
import configureRoutes from '../config/Routes'
import { Provider } from 'react-redux'
import '../../public/css/main.css'

const Root = ({ store }) => {
  const Routes =  configureRoutes(store)
  return (
    <Provider store={store}>
      <Router history={ hashHistory }>
        {Routes}
      </Router>
    </Provider>
  )
}

export default Root
