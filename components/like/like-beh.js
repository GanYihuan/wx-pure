import { HTTP } from '../../utils/http.js'

let likeBehavior = Behavior({
	properties: {
		like: Boolean,
		count: Number
	},
	data() {
		return {
			yes_url: '../images/like.png',
			no_url: '../images/like@dis.png'
		}
	},
	attached: function() {},
	methods: {
		onLike: function(event) {
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

export { likeBehavior }
