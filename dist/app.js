'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      'pages': ['pages/main', 'pages/login'],
      'window': {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#fff',
        'navigationBarTitleText': 'WeChat',
        'navigationBarTextStyle': 'black'
      }
    };
    _this.globalData = {
      userInfo: null,
      token: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {}
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ0b2tlbiIsInVzZSIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7OztBQXNCRSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLFVBbkJmQSxNQW1CZSxHQW5CTjtBQUNQLGVBQVMsQ0FDUCxZQURPLEVBRVAsYUFGTyxDQURGO0FBTVAsZ0JBQVU7QUFDUiwrQkFBdUIsT0FEZjtBQUVSLHdDQUFnQyxNQUZ4QjtBQUdSLGtDQUEwQixRQUhsQjtBQUlSLGtDQUEwQjtBQUpsQjtBQU5ILEtBbUJNO0FBQUEsVUFMZkMsVUFLZSxHQUxGO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsYUFBTztBQUZJLEtBS0U7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVXLENBQ1g7OztnQ0FFWUMsRSxFQUFJO0FBQ2YsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLTCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS0ssV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkgsZUFBS0wsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJPLElBQUlQLFFBQS9CO0FBQ0FHLGdCQUFNQSxHQUFHSSxJQUFJUCxRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUF2QzBCLGVBQUtRLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAncGFnZXMnOiBbXG4gICAgICAgICdwYWdlcy9tYWluJyxcbiAgICAgICAgJ3BhZ2VzL2xvZ2luJ1xuXG4gICAgICBdLFxuICAgICAgJ3dpbmRvdyc6IHtcbiAgICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxuICAgICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjZmZmJyxcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnV2VDaGF0JyxcbiAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnYmxhY2snXG4gICAgICB9XG4gICAgfTtcblxuICAgIGdsb2JhbERhdGEgPSB7XG4gICAgICB1c2VySW5mbzogbnVsbCxcbiAgICAgIHRva2VuOiBudWxsXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgc3VwZXIoKVxuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxuICAgIH1cblxuICAgIG9uTGF1bmNoICgpIHtcbiAgICB9XG5cbiAgICBnZXRVc2VySW5mbyAoY2IpIHtcbiAgICAgIGNvbnN0IHRoYXQgPSB0aGlzXG4gICAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgIH1cbiAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzIChyZXMpIHtcbiAgICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4iXX0=