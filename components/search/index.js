// import { HTTP } from '../../utils/http-p'
import { KeywordModel } from '../../models/keyword'
import { BookModel } from '../../models/book'
import { paginationBev } from '../behaviors/pagination.js'

// let http = new HTTP()
const keyModel = new KeywordModel()
const bookModel = new BookModel()

Component({
  behaviors: [paginationBev],
  properties: {
    more: {
      type: String,
      observer: '_loadMore'
    }
  },
  data: {
    historyWords: [],
    hotKeys: [],
    q: '',
    loading: false,
    loadingCenter: false,
    dataArray: [],
    searching: false
  },
  /* 组件初始化调用 */
  attached: function() {
    this.setData({
      historyWords: keyModel.getHistory()
    })
    keyModel.getHot().then(res => {
      this.setData({
        hotKeys: res.hot
      })
    })
  },
  methods: {
    _loadMore: function() {
      if (!this.data.q) {
        return
      }
      let hasMore = this.hasMore()
      if (!hasMore) {
        return
      }
      this.setData({
        loading: true
      })
      // bookModal.search(length, this.data.q)
      // .then(res => {
      // })
      // http.request({
      //   url: 'book/search?summary=1',
      //   data: {
      //     q: this.data.q,
      //     start: this.getCurrentStart()
      //   },
      //   success: data => {
      //     this.setMoreData(data.books)
      //     this.setData({
      //       loading: false
      //     })
      //   }
      // })
    },
    onCancel: function(event) {
      this.triggerEvent('cancel', {}, {})
    },
    onDelete: function(event) {
      this.setData({
        searching: false,
        empty: false,
        q: ''
      })
    },
    onConfirm: function(event) {
      this.setData({
        searching: true,
        loadingCenter: true
      })
      this.initPagination()
      const q = event.detail.value || event.detail.text
      bookModel.search(0, q).then(res => {
        this.setData({
          dataArray: res.books,
          loadingCenter: false
        })
        keyModel.addToHistory(q)
      })
      // http.request({
      //   url: 'book/search?summary=1',
      //   data: {
      //     q: q,
      //     start: this.getCurrentStart()
      //   },
      //   success: data => {
      //     if (!(data.books == false)) {
      //       keyModel.addToHistory(q)
      //     }
      //     this.setMoreData(data.books)
      //     this.setData({
      //       q: q,
      //       loadingCenter: false
      //     })
      //   }
      // })
    }
  }
})
