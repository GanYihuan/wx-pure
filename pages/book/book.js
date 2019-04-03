import { BookModel } from '../../models/book.js'
import { random } from '../../utils/util.js'

let bookModel = new BookModel()

Page({
  data: {
    searchPanel: false,
    books: Object,
    more: false // 加载更多
  },
  onReachBottom: function() {
    this.setData({
      more: random(16) // 改成 true, random() 保证 more 的值是变化的
    })
  },
  onLoad: function(options) { // Lifecycle function--Called when page load
    // const promise = new Promise((resolve, reject) => { // promise 对象能保存状态, 函数不能保存状态会马上返回, 闭包函数能保存状态 异步代码写在 promise 中
    // 	wx.getSystemInfo({ // promise 状态: pending(进行中) fulfilled(成功) rejected(失败)
    // 		success: res => {
    // 			resolve(res) // 修改状态: pending(进行中) -> fulfilled(成功), 之后会凝固
    // 		},
    // 		fail: err => {
    // 			reject(err) // 修改状态: pending(进行中) -> rejected(失败), 之后会凝固
    // 		}
    // 	})
    // })
    // promise.then( // then(): 拿到异步执行后的结果状态
    // 	res => {
    // 		console.log(res + ' success!')
    // 	},
    // 	err => {
    // 		console.log(err + ' fail!')
    // 	}
    // )

    // 链式调用 api1, api2, api3
    // bookModel
    // 	.getHotList()
    // 	.then(res => {
    // 		console.log(res) // res -> api1 结果
    // 		return bookModel.getMyBookCount() // api2 调用
    // 	})
    // 	.then(res => {
    //    console.log(res) // res -> api2 结果
    // 		return bookModel.getMyBookCount() // api3 调用
    // 	})
    // 	.then(res => {
    // 		console.log(res) // res -> api3 结果
    // 	})

    bookModel
      .getHotList()
      .then(res => {
        this.setData({
          books: res
        })
      })
  },
  onActivateSearch: function() {
    this.setData({
      searchPanel: true
    })
  },
  onCancel: function() {
    this.setData({
      searchPanel: false
    })
  },
  onShareAppMessage() {}
})
