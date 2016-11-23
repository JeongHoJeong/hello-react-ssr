'use strict';

var koa = require('koa');
var serve = require('koa-static');
var app = koa();
var Foo = require('./../build/foo.js');
var React = require('react');
var ReactDOM = require('react-dom/server');

var domContents = ReactDOM.renderToString(React.createElement(Foo.default));

app.use(serve('.'));

app.use(function *(){
  this.type = 'text/html';
  this.body = `<div id='root'>${domContents}</div>
  <script src='bundle.js'></script>`;
});

app.listen(3000);
