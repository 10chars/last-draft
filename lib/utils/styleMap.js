'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('./colors');

var styleMap = {
  'STRIKETHROUGH': {
    textDecoration: 'line-through'
  },
  'CODE': {
    fontFamily: 'Courier, monospace',
    margin: '4px 0',
    fontSize: '1em',
    padding: '1px 3px'
  },
  'DROPCAP': {
    float: 'left',
    fontSize: '3.25em',
    lineHeight: '0.8',
    marginLeft: '-0.05em',
    marginBottom: '-0.05em',
    padding: '0.05em 0.075em 0 0',
    position: 'relative'
  },
  'blue': {
    color: 'rgb(84, 172, 210)'
  }
}; /*
    * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
    *
    * License: MIT
    */


_colors.colors.map(function (c, i) {
  styleMap['color-' + c] = { color: c };
});

exports.default = styleMap;