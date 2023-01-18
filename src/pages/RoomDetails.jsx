import React, { useContext } from "react";
import "./styles.scss";
import CheckIn from "../components/checkIn/CheckIn";
import CheckOut from "../components/checkOut/CheckOut";
import AdultsDropdown from "../components/adultsDropDown/AdultsDropdown";
import KidsDropdown from "../components/kidsDropdown/KidsDropdown";
import { RoomContext } from "../context/RoomContext";

import { useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

import ScrollToTop from "../components/ScrollToTop";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />
      <div className="room-details">
        <div className="overlay"></div>
        <h1>{name} Details</h1>
      </div>
      <div className="content container mx-auto">
        <div className="left">
          <h2 className="h2">{name}</h2>
          <p>{description}</p>
          <img src={imageLg} alt="room" />
          <div className="info">
            <h3 className="h3">Room Facilities</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              omnis a dignissimos doloribus nisi. Voluptatem?
            </p>
            {/* grid */}
            <div className="grid">
              {facilities.map((item, index) => {
                const { name, icon } = item;
                return (
                  <div className="box" key={index}>
                    <div className="icon">{icon}</div>
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="book-form">
            <h3 className="h3">Your Reservation</h3>
            <div className="inputs">
              <CheckIn />
            </div>
            <div className="inputs">
              <CheckOut />
            </div>
            <div className="inputs">
              <AdultsDropdown />
            </div>
            <div className="inputs">
              <KidsDropdown />
            </div>
            <button className="btn btn-lg btn-primary">
              book now for ${price}
            </button>
          </div>
          {/* rules  */}
          <div className="rules">
            <h3 className="h3">Hotel Rules</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              in, fuga qui consequuntur deserunt iusto!
            </p>
            <ul className="list">
              <li>
                <FaCheck />
                Check-in: 3:00 PM - 9:00 PM
              </li>
              <li>
                <FaCheck />
                Check-out: 10:30 AM
              </li>
              <li>
                <FaCheck />
                No Pets
              </li>
              <li>
                <FaCheck />
                No Smoking
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
