// components/classic/music/index.js
import { classicBehavior } from '../classic-beh.js'

Component({
	/**
	 * 组件的属性列表
	 */
	behaviors: [classicBehavior],

	/**
	 * 外部属性
	 */
	properties: {
		src: String,
		title: String
	},

	/**
	 * 组件的初始数据
	 */
	data: {}
})
