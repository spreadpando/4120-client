import React from 'react'

export default function UserRig() {

  return (
    <a-entity
      id="rig"
      movement-controls="controls: gamepad, keyboard, touch">
      <a-entity
        id='user-rig'
        camera='active:true'
        look-controls='enabled: true; hmdEnabled: true; pointerLockEnabled:true;'
        wasd-controls='enabled:true; adEnabled: true; wsEnabled: true; fly: false; acceleration: 265;'
        position='0 5 0'
        rotation='-15 0 0'
        mobile-controls
      >
        <a-entity
          id='gaze-prompter'
          position='0 -0.1 -1'
          text='value:; font: dejavu; align: center; width: 0.6;'
          visible='true'
        />
        <a-entity
          id='cursor'
          visible='true'
          raycaster='objects:.cursor-listen'
          cursor='fuse: true; fuseTimeout: 5000'
          position='0 0 -1'
          geometry='primitive: ring; radiusInner: 0.035; radiusOuter: 0.04'
          material='color:#ccc; shader: standard; emissive:#000000; emissiveIntesity: 1.5; blending: multiply;'
        />
        <a-entity id='car' pitch-yaw
          animation-mixer
          shadow='cast: true; receive: true'
          position='0 -1.5 -4'
          rotation='0 -90 -15'
          car-gltf='gltf:#car-model'
          scale='.005 .005 .005' >
          <a-entity position='-222 45 90' rotation='-15 90 -1' light="type: spot; angle: 15; intensity:35;  color: #cae8e1; penumbra:0.1"></a-entity>
          <a-entity position='-222 45 -90' rotation='-15 90 -1' light="type: spot; angle: 15; intensity:35;  color: #cae8e1; penumbra:0.1"></a-entity>
        </a-entity>
      </a-entity>
    </a-entity>
  )
}
