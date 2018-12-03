let paginationBev = Behavior({
  properties: {},
  data: {
    count: 20,
    empty: false,
    dataArray: [],
    total: null,
    noneResult: false
  },
  methods: {
    setMoreData: function(dataArray) {
      if (dataArray == false) {
        this.data.ending = true
        if (this.data.dataArray === false) {
          this.setData({
            empty: true
          })
        }
      }
      let temp = this.data.dataArray.concat(dataArray)
      this.data.start += this.data.count
      this.setData({
        dataArray: temp
      })
      return true
    },
    setTotal(total) {
      this.data.total = total
      if (total == 0) {
        this.setData({
          noneResult: true
        })
      }
    },
    hasMore: function() {
      if (this.data.dataArray.length >= this.data.total) {
        return false
      } else {
        return true
      }
    },
    getCurrentStart: function() {
      return this.data.dataArray.length
    },
    initPagination: function() {
      this.data.total = null
      this.setData({
        dataArray: [],
        noneResult: false
      })
    }
  }
})

export { paginationBev }
