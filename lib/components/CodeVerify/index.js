"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CodeVerify =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CodeVerify, _React$Component);

  function CodeVerify() {
    _classCallCheck(this, CodeVerify);

    return _possibleConstructorReturn(this, _getPrototypeOf(CodeVerify).apply(this, arguments));
  }

  _createClass(CodeVerify, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "cerify-code-panel"
      }, _react["default"].createElement("div", {
        className: "verify-code"
      }), _react["default"].createElement("div", {
        className: "verify-code-area"
      }, _react["default"].createElement("div", {
        className: "verify-input-area"
      }, _react["default"].createElement("input", {
        type: "text",
        className: "varify-input-code"
      })), _react["default"].createElement("div", {
        className: "verify-change-area"
      }, _react["default"].createElement("a", {
        className: "verify-change-code"
      }, "\u6362\u4E00\u5F20"))));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }]);

  return CodeVerify;
}(_react["default"].Component);

exports["default"] = CodeVerify;
CodeVerify.defaultProps = {
  type: 1,
  figure: 100,
  //位数，仅在type=2时生效
  arith: 0,
  //算法，支持加减乘，0为随机，仅在type=2时生效
  width: '200px',
  height: '60px',
  fontSize: '30px',
  codeLength: 6,
  btnId: 'check-btn',
  ready: function ready() {},
  success: function success() {},
  error: function error() {}
};