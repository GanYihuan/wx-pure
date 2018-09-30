// components/navi/navi.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		title: {
			type: String,
			value: '...'
		},
		latest: {
			type: Boolean,
			value: false,
			observer: function() {
				// console.log('111111')
				// this.setData({
				//   latest:this.properties.latest
				// })
			}
		},
		first: {
			type: Boolean,
			value: false,
			observer: function() {}
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		disLeftSrc: 'images/triangle.dis@left.png',
		highLeftSrc: 'images/triangle@left.png'
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		onLeft: function() {
			if (!this.properties.latest) {
        /* 触发自定义事件 */
				this.triggerEvent('left', {}, {})
			}
		},
		onRight: function() {
			if (!this.properties.first) {
        /* 触发自定义事件 */
				this.triggerEvent('right', {}, {})
			}
		}
	}
})
