import { HTTP } from '../utils/http-p.js'

class BookModel extends HTTP {
  constructor() {
    super()
  }
  getHotList() {
    // return this.request({ // http-p.js/request({}), 里面写了 {}, 导致能传递对象, (解构赋值)
    // 	url: 'book/hot_list',
    // 	data: {
    // 		name: '1',
    // 		age: 18
    // 	},
    // 	method: 'POST'
    // })
    return this.request({
      url: 'book/hot_list'
    })
  }
  search(start, q) {
    return this.request({
      url: 'book/search?summary=1',
      data: {
        q: q,
        start: start
      }
    })
  }
  getMyBookCount(success) {
    let params = {
      url: '/book/favor/count',
      success: success
    }
    this.request(params)
  }
  getDetail(bid) {
    return this.request({
      url: `book/${bid}/detail`
    })
  }
  getLikeStatus(bid) {
    return this.request({
      url: `book/${bid}/favor`
    })
  }
  getComments(bid) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }
}

export { BookModel }
