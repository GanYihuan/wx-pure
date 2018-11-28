Component({
  options: {
    /* 在组件定义时的选项中启用多 slot 支持 */
    multipleSlots: true
  },
  externalClasses: ['tag-class'],
  /**
   * 组件的属性列表
   */
  properties: {
    text: String
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function(event) {
      this.triggerEvent('tapping', {
        text: this.properties.text
      })
    }
  }
})
