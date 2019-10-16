const AFRAME = window.AFRAME
const THREE = AFRAME.THREE

AFRAME.registerComponent('mobile-controls', {
  init: function () {
    const el = this.el
    this.touched = false
    this.forward = true
    el.addEventListener('starttouch', e => {
      this.touched = true
      e.detail.id === 'up-ctl' ? this.forward = true : this.forward = this.forward
      e.detail.id === 'down-ctl' ? this.forward = false : this.forward = this.forward
    })
    el.addEventListener('canceltouch', e => {
      this.touched = false
    })
  },
  tick: function () {
    if (this.touched) {
      const el = this.el
      const angle = el.getAttribute('rotation')
      const x = 0.03 * Math.cos(angle.y * Math.PI / 180)
      const y = 0.03 * Math.sin(angle.y * Math.PI / 180)
      const pos = el.getAttribute('position')

      switch (this.forward) {
        case true:
          pos.x -= y
          pos.z -= x
          el.setAttribute('position', pos)

          break
        case false:
          pos.x += y
          pos.z += x
          el.setAttribute('position', pos)

          break
        default:
          break
      }
    }
  }
})
