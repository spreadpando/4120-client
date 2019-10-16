const AFRAME = window.AFRAME
const THREE = AFRAME.THREE
AFRAME.registerComponent('product', {
    schema: {
        width: { type: 'number', default: 1 },
        height: { type: 'number', default: 1 },
        depth: { type: 'number', default: 1 },
        color: { type: 'color', default: '#C7B695' }
    },

    init: function () {
        var data = this.data
        var el = this.el

        el.addEventListener('click', e => {
            el.emit('sink', { product: 'blah' }, true);
        })
        el.addEventListener('mouseenter', e => {
            console.log('mouseentered')
        })
    }
})
