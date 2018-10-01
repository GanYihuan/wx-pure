Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		index: {
      type: Number,
      /* 数据改变时调用 observer */
			observer: function(newVal, oldVal, changedPath) {
				if (newVal < 10) {
          /* setData: 修改数据 index */
					this.setData({
						/* 不要修改本身 index, 容易无限循环 */
						_index: '0' + newVal
					})
				}
			}
		}
	},
	/**
	 * 组件的初始数据, data 的值也会被页面绑定, 但data的值不可以从组件外部设置
	 * 使用text组件会出现双文字的情况
	 */
	data: {
		months: [
			'一月',
			'二月',
			'三月',
			'四月',
			'五月',
			'六月',
			'七月',
			'八月',
			'九月',
			'十月',
			'十一月',
			'十二月'
		],
		year: Number,
		month: String,
		_index: String
	},
	ready: function() {
		let date = new Date()
		let month = date.getMonth()
		let year = date.getFullYear()
		this.setData({
			month: this.data.months[month],
			year: year
		})
	},
	/**
	 * 组件的方法列表
	 */
	methods: {}
})
