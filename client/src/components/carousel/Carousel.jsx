import React, { useState, useEffect } from 'react';
import "./Carousel.css"
import HandsImg from "../../assets/hands.jpg";
import Analisys from "../../assets/analisys.jpg";
import Money from "../../assets/money.jpg";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); 

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
    </div>
  );
};

const images = [
  HandsImg,
  Analisys,
  Money
];

const Caroussel = () => {
  return (
    <div className="app">
      <Carousel images={images} />
    </div>
  );
};

export default Caroussel;
