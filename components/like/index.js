// components/like/like-cmp.js
Component({
	/* 组件的属性列表 */
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
			if (this.properties.readOnly) {
				return
			}
			let count = this.properties.count
			count = this.properties.like ? count - 1 : count + 1
			this.setData({
				count: count,
				like: !this.properties.like
			})
			let behavior = this.properties.like ? 'like' : 'cancel'
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
