# imooc-pure

> 纯正商业级应用-微信小程序开发实战 appkey

- RdshydjBvcYZhMZC
- GgRhTjUNUYn1fHke

## 5-3 定义引用与使用组件

- **classic.json** 引用组件
- **classic.wxml** 使用组件

## 5-6 小程序尺寸单位与设计原则

- iPhone6: dpi = 2, w:h = 750 X 1334 设计稿
- iPhone6: vscode 编辑器 5px = wechat 模拟器 10px
- iPhone6: rpx 比例 1:1, 不需要换算, rpx 会自适应，字体可能会用到 px, flex 解决布局, rpx 解决响应式

## 5-7, 5-8, 5-9, 5-10 苹方字体设置

- **app.wxss** ios,mac 上启用
- page 会包裹组件, 每个页面都会自动加 page
- [page](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)
- 继承样式(font, color), 会从组件外继承到组件内

## 5-11, 5-12 组件最好不要留有空白间距

- **like/index.wxss**

```css
/* 取消字体上下间距 */
line-height: 24rpx;
font-size: 24rpx;
/* 取消字体上下间距 */
```

## 5-13 组件事件与事件处理

- **like/index.wxml**
- `this.setData()` 修改 data 里面的数据
- `bind:tap="onLike"`
- `catch`(阻止冒泡)
- 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递
- 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递
- [事件](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)

## 6-1, 6-2, 6-3 三元表达式与图片切换

- **like/index.js**
- **like/index.wxml**

## 6-4, 6-5, 6-6 组件的封闭性，开放性及粒度, properties 属性详解, this

- **like/index.js**
- [properties](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)

## 7-1, 7-2 API

- 看待组件的两种观点
- Blink API 介绍与测试 API
- [API](https://github.com/fujiale33/old-land-flask-api/blob/master/README.md#HTTP%E7%8A%B6%E6%80%81%E7%A0%81)

## 7-3 生命周期函数

- [生命周期函数](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)

## 7-4 wx.request-4xx 状态码并不会执行 fail

- [wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

## 7-5, 7-6, 7-7, 7-8, 7-9 访问 API 获取数据, 同步，异步与回调函数, ES6 箭头函数与 this 指代

- **config.js**
- **classic.js**
- 微信开发工具 -> detail -> 不校验合法域名勾上(开发阶段)
- 500 是服务器原因, 服务端才能改

## 7-10, 7-11, 7-12, 7-13 ES6 Module export 与 import, HTTP 类的封装与 ES6 startsWith

- **util/http.js**
- 状态码: `const code = res.statusCode.toString()`
- ES6: `code.startsWith('2')`

## 7-15 通用错误异常处理

- **util/http.js**
- `wx.showToast()`
- `const error_code = res.data.error_code`

## 8-1 什么是‘剥夺函数return的能力’

- **models/classic.js** 获取请求数据
- 理解 promise
- **classic.js** `let a = classic.getLatest()` 需要 **models/classic.js** `getLatest()` return 内容, 但是 **models/classic.js** `getLatest()` 是异步函数无法 return 内容, 只有回调函数才能接受异步函数结果, 变成: **classic.js** `classicModel.getLatest(res => {})`, **models/classic.js** `getLatest()` 要接受回调函数变成 **models/classic.js** `getLatest(sCallback)`

## 8-2, 8-3 组件属性赋值与页面渲染流程解析, setData的误区

- **classic.js** **classic.wxml** **like/index.js** 传递属性
- 微信开发工具 -> AppData 查看 data
- `setData()` 用于数据更新

## 8-4, 8-5 movie 组件的实现

- **component/movie/index.js** behaviors

## 8-6 自定义事件的激活与监听

- **like/index.js** `this.triggerEvent()` 自定义事件触发
- **classic.wxml** `bind:like="onLike"` 自定义事件监听
- **classic.js** `event.detail.behavior` 获取事件传递的参数

## 8-7 喜欢还是不喜欢

- **models/like.js** 传递 like 状态到服务器
- **pages/classic.js**

## 8-8, 8-10 组件的生命周期函数

- **components/epsoide/index.js**
- 组件生命周期函数 `ready()`

## 8-11: observer 函数的应用

- 数字补零

## 9-1, 9-2, 9-3 navi 组件与移动端触碰区域讨论

- **components/navi/index.js**
- wechat 需要 https, 开发阶段可以用 http

## 9-4, 9-5, 9-6 初识组件的 behavior 行为

- **classic-beh.js**
- 子类覆盖父类属性, 生命周期不会覆盖

## 9-7 9-8, 9-10 是否是最新期刊的逻辑判断初步实现期刊切换, 函数重构

- **models/classic.js**
- 缓存处理
- wechat 清缓存

## 10

- 缓存
- 收藏 **models/like.js**
- es6 改写 classic
- wx:if, hidden 区别
- wxss 复用 bug
- **musicm** 音乐播放控件

## 11

- 底部栏
- **pages/book.js**
- promise
- **http-p.js**
- **models/book.js**
- promise callback

## 12

- 真正宽度, 偏移实现 **components/book.wxss**
- cycle `wx:for` use `<block></block>` **pages/book.wxml**
- pages 组件传入的参数在 options 中 **book-detail.js**
- wechat 固定开发页面-自定义编译条件
- slot **tag.wxml** **tag.js**
