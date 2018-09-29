# imooc-pure

> 纯正商业级应用-微信小程序开发实战

- appkey
  > RdshydjBvcYZhMZC
  > GgRhTjUNUYn1fHke

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

```css
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
