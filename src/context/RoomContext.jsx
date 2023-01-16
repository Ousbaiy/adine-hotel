import React, { createContext, useState } from 'react'
import { roomData } from "../data"

// create context
export const RoomConetxt = createContext()

const RoomProvider = ({children}) => {
  const [rooms, setRooms] = useState(roomData);

  return (
    <RoomConetxt.Provider value={{rooms}}>
      {children}
    </RoomConetxt.Provider>
  )
}

export default RoomProvider