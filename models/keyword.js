import { HTTP } from '../utils/http-p.js'

class KeywordModel extends HTTP {
  key = 'q'
  max = 10
  getHistory() {
    const words = wx.getStorageSync(this.key)
    if (!words) {
      return []
    }
    return words
  }
  getHot() {
    return this.request({
      url: '/book/hot_keyword'
    })
  }
  addToHistory(word) { // 关键字写入缓存中
    let keywords = this.getHistory()
    // const has = keywords.inlcludes(word)
    let index = keywords.indexOf(word)
    if (index == -1) {
      let length = keywords.length
      if (length >= this.max) {
        keywords.pop(word)
      }
      keywords.unshift(word)
      wx.setStorageSync(this.key, keywords)
    }
  }
}

export { KeywordModel }
