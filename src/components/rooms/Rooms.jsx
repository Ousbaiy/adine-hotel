import React, { useContext } from 'react'
import { RoomConetxt } from '../../context/RoomContext';
import Room from "../room/Room"
import "./style.scss"

const Rooms = () => {
  const { rooms } = useContext(RoomConetxt);

  return (
    <section>
      <div className='container'>
        <div className='rooms'>
          {rooms.map((room) => {
            return <Room key={room.id} room={room} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Rooms