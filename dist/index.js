"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = multipleRender;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function multipleRender(component, selector) {
  if (document.querySelectorAll(selector).length >= 1) {
    var containers = [].concat(_toConsumableArray(document.querySelectorAll(selector)));
    var components = [];

    containers.forEach(function (el) {
      var props = {};

      try {
        props = el.getAttribute("data-props") ? JSON.parse(el.getAttribute("data-props")) : {};
      } catch (err) {
        console.log("Check json structure on " + selector + " data-props");
      }

      var componentElement = _react2.default.createElement(component, _extends({}, props));

      if (_react2.default.isValidElement(componentElement)) {
        (0, _reactDom.render)(componentElement, el);
        components = components.concat([componentElement]);
      } else {
        console.error("check it's a valid component");
      }
    });

    return components;
  }
}