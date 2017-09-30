'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _uploadFile = require('./../components/uploadFile.js');

var _uploadFile2 = _interopRequireDefault(_uploadFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainPage = function (_wepy$page) {
  _inherits(MainPage, _wepy$page);

  function MainPage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MainPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call.apply(_ref, [this].concat(args))), _this), _this.$props = { "uploadFile": { "class": "upload_module" } }, _this.$events = {}, _this.components = {
      uploadFile: _uploadFile2.default
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return MainPage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MainPage , 'pages/main'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiTWFpblBhZ2UiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInVwbG9hZEZpbGUiLCJtZXRob2RzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ3BCQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsU0FBUSxlQUFULEVBQWQsRSxRQUNaQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBSVZDLE8sR0FBVSxFOzs7O0VBUDBCLGVBQUtDLEk7O2tCQUF0Qk4sUSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCBVcGxvYWRGaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvdXBsb2FkRmlsZS53cHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblBhZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgJHByb3BzID0ge1widXBsb2FkRmlsZVwiOntcImNsYXNzXCI6XCJ1cGxvYWRfbW9kdWxlXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIHVwbG9hZEZpbGU6IFVwbG9hZEZpbGVcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge31cblxuXG4gIH1cbiJdfQ==