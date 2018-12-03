import { ClassicModel } from '../../models/classic.js'
import { BookModel } from '../../models/book.js'

let classicModel = new ClassicModel()
let bookModel = new BookModel()

Page({
  data: {
    hasUserInfo: true,
    userInfo: null,
    classics: [],
    myBooksCount: 0
  },
  /* 生命周期函数--监听页面加载 */
  onShow: function() {
    this.getMyFavor()
    this.hasGottenUserInfo()
    this.getMyBookCount()
  },
  getMyBookCount() {
    bookModel.getMyBookCount(data => {
      this.setData({
        myBooksCount: data.count
      })
    })
  },
  hasGottenUserInfo: function() {
    /* 获取用户的当前设置 */
    wx.getSetting({
      success: data => {
        /* 如果用户已经授权 */
        if (data.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: data => {
              this.setData({
                hasUserInfo: true,
                userInfo: data.userInfo
              })
            }
          })
        } else {
          this.setData({
            hasUserInfo: false
          })
        }
      }
    })
  },
  onGetUserInfo: function(event) {
    let userInfo = event.detail.userInfo
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      })
    }
  },
  getMyFavor: function() {
    classicModel.getMyFavor(data => {
      this.setData({
        classics: data
      })
    })
  },
  onPreviewTap: function(event) {
    wx.navigateTo({
      url: '/pages/classic-detail/classic-detail?cid=' + event.detail.cid + '&type=' + event.detail.type
    })
  },
  onJumpToAbout: function() {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  },
  onStudy: function() {
    wx.navigateTo({
      url: '/pages/course/course'
    })
  },
  onShareAppMessage() {}
})
