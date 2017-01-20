import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import Routes from "./config/Routes";
import "../public/css/main.css";
//remove injectTapEventPlugin when React 1.0 is released. Needed for onTouchTap. http://stackoverflow.com/a/34015469/988941 
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

ReactDOM.render(
    <Router history={ hashHistory }>{Routes}</Router>,
    document.getElementById("app")
);