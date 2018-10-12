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
		// promise 对象能保存状态, 函数不能保存状态会马上返回, 闭包函数能保存状态
		// 异步代码写在 promise 中
		// */
		// const promise = new Promise((resolve, reject) => {
		// 	/* promise 状态: pending(进行中) fulfilled(成功) rejected(失败) */
		// 	wx.getSystemInfo({
		// 		success: res => {
		// 			/* 修改状态: pending(进行中) -> fulfilled(成功), 之后会凝固 */
		// 			resolve(res)
		// 		},
		// 		fail: err => {
		// 			/* 修改状态: pending(进行中) -> rejected(失败), 之后会凝固 */
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
    //    /* res -> api1 result */
		// 		console.log(res)
		// 		/* api2 invoked */
		// 		return bookModel.getMyBookCount()
		// 	})
		// 	.then(res => {
		// 		/* res -> api2 result */
		//    console.log(res)
		//    /* api3 invoked */
		// 		return bookModel.getMyBookCount()
		// 	})
		// 	.then(res => {
		//    /* res -> api3 result */
		// 		console.log(res)
		// 	})

		bookModel.getHotList().then(res => {
			this.setData({
				books: res
			})
		})
	}
})
