import React, { useEffect, useState } from 'react';

const SlideShow = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % props.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={props.images[index]} alt="Slideshow" width={'100%'} />
    </div>
  );
};

export default SlideShow;
