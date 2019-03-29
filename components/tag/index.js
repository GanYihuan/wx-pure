Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
  },
  externalClasses: ['tag-class'], // 组件外部传入的样式
  properties: {
    text: String
  },
  methods: {
    onTap: function(event) {
      this.triggerEvent('tapping', {
        text: this.properties.text
      })
    }
  }
})
