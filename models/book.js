// import { HTTP } from '../utils/http.js'
import { HTTP } from '../utils/http-p.js'

class BookModel extends HTTP {
	constructor() {
		super()
	}

	getHotList(success) {
		/* http-p.js/request({}), 里面写了 {}, 导致能传递对象, (解构赋值) */
		// return this.request({
		// 	url: 'book/hot_list',
		// 	data: {
		// 		name: '1',
		// 		age: 18
		// 	},
		// 	method: 'POST'
		// })
		return this.request({ url: 'book/hot_list' })
	}
}

export { BookModel }
