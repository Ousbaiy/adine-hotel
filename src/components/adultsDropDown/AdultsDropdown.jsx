import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { adultsLis } from "../../data";
import "./style.scss";

const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(RoomContext);
  return (
    <Menu as="div" className="select ">
      <Menu.Button>
        {adults}
        <div className="icon">
          <BsChevronDown />
        </div>
      </Menu.Button>
      <Menu.Items as="ul" className="">
        {adultsLis.map((li, index) => (
          <Menu.Item onClick={() => setAdults(li.name)} as="li" key={index}>
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
