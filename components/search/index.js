// import { HTTP } from '../../utils/http'
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
      observer: 'loadMore'
    }
  },
  data: {
    historyWords: [],
    hotKeys: [],
    q: '',
    /* 锁, 防止多次无用的加载 */
    loading: false,
    loadingCenter: false,
    // dataArray: [],
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
    loadMore: function() {
      if (!this.data.q) {
        return
      }
      if (this.data.loading) {
        return
      }
      let hasMore = this.hasMore()
      if (!hasMore) {
        return
      }
      if (this.hasMore()) {
        this.data.loading = true
        // const length = this.data.dataArray.length
        bookModel.search(this.getCurrentStart(), this.data.q).then(
          res => {
            // const tempArray = this.data.dataArray.concat(res.books)
            this.setMoreData(res.books)
            this.data.loading = false
          },
          () => {
            /* 断网后避免死锁 */
            this.data.loading = false
          }
        )
      }
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
      this.initPagination()
      this.triggerEvent('cancel', {}, {})
    },
    onDelete: function(event) {
      this.initPagination()
      this.setData({
        searching: false,
        q: ''
      })
    },
    onConfirm: function(event) {
      this.setData({
        searching: true,
        loadingCenter: true
      })
      // this.initPagination()
      const q = event.detail.value || event.detail.text
      bookModel.search(0, q).then(res => {
        this.setMoreData(res.books)
        this.setTotal(res.total)
        this.setData({
          // dataArray: res.books,
          loadingCenter: false,
          q
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
