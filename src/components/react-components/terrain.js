import React from 'react'
export default function Terrain() {
  return (
    <a-entity
      id='terrain'
      geometry='primitive:terrain'
      material='color:#978982; emissive: #5c5c3d; emissiveIntensity: 1; blending: normal; roughness: 0.9; metalness: 0;src:#ground-texture; repeat:50 50'
      terrain='width:200; height:200; resolution: 500'
      dress-mesh='worldWidth:200;worldHeight:200;count:0; model: #cactus'
      shadow='receive:true; cast:true'
      position='1 -2 1'
      rotation='0 0 0'
    />
  )
}
