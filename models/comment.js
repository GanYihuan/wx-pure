import { HTTP } from '../utils/http-p'

class CommentModel extends HTTP {
  getComments(bid) {
    return this.request({
      url: `${'book/'}${bid}${'/short_comment'}`
    })
  }
  postComment(bid, comment) {
    return this.request({
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      }
    })
  }
}

export { CommentModel }
