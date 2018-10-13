import { HTTP } from '../utils/http.js'

class CommentModel extends HTTP {
	constructor() {
		super()
	}
	getComment(bid, success) {
		var params = {
			url: `${'book/'}${bid}${'/short_comment'}`,
			success: success
		}
		this.request(params)
	}
	post(bid, comment, success) {
		let params = {
			url: 'book/add/short_comment',
			success: success,
			method: 'POST',
			data: {
				book_id: bid,
				content: comment
			},
			error: err => {
				wx.showToast({
					title: '评论失败'
				})
			}
		}
		this.request(params)
	}
}

export { CommentModel }
