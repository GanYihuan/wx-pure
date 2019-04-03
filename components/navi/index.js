Component({
  properties: {
    title: {
      type: String,
      value: '...'
    },
    latest: { // 最后一期期刊
      type: Boolean,
      value: false,
      observer: function() {}
    },
    first: { // 第一期期刊
      type: Boolean,
      value: false,
      observer: function() {}
    }
  },
  data: {
    disLeftSrc: 'images/triangle.dis@left.png',
    highLeftSrc: 'images/triangle@left.png',
    disRightSrc: 'images/triangle.dis@right.png',
    highRightSrc: 'images/triangle@right.png'
  },
  methods: {
    onLeft: function() {
      if (!this.properties.latest) {
        this.triggerEvent('left', {}, {})
      }
    },
    onRight: function() {
      if (!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
