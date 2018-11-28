import { BookModel } from '../../models/book.js'
import { LikeModel } from '../../models/like.js'
import { CommentModel } from '../../models/comment.js'

let bookModel = new BookModel()
let commentModel = new CommentModel()
let likeModel = new LikeModel()

Page({
  data: {
    book: null,
    comments: [],
    noComment: true,
    posting: false,
    like: false,
    count: 0
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    /* pages 组件传入的参数在 options 中 */
    const bid = options.bid
    const detail = bookModel.getDetail(bid)
    const comments = bookModel.getComments(bid)
    const likeStatus = bookModel.getLikeStatus(bid)
    // detail.then(res => {
    //   this.setData({
    //     book: res
    //   })
    // })
    // comments.then(res => {
    //   this.setData({
    //     noComment: res.comments == false ? true : false,
    //     comments: res.comments
    //   })
    // })
    // likeStatus.then(res => {
    //   this.setData({
    //     like: res.like_status,
    //     count: res.fav_nums
    //   })
    // })
    Promise.all([detail, comments, likeStatus]).then(res => {
      console.log(res)
      this.setData({
        book: res[0],
        comments: res[1].comments,
        likeStatus: res[2].like_status,
        likeCount: res[2].fav_nums
      })
      wx.hideLoading()
    })
  },
  onFakePost: function() {
    this.setData({
      posting: true
    })
  },
  onCancel: function(event) {
    this.setData({
      posting: false
    })
  },
  onLike: function(event) {
    let like_or_cancel = event.detail.behavior
    likeModel.like(like_or_cancel, this.data.book.id, 400)
  },
  onPost: function(event) {
    let comment = event.detail.value || event.detail.text
    if (!comment) {
      return
    }
    if (comment.length > 12) {
      wx.showToast({
        title: '短评最多12个字',
        icon: 'none'
      })
      return
    }
    commentModel.post(this.data.book.id, comment, data => {
      wx.showToast({
        title: '+ 1',
        icon: 'none'
      })
      this.data.comments.unshift({
        content: comment,
        nums: 1
      })
      this.setData({
        comments: this.data.comments,
        noComment: false
      })
    })
    this.setData({
      posting: false
    })
  },
  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {}
})
