import React, { useState, useEffect } from "react";
import "../../css/hero.css";
interface Image {
  url: string;
  heading: string;
  description: string;
}

const images: Image[] = [
  {
    url: "./images/p3.jpg",
    heading: "Practical action",
    description: "Ground experience",
  },
  {
    url: "./images/p1.jpg",
    heading: "Constant assistance",
    description: "Always guiding and instructing",
  },
  {
    url: "./images/p4.jpg",
    heading: "Learning application",
    description: "From theory to reality",
  },
];

const Hero: React.FC = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  let interval: ReturnType<typeof setTimeout>;

  useEffect(() => {
    interval = setTimeout(() => {
      scrollToNextImage();
    }, 3000);

    return () => {
      clearTimeout(interval);
    };
  }, [currentImageIdx]);

  const scrollToNextImage = () => {
    setCurrentImageIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const deltaX = endX - startX;
    const deltaY = endY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        clearInterval(interval);
        scrollToNextImage();
      }
    }
  };

  return (
    <section>
      <div className="hero-container container">
        <div className="hero__header">
          <picture className="logo-div">
            <img src="./images/logo.png" />
          </picture>
          <span className="btn btn--primary hero__span">NEW</span>
        </div>
        <div
          className="image-container"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`image-slide ${
                idx === currentImageIdx ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="image-content">
                <h2 className="image__title">{image.heading}</h2>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
