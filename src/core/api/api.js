/**
 * 项目所有网络请求都调用这个方法
 *
 */
import wepy from 'wepy'
import { header, method, baseURL } from '../config'

/*
 * 'Content-Type': 'application/x-www-form-urlencoded'时用到
 * */
function json2Form (json) {
  let strline
  for (let p in json) {
    strline.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
  }
  return strline.join('&')
}

function baseRequest (clientRequestParams = {}) {
  return new Promise(function (resolve, reject) {
    wepy.request({
      url: baseURL + clientRequestParams.url,
      method: method || 'GET',
      data: clientRequestParams.params || {},
      header: header,
      success: (response) => {
        if (response.data.code === '0') {
          console.log(response)
          resolve(response.data)
        } else {
          console.error(response)
          reject(response.data)
        }
      },
      fail: (error) => {
        console.error(error)
        reject(error)
      }
    })
  })
}

export default baseRequest
