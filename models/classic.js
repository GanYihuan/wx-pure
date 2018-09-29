import { HTTP } from '../utils/http.js'
// import { ClassicStorage } from '../models/classic-storage.js'

class ClassicModel extends HTTP {
	prefix = 'classic'
	constructor() {
		super()
	}
	getLatest(sCallback) {
    /* async */ 
		this.request({
			url: 'classic/latest',
			success: data => {
				sCallback(data)
			}
		})
	}
}

export { ClassicModel }
