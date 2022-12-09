"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _userReducer = _interopRequireDefault(require("./userReducer"));

var _articleReducer = _interopRequireDefault(require("./articleReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  userState: _userReducer["default"],
  articleState: _articleReducer["default"]
});
var _default = rootReducer;
exports["default"] = _default;