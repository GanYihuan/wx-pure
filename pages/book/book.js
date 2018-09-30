// pages/book/book.js
import { BookModel } from '../../models/book.js'

let bookModel = new BookModel()

Page({
	/**
	 * Page initial data
	 */
	data: {
		searchPanel: false,
		books: Object,
		more: false
	},

	/**
	 * Lifecycle function--Called when page load
	 */
	onLoad: function(options) {
		// /*
		// promise 对象 保存状态
		// 异步代码写在 promise 中
		// */
		// const promise = new Promise((resolve, reject) => {
		// 	/* pending(进行中) fulfilled(成功) rejected(失败) */
		// 	wx.getSystemInfo({
		// 		success: res => {
		// 			/* pending -> fulfilled */
		// 			resolve(res)
		// 		},
		// 		fail: err => {
		// 			/* pending -> rejected */
		// 			reject(err)
		// 		}
		// 	})
		// })
		// /* then(): 拿到异步执行后的结果状态 */
		// promise.then(
		// 	res => {
		// 		console.log(res + ' success!')
		// 	},
		// 	err => {
		// 		console.log(err + ' fail!')
		// 	}
		// )

		// const hotList = bookModel.getHotList()
		// hotList.then(res => {
		// 	console.log(res)
		// })

		// bookModel
		// 	.getHotList()
		// 	.then(res => {
		// 		console.log(res)
		// 		// api2
		// 		return bookModel.getMyBookCount()
		// 	})
		// 	.then(res => {
		// 		// res -> api2
    //     console.log(res)
    //     // api3
		// 		return bookModel.getMyBookCount()
		// 	})
		// 	.then(res => {
    //     // res -> api3
		// 		console.log(res)
		// 	})
	}
})
