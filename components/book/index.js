// components/book/index.js

Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		book: Object,
		showLike: {
			type: Boolean,
			value: true
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		title: String,
		author: String,
		img: String
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onTap: function(event) {
			this.triggerEvent(
				'booktap',
				{
					bid: this.properties.book.id
				},
				{}
			)
			wx.navigateTo({
				url: '../../pages/detail/detail?bid=' + this.properties.book.id
			})
		}
	}
})
