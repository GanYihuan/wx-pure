Component({
  properties: {
    book: Object,
    showLike: {
      type: Boolean,
      value: true
    }
  },
  data: {
    title: String,
    author: String,
    img: String
  },
  methods: {
    onTap: function(event) {
      const bid = this.properties.book.id
      this.triggerEvent(
        'booktap',
        {
          bid: this.properties.book.id
        },
        {}
      )
      wx.navigateTo({
        url: `/pages/book-detail/book-detail?bid=${bid}`
      })
    }
  }
})
