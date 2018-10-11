Component({
	/* 组件的属性列表, 需要开放出来的数据 */
	properties: {
		like: { type: Boolean },
		count: { type: Number },
		readOnly: { type: Boolean }
		// myProperty: {
		//   // [properties](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)
		// 	// 属性名
		// 	type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
		// 	value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
		// 	observer: function(newVal, oldVal, changedPath) {
		// 		// 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
		// 		// 通常 newVal 就是新设置的数据， oldVal 是旧数据
		// 	}
		// }
	},
	data: {
		yes_url: 'images/like.png',
		no_url: 'images/like@dis.png'
	},
	methods: {
		onLike: function(event) {
			// console.log(event)
			if (this.properties.readOnly) {
				return
			}
			let like = this.properties.like
			let count = this.properties.count
			count = like ? count - 1 : count + 1
			/* setData: 修改 data 里面的数据 */
			this.setData({
				count: count,
				like: !like
			})
			let behavior = this.properties.like ? 'like' : 'cancel'
      /* 
      triggerEvent: 自定义事件
      like: 事件名称
      {behavior: behavior}: 传递参数, 设置 detail
      */
      this.triggerEvent(
				'like',
				{
					behavior: behavior
				},
				{}
			)
		}
	}
})
