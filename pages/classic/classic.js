import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

/* 实例化对象 */
let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Page({
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
		/* wx.request: 异步请求 */
		// wx.request({
		// 	url: 'http://bl.7yue.pro/v1/classic/latest',
		// 	header: {
		// 		appkey: 'GgRhTjUNUYn1fHke'
		// 	},
		//  /* success: 接收异步调用的结果 res, this 指向 */
		// 	success: (res) => {
		//    console.log(res)
		//    console.log(this.data.likeCount)
		// 		console.log(this.res.count)
		// 	}
		// })

    /* 使用回调函数剥夺了 return 能力也就不能赋值操作, promise 能解决 */
    /* 回调函数能获取值 */
    /* classicModel.getClassic() 是异步，不能用同步方式调用, 里面没有 return */
    // let latest = classicModel.getClassic()
		classicModel.getLatest(res => {
			// console.log(res)
			// this._getLikeStatus(res.id, res.type)
			/* setData: 修改 data 里面的数据, 数据更新 */
			this.setData({
				// ...res
				classic: res,
				likeCount: res.fav_nums,
				likeStatus: res.like_status
			})
		})
	},
	onLike: function(event) {
    /* 获取传过来的参数 */
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
