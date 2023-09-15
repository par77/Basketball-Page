import React from 'react'

const Player = (props) => {
  return (
    <div className='player-main-container'>
        <div className="player-img">
          <img src={props.img} />
        </div>
        <div className="player-info">{props.info}</div>
    </div>
  )
}

export default Player