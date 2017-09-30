'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowToast = function (_wepy$component) {
  _inherits(ShowToast, _wepy$component);

  function ShowToast() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ShowToast);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ShowToast.__proto__ || Object.getPrototypeOf(ShowToast)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      toast: _wepyComToast2.default
    }, _this.methods = {
      onClick: function onClick() {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return ShowToast;
}(_wepy2.default.component);

exports.default = ShowToast;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0LmpzIl0sIm5hbWVzIjpbIlNob3dUb2FzdCIsImNvbXBvbmVudHMiLCJ0b2FzdCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0MsQ0FFUjtBQUhPLEs7Ozs7RUFMMkIsZUFBS0MsUzs7a0JBQXZCTCxTIiwiZmlsZSI6InRvYXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBUb2FzdCBmcm9tICd3ZXB5LWNvbS10b2FzdCc7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvd1RvYXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIGNvbXBvbmVudHMgPSB7XG4gICAgICB0b2FzdDogVG9hc3RcbiAgICB9O1xuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIG9uQ2xpY2soKXtcblxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19