import { classicBehavior } from '../classic-beh.js'

let mMgr = wx.getBackgroundAudioManager()

Component({
	/**
	 * 组件的属性列表
	 */
	behaviors: [classicBehavior],
	/**
	 * 外部属性
	 */
	properties: {
		src: String,
		title: String
	},
	/**
	 * 组件的初始数据
	 */
	data: {
		playing: false,
		waittingUrl: 'images/player@waitting.png',
		playingUrl: 'images/player@playing.png'
  },
  /**
   * 微信生命周期, 组件进入界面节点树时执行
   */
	attached: function() {
		this._recoverPlaying()
		this._monitorSwitch()
  },
  /**
   * 微信生命周期, 组件退出界面节点树时执行
   */
	/* hidden 不会触发完整生命周期, 适用于频繁切换 */
	/* wx:if 会触发完整生命周期, 不大可能改变 */
	// detached: function() {
	// 	wx.pauseBackgroundAudio()
	// },
	/**
	 * 组件的方法列表
	 */
	methods: {
		onPlay: function(event) {
			if (!this.data.playing) {
				this.setData({
					playing: true
        })
        /* 有歌曲的前提下 */
				if (mMgr.src === this.properties.src) {
					mMgr.play()
				} else {
					mMgr.src = this.properties.src
				}
				mMgr.title = this.properties.title
			} else {
				this.setData({
					playing: false
				})
				mMgr.pause()
			}
		},
		_recoverPlaying: function() {
			if (mMgr.paused) {
				this.setData({
					playing: false
				})
				return
			}
			if (mMgr.src === this.properties.src) {
				if (!mMgr.paused) {
					this.setData({
						playing: true
					})
				}
			}
		},
		_monitorSwitch: function() {
			mMgr.onPlay(() => {
				this._recoverPlaying()
			})
			mMgr.onPause(() => {
				this._recoverPlaying()
			})
			mMgr.onStop(() => {
				this._recoverPlaying()
			})
			mMgr.onEnded(() => {
				this._recoverPlaying()
			})
		}
	}
})
