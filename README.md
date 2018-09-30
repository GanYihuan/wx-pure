# imooc-pure

> 纯正商业级应用-微信小程序开发实战 appkey

- RdshydjBvcYZhMZC
- GgRhTjUNUYn1fHke

## 5-6 小程序尺寸单位与设计原则

- iPhone6: dpi = 2, 750 X 1334 设计稿
- 编辑器 10px = 模拟器 5px
- rpx 比例 1:1, 不需要换算, rpx 会自适应，不适合用于字体

## 5-8 苹方字体设置

- **app.wxss**

## 5-9 page 样式的巧妙应用

- [page](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html)
- 继承样式，如 font 、 color ，会从组件外继承到组件内。

## 5-11 组件最好不要留有空白间距

- **like/index.wxss**

```style
.container text {
  /* 取消字体上下间距 */
  line-height: 24rpx;
  font-size: 24rpx;
  /* 取消字体上下间距 */
}
```

## 5-12 固定宽度还是自适应？

## 5-13 组件事件与事件处理

- **like/index.wxml**
  > bind, catch(阻止冒泡)

## 6-3 三元表达式与图片切换

## 6-4 组件的封闭性，开放性及粒度

## 7-1 看待组件的两种观点

## 7-3 生命周期函数

## 7-10 ES6 Module export 与 import

## 7-15 通用错误异常处理

## 8-2 组件属性赋值与页面渲染流程解析

## 8-4 movie 组件的实现

## 8-6 自定义事件的激活与监听

- **lkie/index.js** 自定义事件定义
- **classic.wxml** 自定义事件监听

## 8-7 喜欢还是不喜欢

## 8-8 组件的生命周期函数

## 8-10 业务逻辑到底写组件里还是页面里

## 8-11 observer 函数的应用

## 8-13 千万不要在 observer 中修改自身属性

## 9-1 navi 组件与移动端触碰区域讨论

## 9-3 禁用事件的技巧

> https 服务器

- **navi.js** 触发事件
- **classic.wxml->navi-cmp** 监听事件

## 9-4 music组件初步实现

## 9-5, 9-6 初识组件的 behavior 行为

- **classic-beh.js**
- 子类覆盖父类属性, 生命周期不会覆盖

## 9-7 9-8 是否是最新期刊的逻辑判断初步实现期刊切换

## 9-10 onNest 与函数重构技巧

## 10-1 缓存

## 10-2 收藏
