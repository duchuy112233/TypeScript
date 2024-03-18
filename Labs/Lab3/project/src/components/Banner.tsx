import React, { useState, useEffect } from 'react';

const images = [
  'https://www.sneakerbaas.com/cdn/shop/collections/Brand_banner_NIKE_462543bb-f65a-4fea-852a-60bf2015b8b9.jpg?v=1668086262',
  'https://th.bing.com/th/id/R.67913347a422173a4325d2ccbcf1eaf5?rik=qDIcagC9KZbBeA&pid=ImgRaw&r=0',
  'https://th.bing.com/th/id/OIP.YMrbO2XkzJGOmU6cbcE6_gHaDY?rs=1&pid=ImgDetMain',
  'https://i.pinimg.com/originals/bd/98/35/bd983558d61361e66f41c5b9c622ea99.jpg',
];

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const nextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  return (
    <div>
      <div className="slide relative">
        <img
          className="h-[400px] w-[1450px]"
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
        />

        <div className="btn-slide flex justify-between min-w-full absolute top-2/4">
          <div className="prev ml-4" onClick={prevSlide}>
            <i className="fa-solid fa-angle-left"></i>
          </div>

          <div className="next mr-4" onClick={nextSlide}>
            <i className="fa-solid fa-angle-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
