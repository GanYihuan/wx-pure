import { HTTP } from '../utils/http.js'

class ClassicModel extends HTTP {
  prefix = 'classic'
  constructor() {
    super()
  }
  getLatest(sCallback) { // 获取最新的期刊
    // this.request() 是 async, 不能 return 结果
    this.request({
      url: 'classic/latest',
      success: res => {
        let key = this._fullKey(res.index)
        wx.setStorageSync(key, res)
        this._setLatestIndex(res.index) // lastestClassic save to storage
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
  _fullKey(partKey) {
    let key = this.prefix + '-' + partKey
    return key
  }
  _setLatestIndex(index) { // 在缓存中存放最新一期的期数 index
    let key = this._fullKey('latest-' + index)
    wx.setStorageSync(key, index)
  }
  _getLastIndex(index) { // 读取最新一期的期数缓存
    let key = this._fullKey('latest-' + index)
    let latestIndex = wx.getStorageSync(key)
    return latestIndex
  }
}

export { ClassicModel }
