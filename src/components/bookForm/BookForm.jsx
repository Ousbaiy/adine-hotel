import React, { useContext } from "react";
import "./style.scss";
import CheckIn from "../checkIn/CheckIn";
import CheckOut from "../checkOut/CheckOut";
import AdultsDropdown from "../adultsDropDown/AdultsDropdown";
import KidsDropdown from "../kidsDropdown/KidsDropdown";
import { RoomContext } from "../../context/RoomContext";

const BookForm = () => {
  const { handleClick } = useContext(RoomContext);
  return (
    <form>
      <CheckIn />
      <CheckOut />
      <AdultsDropdown />
      <KidsDropdown />
      <button
        onClick={(e) => handleClick(e)}
        type="submit"
        className="btn btn-primary"
      >
        Check now
      </button>
    </form>
  );
};

export default BookForm;
