import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../datepicker.scss";
import { BsCalendar } from "react-icons/bs";
import "./style.scss";

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false); //Date.now()

  return (
    <div className="date">
      <div className="calender">
        <BsCalendar />
      </div>
      <DatePicker
        selected={startDate}
        placeholderText="Check Out"
        onChange={(date) => setStartDate(date)}
      />
    </div>
  );
};

export default CheckIn;
