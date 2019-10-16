import React from 'react'
import styled from 'styled-components'
import up from '../../assets/up.svg'
import right from '../../assets/right.svg'
import down from '../../assets/down.svg'
import left from '../../assets/left.svg'

export default function MobileCtl () {
  const Ctl = styled.div`
  position: absolute;
  bottom:30vh;
  right:1vw;
  margin:1em;
  width:11vw;
  height:14vw;
  display: inline-grid;
  grid-template-rows: 33.3% 33.3% 33.3%;
  grid-template-columns: 33.3% 33.3% 33.3%;
  justify-items:center;
    `
  const VtlBtn = styled.img`
    height:2em;
    opacity:0.8;
    -webkit-user-select:none;
    -webkit-touch-callout:none;
    `
  function handleTouchStart (e) {
    const uRig = document.querySelector('#user-rig')
    uRig.emit('starttouch', { id: e.target.id })
  }

  function handleTouchCancel (e) {
    const uRig = document.querySelector('#user-rig')
    uRig.emit('canceltouch', { id: e.target.id })
  }

  return (
    <Ctl className='arrow-ctl'>
      <VtlBtn
        onTouchStart={e => handleTouchStart(e)}
        onTouchEnd={e => handleTouchCancel(e)}
        onContextMenu={(e) => e.preventDefault()}
        id='up-ctl'
        src={up}
        alt='up arrow'
        style={{ gridRow: '1/1', gridColumn: '2/2', bottom: 0 }}
      />
      <VtlBtn
        onTouchStart={e => handleTouchStart(e)}
        onTouchEnd={e => handleTouchCancel(e)}
        onContextMenu={(e) => e.preventDefault()}
        id='down-ctl'
        src={down}
        alt='down arrow'
        style={{ gridRow: '3/3', gridColumn: '2/2', top: 0 }}
      />
    </Ctl>
  )
}
