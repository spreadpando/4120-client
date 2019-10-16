const AFRAME = window.AFRAME
const THREE = AFRAME.THREE
AFRAME.registerComponent('car-gltf', {
    schema: {
        gltf: { type: 'model' }
    },
    init: function () {
        var dracoLoader = new THREE.DRACOLoader();
        this.model = null;
        this.loader = new THREE.GLTFLoader();
        if (dracoLoader) {
            this.loader.setDRACOLoader(dracoLoader);
        }
    },

    update: function () {
        var self = this;
        var el = this.el;
        var src = this.data.gltf;

        if (!src) { return; }

        this.remove();

        this.loader.load(src, function gltfLoaded(gltfModel) {
            self.model = gltfModel.scene || gltfModel.scenes[0];
            self.model.animations = gltfModel.animations;
            el.setObject3D('mesh', self.model);
            const background = new THREE.CubeTextureLoader()
                .setPath('./')
                .load(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'])
            let material = el.components.material
            self.model.traverse((node) => {
                if (node.isMesh) {
                    // node.material = material.material
                    node.material.envMap = background
                    // node.material.metalness = 1
                    // node.material.roughness = 0.02

                }
            });
            el.emit('model-loaded', { format: 'gltf', model: self.model });

        }, undefined /* onProgress */, function gltfFailed(error) {
            var message = (error && error.message) ? error.message : 'Failed to load glTF model';
            console.log(message);
            el.emit('model-error', { format: 'gltf', src: src });
        });


    },

    remove: function () {
        if (!this.model) { return; }
        this.el.removeObject3D('mesh');
    }
});