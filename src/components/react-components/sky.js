import React from 'react'

export default function Sky() {
  return (
    <>
      <a-entity light='type: ambient; intensity: .7; color: #ffffff;' />

      <a-entity
        light='type: directional; color: #ffffff; intensity: 1; castShadow: true;shadowCameraLeft:-75; shadowCameraRight:75;'
        position='-2 1 5.5'
      />

      <a-sky src='#sky-sphere' material='fog:false' rotation='0 120 0' />
    </>
  )
}
