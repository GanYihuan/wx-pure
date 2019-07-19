import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

let classicModel = new ClassicModel() // Instantiated object
let likeModel = new LikeModel()

Page({
  data: {
    classic: null,
    first: false,
    latest: true,
    likeStatus: false,
    likeCount: 0
  },
  onLoad: function(options) { // Lifecycle function--listening page load
    // wx.request({ // async request
    // 	url: 'http://bl.7yue.pro/v1/classic/latest',
    // 	header: {
    // 		appkey: 'GgRhTjUNUYn1fHke'
    // 	},
    // 	success: (res) => { // Receive the result of an asyn call res
    //    console.log(res)
    //    console.log(this.data.likeCount)
    // 		console.log(this.res.count)
    // 	}
    // })

    // 使用回调函数剥夺了 return 能力, 不能赋值操作, promise 能解决且带有 return 能力, 回调函数能获取值 let a = ...
    // classicModel.getClassic() 是异步，不能用同步方式调用, 里面没有 return, let latest = classicModel.getClassic()
    classicModel.getLatest(res => {
      // console.log(res)
      // this._getLikeStatus(res.id, res.type)
      this.setData({ // setData: modify data inside data, data update
        classic: res,
        likeCount: res.fav_nums,
        likeStatus: res.like_status
      })
    })
  },
  onLike: function(event) {
    let behavior = event.detail.behavior // 获取 like/index.js 传过来的参数
    likeModel.like(behavior, this.data.classic.id, this.data.classic.type)
  },
  onPrevious: function() {
    this._updateClassic('previous')
  },
  onNext: function() {
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
