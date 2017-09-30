'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../core/api/api.js');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '登录'
    }, _this.components = {}, _this.data = {
      username: '',
      password: ''
    }, _this.methods = {
      getUsername: function getUsername(e) {
        this.username = e.detail.value;
        this.$apply();
      },
      getPassword: function getPassword(e) {
        this.password = e.detail.value;
        this.$apply();
      },
      submitUserMessage: function submitUserMessage() {
        var requestParams = {
          params: {
            password: this.password,
            username: this.username
          },
          url: '/infore-pro-manager/app/Login/checkLogin'
        };
        (0, _api2.default)(requestParams).then(function (resolve) {
          wx.setStorage({
            key: 'token',
            data: resolve.body.token
          });
        }, function (reject) {
          console.log('failure');
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwiY29tcG9uZW50cyIsImRhdGEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwibWV0aG9kcyIsImdldFVzZXJuYW1lIiwiZSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5IiwiZ2V0UGFzc3dvcmQiLCJzdWJtaXRVc2VyTWVzc2FnZSIsInJlcXVlc3RQYXJhbXMiLCJwYXJhbXMiLCJ1cmwiLCJ0aGVuIiwicmVzb2x2ZSIsInd4Iiwic2V0U3RvcmFnZSIsImtleSIsImJvZHkiLCJ0b2tlbiIsInJlamVjdCIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQLGdDQUEwQjtBQURuQixLLFFBSVRDLFUsR0FBYSxFLFFBRWJDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGdCQUFVO0FBRkwsSyxRQUtQQyxPLEdBQVU7QUFDUkMsaUJBRFEsdUJBQ0lDLENBREosRUFDTTtBQUNaLGFBQUtKLFFBQUwsR0FBZ0JJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBekI7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQyxpQkFMUSx1QkFLSUosQ0FMSixFQUtNO0FBQ1osYUFBS0gsUUFBTCxHQUFnQkcsRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNBLGFBQUtDLE1BQUw7QUFDRCxPQVJPO0FBU1JFLHVCQVRRLCtCQVNXO0FBQ2pCLFlBQUlDLGdCQUFnQjtBQUNsQkMsa0JBQVE7QUFDTlYsc0JBQVUsS0FBS0EsUUFEVDtBQUVORCxzQkFBVSxLQUFLQTtBQUZULFdBRFU7QUFLbEJZLGVBQUs7QUFMYSxTQUFwQjtBQU9BLDJCQUFZRixhQUFaLEVBQ0dHLElBREgsQ0FDUSxVQUFDQyxPQUFELEVBQWE7QUFDakJDLGFBQUdDLFVBQUgsQ0FBYztBQUNaQyxpQkFBSyxPQURPO0FBRVpsQixrQkFBTWUsUUFBUUksSUFBUixDQUFhQztBQUZQLFdBQWQ7QUFLRCxTQVBILEVBT0ssVUFBQ0MsTUFBRCxFQUFZO0FBQ2JDLGtCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNELFNBVEg7QUFVRDtBQTNCTyxLOzs7O0VBWnVCLGVBQUtDLEk7O2tCQUFuQjNCLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IGJhc2VSZXF1ZXN0IGZyb20gJy4uL2NvcmUvYXBpL2FwaSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+eZu+W9lSdcbiAgICB9O1xuXG4gICAgY29tcG9uZW50cyA9IHt9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH07XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgZ2V0VXNlcm5hbWUoZSl7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgZ2V0UGFzc3dvcmQoZSl7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBlLmRldGFpbC52YWx1ZVxuICAgICAgICB0aGlzLiRhcHBseSgpXG4gICAgICB9LFxuICAgICAgc3VibWl0VXNlck1lc3NhZ2UoKXtcbiAgICAgICAgbGV0IHJlcXVlc3RQYXJhbXMgPSB7XG4gICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lXG4gICAgICAgICAgfSxcbiAgICAgICAgICB1cmw6ICcvaW5mb3JlLXByby1tYW5hZ2VyL2FwcC9Mb2dpbi9jaGVja0xvZ2luJ1xuICAgICAgICB9XG4gICAgICAgIGJhc2VSZXF1ZXN0KHJlcXVlc3RQYXJhbXMpXG4gICAgICAgICAgLnRoZW4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2Uoe1xuICAgICAgICAgICAgICBrZXk6ICd0b2tlbicsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc29sdmUuYm9keS50b2tlblxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgIH0sIChyZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmYWlsdXJlJylcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiJdfQ==