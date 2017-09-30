'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UploadFile = function (_wepy$component) {
  _inherits(UploadFile, _wepy$component);

  function UploadFile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UploadFile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UploadFile.__proto__ || Object.getPrototypeOf(UploadFile)).call.apply(_ref, [this].concat(args))), _this), _this.methods = {
      uploadFile: function uploadFile() {
        wx.chooseImage({
          success: function success(res) {
            console.log(res);

            var tempFilePaths = res.tempFilePaths;
            wx.uploadFile({
              url: '', //接口地址
              filePath: tempFilePaths[0],
              name: 'file',
              formData: {
                'user': 'test'
              },
              success: function success(res) {
                var data = res.data;
                //do something
              }
            });
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return UploadFile;
}(_wepy2.default.component);

exports.default = UploadFile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZEZpbGUuanMiXSwibmFtZXMiOlsiVXBsb2FkRmlsZSIsIm1ldGhvZHMiLCJ1cGxvYWRGaWxlIiwid3giLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidGVtcEZpbGVQYXRocyIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsImZvcm1EYXRhIiwiZGF0YSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUVuQkMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1hDLFdBQUdDLFdBQUgsQ0FBZTtBQUNiQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxvQkFBUUMsR0FBUixDQUFZRixHQUFaOztBQUVBLGdCQUFJRyxnQkFBZ0JILElBQUlHLGFBQXhCO0FBQ0FOLGVBQUdELFVBQUgsQ0FBYztBQUNaUSxtQkFBSyxFQURPLEVBQ0g7QUFDVEMsd0JBQVVGLGNBQWMsQ0FBZCxDQUZFO0FBR1pHLG9CQUFNLE1BSE07QUFJWkMsd0JBQVM7QUFDUCx3QkFBUTtBQURELGVBSkc7QUFPWlIsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYTtBQUNwQixvQkFBSVEsT0FBT1IsSUFBSVEsSUFBZjtBQUNBO0FBQ0Q7QUFWVyxhQUFkO0FBWUQ7QUFqQlksU0FBZjtBQW1CRDtBQXJCTyxLOzs7O0VBRjRCLGVBQUtDLFM7O2tCQUF4QmYsVSIsImZpbGUiOiJ1cGxvYWRGaWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwbG9hZEZpbGUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdXBsb2FkRmlsZSgpIHtcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuXG4gICAgICAgICAgICB2YXIgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgICAgICB3eC51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgdXJsOiAnJywgLy/mjqXlj6PlnLDlnYBcbiAgICAgICAgICAgICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgZm9ybURhdGE6e1xuICAgICAgICAgICAgICAgICd1c2VyJzogJ3Rlc3QnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSByZXMuZGF0YVxuICAgICAgICAgICAgICAgIC8vZG8gc29tZXRoaW5nXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiJdfQ==