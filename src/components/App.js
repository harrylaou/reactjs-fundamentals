import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Routes from './config/Routes'
import '../public/css/main.css'

const App = () => <Router history={hashHistory}>{Routes}</Router>

export default App
