import React, { useContext } from "react";
import { RoomContext } from "../../context/RoomContext";
import { Menu } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { kidsLis } from "../../data";
import "./style.scss";

const AdultsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext);
  return (
    <Menu as="div" className="select ">
      <Menu.Button>
        {kids === "0 Kids" ? "No Kids" : kids}
        <div className="icon">
          <BsChevronDown />
        </div>
      </Menu.Button>
      <Menu.Items as="ul" className="">
        {kidsLis.map((li, index) => (
          <Menu.Item onClick={() => setKids(li.name)} as="li" key={index}>
            {li.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
