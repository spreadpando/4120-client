import ImprovedNoise from 'improved-noise'
const AFRAME = window.AFRAME
const THREE = AFRAME.THREE

AFRAME.registerGeometry('terrain', {
  schema: {
    width: { type: 'number', default: 200 },
    height: { type: 'number', default: 200 },
    resolution: { type: 'number', default: 500 }
  },

  init: function (data) {
    // var data = this.data

    const size = data.resolution * data.resolution

    const heights = new Uint8Array(size)

    const perlin = new ImprovedNoise()

    let quality = 1

    const z = Math.random() * 100
    for (let j = 0; j < 4; j++) {
      for (let i = 0; i < size; i++) {
        const x = i % data.resolution

        const y = ~~(i / data.resolution)
        heights[i] += Math.abs(
          perlin.noise(x / quality, y / quality, z) * quality * 1.2
        )
      }
      quality *= 5
    }

    const geometry = new THREE.PlaneBufferGeometry(
      data.height,
      data.width,
      data.resolution,
      data.resolution
    )
    geometry.rotateX(-Math.PI / 2)
    const vertices = geometry.attributes.position.array
    for (let i = 0, j = 0, l = vertices.length; i < l; i++ , j += 3) {
      vertices[j + 1] = heights[i] * 0.02
    }
    geometry.computeFaceNormals()
    geometry.computeVertexNormals()
    const bufferGeo = new THREE.Geometry().fromBufferGeometry(geometry)
    this.geometry = bufferGeo
  }
})
