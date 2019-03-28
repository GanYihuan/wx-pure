import { config } from '../config.js'

const tips = {
  1: '出现一个错误!',
  1005: 'appkey 无效',
  3000: '期刊不存在'
}

class HTTP {
  constructor() {
    this.baseRestUrl = config.api_blink_url
  }
  request(params) {
    let url = this.baseRestUrl + params.url
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({ // wx.request: 异步请求
      url: url,
      data: params.data,
      method: params.method,
      header: {
        'content-type': 'application/json',
        appkey: config.appkey
      },
      success: res => {
        const code = res.statusCode.toString()
        if (code.startsWith('2')) {
          params.success && params.success(res.data) // params.success 是否为 null, 如果不是则执行后面代码
        } else {
          const error_code = res.data.error_code
          this._show_error(error_code)
        }
      },
      fail: err => { // 没网络时才调用, 4xx 不会调用
        this._show_error(1)
      }
    })
  }
  _show_error(error_code) { // wechat 没有私有概念, 这里是一种写法
    if (!error_code) {
      error_code = 1
    }
    const tip = tips[error_code]
    // [wx.showToast](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html)
    wx.showToast({
      title: tip ? tip : tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}

export { HTTP }
