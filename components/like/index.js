Component({
	/* 组件的属性列表, 需要开放出来的数据 */
	properties: {
		like: Boolean,
		count: Number,
		readOnly: Boolean
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
			let count = this.properties.count
			count = this.properties.like ? count - 1 : count + 1
			/* 修改 data 里面的数据 */
			this.setData({
				count: count,
				like: !this.properties.like
			})
			let behavior = this.properties.like ? 'like' : 'cancel'
			/* 自定义事件 */
			/* behavior 设置 detail */
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
