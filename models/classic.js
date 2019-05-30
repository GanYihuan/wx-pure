import { HTTP } from '../utils/http.js'

class ClassicModel extends HTTP {
  prefix = 'classic'
  constructor() {
    super()
  }
  getLatest(sCallback) { // 获取最新的期刊, 也就是最大的期刊号，可看作是最后一期期刊
    // this.request() is async, can't return res, invoked HTTP request()
    this.request({
      url: 'classic/latest',
      success: res => {
        let key = this._fullKey(res.index)
        wx.setStorageSync(key, res) // 缓存该期内容
        this._setLatestIndex(res.index) // 缓存该期刊号，用来判断是否是最后一期期刊
        sCallback(res) // 回调函数回传回去
      }
    })
  }
  getById(cid, type, success) {
    let params = {
      url: 'classic/' + type + '/' + cid,
      success: success
    }
    this.request(params)
  }
  getClassic(index, next_or_previous, sCallback) { // 获取下一期或者上一期期刊
    let key = next_or_previous === 'next' ? this._fullKey(index + 1) : this._fullKey(index - 1)
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `classic/${index}/${next_or_previous}`,
        success: res => {
          let key = this._fullKey(res.index)
          wx.setStorageSync(key, res)
          sCallback(res)
        }
      })
    } else {
      sCallback(classic)
    }
  }
  getMyFavor(success) {
    let params = {
      url: 'classic/favor',
      success: success
    }
    this.request(params)
  }
  isFirst(index) { // 是否是最新一期期刊
    return index === 1 ? true : false
  }
  isLatest(index) { // 是否是最后一期期刊
    let latestIndex = this._getLastIndex(index) // lastestClassic get from storage
    return latestIndex === index ? true : false
  }
  _fullKey(partKey) { // key 值加盐，用来定义名字
    let key = this.prefix + '-' + partKey
    return key
  }
  _setLatestIndex(index) { // 缓存 latest-
    let key = this._fullKey('latest-' + index)
    wx.setStorageSync(key, index)
  }
  _getLastIndex(index) { // 读取 latest- 缓存, 获取 index
    let key = this._fullKey('latest-' + index)
    let latestIndex = wx.getStorageSync(key)
    return latestIndex
  }
}

export { ClassicModel }
