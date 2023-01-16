import "./style.scss";
import React, { useEffect, useState } from "react";
import LogoWhite from "../../assets/img/logo-white.svg";
import LogoDark from "../../assets/img/logo-dark.svg";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    // <header className={`${header ? 'active' : null}`}>
    <header className={`${header ? "active" : ""}`}>
      <div className="container mx-auto">
        <a href="/">
          {header ? (
            <img src={LogoDark} alt="dark logo" />
          ) : (
            <img src={LogoWhite} alt="white logo" />
          )}
        </a>
        <nav className={`${header ? "active" : ""} `}>
        <a href="/home">
          Home
        </a>
        <a href="/rooms">
          Rooms
        </a>
        <a href="/restaurant">
          Restaurant
        </a>
        <a href="/spa">
          Spa
        </a>
      </nav>
      </div>
    </header>
  );
};

export default Header;
