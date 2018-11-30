// pages/classic/classic.js
import { ClassicModel } from '../../models/classic.js'
import { LikeModel } from '../../models/like.js'

let classicModel = new ClassicModel()
let likeModel = new LikeModel()

Component({
  properties: {},
  data: {
    classic: null,
    latest: true,
    first: false,
    like: false,
    count: 0
  },
  methods: {
    onLoad: function(options) {
      let cid = options.cid
      let type = options.type
      classicModel.getById(cid, type, data => {
        this._getLikeStatus(data.id, data.type)
        this.setData({
          classic: data
        })
      })
    },
    onPrevious: function(event) {
      let index = this.data.classic.index
      classicModel.getPrevious(index, data => {
        if (data) {
          this._getLikeStatus(data.id, data.type)
          this.setData({
            classic: data,
            latest: classicModel.isLatest(data.index),
            first: classicModel.isFirst(data.index)
          })
        } else {
          console.log('not more classic')
        }
      })
    },
    onNext: function(event) {
      let index = this.data.classic.index
      classicModel.getNext(index, data => {
        if (data) {
          this._getLikeStatus(data.id, data.type)
          this.setData({
            classic: data,
            latest: classicModel.isLatest(data.index),
            first: classicModel.isFirst(data.index)
          })
        } else {
          console.log('not more classic')
        }
      })
    },
    onLike: function(event) {
      let like_or_cancel = event.detail.behavior
      likeModel.like(like_or_cancel, this.data.classic.id, this.data.classic.type)
    },
    _getLikeStatus: function(cid, type) {
      likeModel.getClassicLikeStatus(cid, type, data => {
        this.setData({
          like: data.like_status,
          count: data.fav_nums
        })
      })
    },
    onShareAppMessage() {}
  }
})
