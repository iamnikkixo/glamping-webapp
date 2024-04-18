import React, { useState } from 'react';
import { activities } from '../../constants';

const imagesLeft = [0, 3, 6];
const imagesRightTop = [1, 4, 7];
const imagesRightBottom = [2, 5, 8];

const ActivitiesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = imagesLeft.length;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="flex flex-row">
      <button
        onClick={prevImage}
        className="text-lg md:text-2xl lg:text-3xl pr-6 lg:pr-8"
      >
        <i className="fa-solid fa-chevron-left" />
      </button>
      <div className="flex flex-grow flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 h-[500px] md:h-[650px] lg:h-[800px]">
        <div className="flex-1 flex-col relative">
          {imagesLeft.map((index, i) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={activities[index].image}
                className="h-full w-full rounded-2xl object-cover"
              />
              <p className="activity-card">{activities[index].name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-row lg:flex-col gap-4 md:gap-6 lg:gap-8 ">
          <div className="flex-1 relative">
            {imagesRightTop.map((index, i) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={activities[index].image}
                  className="h-full w-full rounded-2xl object-cover"
                />
                <p className="activity-card">{activities[index].name}</p>
              </div>
            ))}
          </div>
          <div className="flex-1 relative">
            {imagesRightBottom.map((index, i) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={activities[index].image}
                  className="h-full w-full rounded-2xl object-cover"
                />
                <p className="activity-card">{activities[index].name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={nextImage}
        className="text-lg md:text-2xl lg:text-3xl pl-6 lg:pl-8"
      >
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
};

export default ActivitiesCarousel;
