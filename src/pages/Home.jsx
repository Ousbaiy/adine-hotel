import React, { useContext } from "react";
import Rooms from "../components/rooms/Rooms";
import BookForm from "../components/bookForm/BookForm";
import HeroSlider from "../components/heroSlider/HeroSlider";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="container mx-auto relative">
        <BookForm />
      </div>
      <Rooms />
    </>
  );
};

export default Home;
