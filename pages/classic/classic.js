// import { HTTP } from '../../utils/http'
// let http = new HTTP()
import { ClassicModel } from '../../models/classic.js'
let classicModel = new ClassicModel()
import { LikeModel } from '../../models/like.js'
let likeModel = new LikeModel()

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		classic: null,
		first: false,
		latest: true,
		likeStatus: false,
		likeCount: 0
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
    /* wx.request: 异步 */
		// wx.request({
		// 	url: 'http://bl.7yue.pro/v1/classic/latest',
		// 	header: {
		// 		// appkey: 'RdshydjBvcYZhMZC'
		// 		appkey: 'GgRhTjUNUYn1fHke'
		// 	},
    //  /* success: 接收异步调用的结果 */
		// 	success: (res) => {
    //    console.log(res)
    //    console.log(this.data.likeCount)
		// 		console.log(this.res.count)
		// 	}
    // })
    
		// http.request({
		// 	url: 'classic/latest',
		// 	success: data => {
		// 		console.log(data)
		// 	}
    // })
    
		/* 使用回调函数剥夺了 return 能力 */
		classicModel.getLatest(res => {
			// console.log(res)
			// this._getLikeStatus(res.id, res.type)
			/* setData: 数据更新 */
			this.setData({
				// ...res
				classic: res,
				likeCount: res.fav_nums,
				likeStatus: res.like_status
			})
		})
		/*
    onLoad: latestClassic lastestIndex
    onPreviews: currentClassic currentIndex
    */
	},
	onLike: function(event) {
		// console.log(event)
		let behavior = event.detail.behavior
		likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
	},
	onPrevious: function(event) {
		this._updateClassic('previous')
	},
	onNext: function(event) {
		this._updateClassic('next')
	},
	_updateClassic: function(nextOrPrevious) {
		let index = this.data.classic.index
		classicModel.getClassic(index, nextOrPrevious, res => {
			this._getLikeStatus(res.id, res.type)
			this.setData({
				classic: res,
				latest: classicModel.isLatest(res.index),
				first: classicModel.isFirst(res.index)
			})
		})
	},
	_getLikeStatus: function(artID, category) {
		likeModel.getClassicLikeStatus(artID, category, data => {
			this.setData({
				likeStatus: data.like_status,
				likeCount: data.fav_nums
			})
		})
	}
})
