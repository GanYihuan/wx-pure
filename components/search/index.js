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
      if (this._isLocked()) {
        return
      }
      let hasMore = this.hasMore()
      if (!hasMore) {
        return
      }
      if (this.hasMore()) {
        this._locked()
        // const length = this.data.dataArray.length
        bookModel.search(this.getCurrentStart(), this.data.q).then(
          res => {
            // const tempArray = this.data.dataArray.concat(res.books)
            this.setMoreData(res.books)
            this._unLocked()
          },
          () => {
            /* 断网后避免死锁 */
            this._unLocked()
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

    _isLocked() {
      return this.data.loading ? true : false
    },
    _locked() {
      this.setData({
        loading: true
      })
    },
    _unLocked() {
      this.setData({
        loading: false
      })
    },
    _closeResult() {
      this.setData({
        searching: false,
        q: ''
      })
    },
    onCancel: function() {
      this.initPagination()
      this.triggerEvent('cancel', {}, {})
    },
    onDelete: function() {
      this.initPagination()
      this._closeResult()
    },
    onConfirm: function(event) {
      this._showResult()
      this._showLoadingCenter()
      /* event.detail.value: input 输入的值 */
      /* event.detail.text: 事件触发定义的值 */
      const q = event.detail.value || event.detail.text
      this.setData({
        q: q
      })
      bookModel.search(0, q).then(res => {
        this.setMoreData(res.books)
        this.setTotal(res.total)
        keyModel.addToHistory(q)
        this._hideLoadingCenter()
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
    },
    _showResult() {
      this.setData({
        searching: true
      })
    },
    _showLoadingCenter() {
      this.setData({
        loadingCenter: true
      })
    },
    _hideLoadingCenter() {
      this.setData({
        loadingCenter: false
      })
    }
  }
})
