const AFRAME = window.AFRAME
const THREE = AFRAME.THREE

AFRAME.registerComponent('cursor-listen', {
    init: function () {
        let timeouts = {}

        var lastIndex = -1
        this.el.addEventListener('mouseenter', e => {
            let distance = e.detail.intersection.distance
            if (this.el.getAttribute('product')) {
                let fuseTimeout = document
                    .querySelector('#cursor')
                    .getAttribute('cursor').fuseTimeout
                let count = fuseTimeout / 1000
                for (let i = count, j = 0; i >= -1; j++ , i--) {
                    timeouts[`${i}`] = setTimeout(() => {
                        if (i >= 0) {
                            document
                                .querySelector('#gaze-prompter')
                                .setAttribute(
                                    'text',
                                    `value: checking out in ${count}s; font: dejavu; align: center; width: 0.6;`
                                )
                            count--
                        } else {
                            for (let i in timeouts) {
                                clearTimeout(timeouts.i)
                            }
                            document
                                .querySelector('#gaze-prompter')
                                .setAttribute('text', `value:;`)
                        }
                    }, j * 1000)
                }
            }
        })

        this.el.addEventListener('mouseleave', e => {
            // if (document.querySelector('.pointer')) {
            //   document.querySelector('.pointer').remove()
            // }
            for (let i in timeouts) {
                clearTimeout(timeouts[i])
                console.log('done')
            }
            timeouts = {}
            document
                .querySelector('#gaze-prompter')
                .setAttribute(
                    'text',
                    `value:; font: dejavu; align: center;  width: 0.5;`
                )
        })
    }
})

// el.addEventListener('fusing', e => {
//   let fuseTimeout = document.querySelector('#cursor').getAttribute('cursor')
//     .fuseTimeout
//   let count = fuseTimeout / 1000
//   for (let i = count, j = 0; i >= -1; j++, i--) {
//     timeouts[`${i}`] = setTimeout(() => {
//       if (i >= 0) {
//         document
//           .querySelector('#gaze-prompter')
//           .setAttribute('text', `value:teleporting in ${count};font:mozillavr;`)
//         count--
//       } else {
//         for (let i in timeouts) {
//           clearTimeout(timeouts.i)
//         }
//         document.querySelector('#gaze-prompter').setAttribute('text', `value:;`)
//       }
//     }, j * 1000)
//   }
// })
// el.addEventListener('stateremoved', e => {
//   for (let i in timeouts) {
//     clearTimeout(timeouts.i)
//   }
//   console.log(timeouts)
//   document
//     .querySelector('#gaze-prompter')
//     .setAttribute('text', `value:;font:mozillavr;`)
// })
