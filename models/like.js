import { HTTP } from '../utils/http.js'

class LikeModel extends HTTP {
  constructor() {
    super()
  }
  /**
   * @param behavior {string} 状态
   * @param artID {Number} 电影 id 号
   * @param category {string} 状态码
   * @return: 
   */
  like(behavior, artID, category) {
    let url = behavior === 'like' ? 'like' : 'like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artID,
        type: category
      },
      success: data => {
        console.log(data)
      }
    })
  }
  getClassicLikeStatus(artID, category, success) {
    this.request({
      url: 'classic/' + category + '/' + artID + '/favor',
      success: success
    })
  }
}

export { LikeModel }
