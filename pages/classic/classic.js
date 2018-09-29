// import { ClassicModel } from '../../models/classic.js'

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		classic: null,
		latest: true,
		first: false,
		like: false,
		count: 0
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		wx.request({
			url: 'http://bl.7yue.pro/v1/classic/latest',
			header: {
        // appkey: 'KOLDaSADSDLWWbF'
				// appkey: 'RdshydjBvcYZhMZC'
				appkey: 'GgRhTjUNUYn1fHke'
			},
			success: (res) => {
				console.log(this.data.count)
			}
		})
	}
})
