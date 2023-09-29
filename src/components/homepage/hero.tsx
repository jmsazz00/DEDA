import React, { useState, useEffect } from "react";
import images from "../../data/hero-imgs";
import "../../css/hero.css";

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
      if (Math.abs(deltaX) > 0) {
        clearInterval(interval);
        scrollToNextImage();
      }
    }
  };

  return (
    <section className="hero-block">
      <div className="hero-container">
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
