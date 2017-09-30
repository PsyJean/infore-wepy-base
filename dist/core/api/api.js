'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * 'Content-Type': 'application/x-www-form-urlencoded'时用到
 * */
/**
 * 项目所有网络请求都调用这个方法
 *
 */
function json2Form(json) {
  var strline = void 0;
  for (var p in json) {
    strline.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]));
  }
  return strline.join('&');
}

function baseRequest() {
  var clientRequestParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return new Promise(function (resolve, reject) {
    _wepy2.default.request({
      url: _config.baseURL + clientRequestParams.url,
      method: _config.method || 'GET',
      data: clientRequestParams.params || {},
      header: _config.header,
      success: function success(response) {
        if (response.data.code === '0') {
          console.log(response);
          resolve(response.data);
        } else {
          console.error(response);
          reject(response.data);
        }
      },
      fail: function fail(error) {
        console.error(error);
        reject(error);
      }
    });
  });
}

exports.default = baseRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJqc29uMkZvcm0iLCJqc29uIiwic3RybGluZSIsInAiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsImJhc2VSZXF1ZXN0IiwiY2xpZW50UmVxdWVzdFBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJwYXJhbXMiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZmFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUE7Ozs7QUFDQTs7OztBQUVBOzs7QUFQQTs7OztBQVVBLFNBQVNBLFNBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLE1BQUlDLGdCQUFKO0FBQ0EsT0FBSyxJQUFJQyxDQUFULElBQWNGLElBQWQsRUFBb0I7QUFDbEJDLFlBQVFFLElBQVIsQ0FBYUMsbUJBQW1CRixDQUFuQixJQUF3QixHQUF4QixHQUE4QkUsbUJBQW1CSixLQUFLRSxDQUFMLENBQW5CLENBQTNDO0FBQ0Q7QUFDRCxTQUFPRCxRQUFRSSxJQUFSLENBQWEsR0FBYixDQUFQO0FBQ0Q7O0FBRUQsU0FBU0MsV0FBVCxHQUFnRDtBQUFBLE1BQTFCQyxtQkFBMEIsdUVBQUosRUFBSTs7QUFDOUMsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDNUMsbUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxXQUFLLGtCQUFVTCxvQkFBb0JLLEdBRHhCO0FBRVhDLGNBQVEsa0JBQVUsS0FGUDtBQUdYQyxZQUFNUCxvQkFBb0JRLE1BQXBCLElBQThCLEVBSHpCO0FBSVhDLDRCQUpXO0FBS1hDLGVBQVMsaUJBQUNDLFFBQUQsRUFBYztBQUNyQixZQUFJQSxTQUFTSixJQUFULENBQWNLLElBQWQsS0FBdUIsR0FBM0IsRUFBZ0M7QUFDOUJDLGtCQUFRQyxHQUFSLENBQVlILFFBQVo7QUFDQVQsa0JBQVFTLFNBQVNKLElBQWpCO0FBQ0QsU0FIRCxNQUdPO0FBQ0xNLGtCQUFRRSxLQUFSLENBQWNKLFFBQWQ7QUFDQVIsaUJBQU9RLFNBQVNKLElBQWhCO0FBQ0Q7QUFDRixPQWJVO0FBY1hTLFlBQU0sY0FBQ0QsS0FBRCxFQUFXO0FBQ2ZGLGdCQUFRRSxLQUFSLENBQWNBLEtBQWQ7QUFDQVosZUFBT1ksS0FBUDtBQUNEO0FBakJVLEtBQWI7QUFtQkQsR0FwQk0sQ0FBUDtBQXFCRDs7a0JBRWNoQixXIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6aG555uu5omA5pyJ572R57uc6K+35rGC6YO96LCD55So6L+Z5Liq5pa55rOVXG4gKlxuICovXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgaGVhZGVyLCBtZXRob2QsIGJhc2VVUkwgfSBmcm9tICcuLi9jb25maWcnXG5cbi8qXG4gKiAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCfml7bnlKjliLBcbiAqICovXG5mdW5jdGlvbiBqc29uMkZvcm0gKGpzb24pIHtcbiAgbGV0IHN0cmxpbmVcbiAgZm9yIChsZXQgcCBpbiBqc29uKSB7XG4gICAgc3RybGluZS5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChqc29uW3BdKSlcbiAgfVxuICByZXR1cm4gc3RybGluZS5qb2luKCcmJylcbn1cblxuZnVuY3Rpb24gYmFzZVJlcXVlc3QgKGNsaWVudFJlcXVlc3RQYXJhbXMgPSB7fSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IGJhc2VVUkwgKyBjbGllbnRSZXF1ZXN0UGFyYW1zLnVybCxcbiAgICAgIG1ldGhvZDogbWV0aG9kIHx8ICdHRVQnLFxuICAgICAgZGF0YTogY2xpZW50UmVxdWVzdFBhcmFtcy5wYXJhbXMgfHwge30sXG4gICAgICBoZWFkZXI6IGhlYWRlcixcbiAgICAgIHN1Y2Nlc3M6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSAnMCcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihyZXNwb25zZSlcbiAgICAgICAgICByZWplY3QocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVJlcXVlc3RcbiJdfQ==