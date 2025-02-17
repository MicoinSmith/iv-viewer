"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FullScreenViewer", {
  enumerable: true,
  get: function get() {
    return _FullScreen["default"];
  }
});
Object.defineProperty(exports, "ImageViewer", {
  enumerable: true,
  get: function get() {
    return _ImageViewer["default"];
  }
});
exports["default"] = void 0;
var _ImageViewer = _interopRequireDefault(require("./ImageViewer"));
var _FullScreen = _interopRequireDefault(require("./FullScreen"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// if (process.env.ENV === 'dev') {
//   require('./scss/build.scss');
// }
var _default = _ImageViewer["default"];
exports["default"] = _default;