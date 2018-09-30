// pages/book/book.js
Page({
	/**
	 * Page initial data
	 */
	data: {},

	/**
	 * Lifecycle function--Called when page load
	 */
	onLoad: function(options) {
		/*
    promise 对象 保存状态
    异步代码写在 promise 中
    */
		const promise = new Promise((resolve, reject) => {
			/* pending(进行中) fulfilled(成功) rejected(失败) */
			wx.getSystemInfo({
				success: res => {
					/* pending -> fulfilled */
					resolve(res)
				},
				fail: err => {
					/* pending -> rejected */
					reject(err)
				}
			})
    })
    /* then(): 拿到异步执行后的结果状态 */
		promise.then(
			res => {
				console.log(res + ' success!')
			},
			err => {
				console.log(err + ' fail!')
			}
		)
	},

	/**
	 * Lifecycle function--Called when page is initially rendered
	 */
	onReady: function() {},

	/**
	 * Lifecycle function--Called when page show
	 */
	onShow: function() {},

	/**
	 * Lifecycle function--Called when page hide
	 */
	onHide: function() {},

	/**
	 * Lifecycle function--Called when page unload
	 */
	onUnload: function() {},

	/**
	 * Page event handler function--Called when user drop down
	 */
	onPullDownRefresh: function() {},

	/**
	 * Called when page reach bottom
	 */
	onReachBottom: function() {},

	/**
	 * Called when user click on the top right corner to share
	 */
	onShareAppMessage: function() {}
})
