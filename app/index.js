var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var ListHolder = require('./components/render')


ReactDOM.render(<div><ListHolder/><App/></div>, document.getElementById("app") )