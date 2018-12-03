Component({
  options: {
    /* 在组件定义时的选项中启用多 slot 支持 */
    multipleSlots: true
  },
  /* 组件外部传入的样式  */
  externalClasses: ['tag-class'],
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
