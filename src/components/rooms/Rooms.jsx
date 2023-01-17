import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import Room from "../room/Room";
import { SpinnerDotted } from "spinners-react";
import "./style.scss";

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);

  return (
    <section>
      {loading && (
        <div className="loader">
          <SpinnerDotted color="white"/>
        </div>
      )}
      <div className="container">
        <div className="rooms">
          {rooms.map((room) => {
            return <Room key={room.id} room={room} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
