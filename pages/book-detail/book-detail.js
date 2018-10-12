import { BookModel } from '../../models/book.js'
// import { LikeModel } from '../../models/like.js'
// import { CommentModel } from '../../models/comment.js'

// let likeModel = new LikeModel()
// let commentModel = new CommentModel()
let bookModel = new BookModel()

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
    /* 编译模式需要的参数 */
		// console.log(bid)
		const detail = bookModel.getDetail(bid)
		const comments = bookModel.getComments(bid)
		const likeStatus = bookModel.getLikeStatus(bid)
		detail.then(res => {
			this.setData({
				book: res
			})
		})
		comments.then(res => {
			this.setData({
				comments: res.comments
			})
		})
		likeStatus.then(res => {
			this.setData({
				like: res.like_status,
				count: res.fav_nums
			})
		})
	},
	/**
	 * Called when user click on the top right corner to share
	 */
	onShareAppMessage: function() {}
})
