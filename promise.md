# promise

promise 对象能保存状态, 函数不能保存状态会马上返
回, 闭包函数能保存状态
异步代码写在 promise 中

```js
  const promise = new Promise((resolve, reject) => {
    /* promise 状态: pending(进行中) fulfilled(成功) rejected(失败) */
    wx.getSystemInfo({
      success: res => {
        /* 修改状态: pending(进行中) -> fulfilled(成功), 之后会凝固 */
        resolve(res)
      },
      fail: err => {
        /* 修改状态: pending(进行中) -> rejected(失败), 之后会凝固 */
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
```

```js
  bookModel
    .getHotList()
    .then(res => {
      /* res -> api1 result */
      console.log(res)
      /* invoked api2 */
      return bookModel.getMyBookCount()
    })
    .then(res => {
      /* res -> api2 result */
      console.log(res)
      /* invoked api3 */
      return bookModel.getMyBookCount()
    })
    .then(res => {
      /* res -> api3 result */
      console.log(res)
    })
```
