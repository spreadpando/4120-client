const AFRAME = window.AFRAME

AFRAME.registerComponent('pitch-yaw', {
    init: function () {
        this.left = true
    },
    tick: function () {
        if (this.left) {
            this.el.object3D.rotation.x -= .005
        } else {
            this.el.object3D.rotation.x += .005
        }
        if (this.el.object3D.rotation.x < -0.1) {
            this.left = false
        }
        if (this.el.object3D.rotation.x > 0.1) {
            this.left = true
        }
    }
})