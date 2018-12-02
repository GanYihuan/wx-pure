Component({
  properties: {
    title: {
      type: String,
      value: '...'
    },
    latest: {
      type: Boolean,
      value: false,
      observer: function() {}
    },
    first: {
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
