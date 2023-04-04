import React, { useState, useEffect } from 'react';

const SlideShow = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index => (index + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div>
      <img src={images[index]} alt="Slideshow" width={'100%'} />
    </div>
  );
};

export default SlideShow;
