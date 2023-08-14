import React, { useState, useEffect } from "react";
import "../../css/hero.css";
interface Image {
  url: string;
  heading: string;
  description: string;
}

const images: Image[] = [
  {
    url: "./images/team1.jpg",
    heading: "Conference meeting",
    description: "Description 1",
  },
  {
    url: "./images/team.jpg",
    heading: "Regional reunion",
    description: "Description 2",
  },
];

const Hero: React.FC = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
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

  const handleScroll = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    clearInterval(interval);
    scrollToNextImage();
  };

  return (
    <section>
      <div className="hero-container container">
        <picture className="logo-div">
          <img src="./images/logo.png" />
        </picture>
        <div className="image-container" onTouchMove={handleScroll}>
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
