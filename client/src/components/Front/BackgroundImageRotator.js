// import React, { useEffect, useState } from 'react';

// const BackgroundImageRotator = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [
//     'url(https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?cs=srgb&dl=pexels-leah-kelley-185933.jpg&fm=jpg)',
//     'url(https://motif-blog-assets.motifphotos.com/motif-blog/wp-content/uploads/2019/01/photo-organization-1200x853.jpg?x98050)',
//     'url(https://lifeasahuman.com/files/2021/06/pexels-taryn-elliott-4340918.jpg)'
//     // Add more image URLs here
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, [images.length]);

//   const currentImageStyle = {
//     backgroundImage: images[currentImageIndex],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     width: '100%',
//     height: '100%',
//     transition: 'background-image 3s linear',
//   };

//   return <div style={currentImageStyle}></div>;
// };

// export default BackgroundImageRotator;


import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  backgroundImage: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 5s linear',
  },
});

const BackgroundImageRotator = () => {
  const classes = useStyles();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const backgroundImages = [
    'url(https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?cs=srgb&dl=pexels-leah-kelley-185933.jpg&fm=jpg)',
    'url(https://motif-blog-assets.motifphotos.com/motif-blog/wp-content/uploads/2019/01/photo-organization-1200x853.jpg?x98050)',
    'url(https://lifeasahuman.com/files/2021/06/pexels-taryn-elliott-4340918.jpg)'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
      setNextImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  return (
    <div>
      <div
        className={classes.backgroundImage}
        style={{
          backgroundImage: backgroundImages[currentImageIndex],
          opacity: isTransitioning ? 0 : 1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
        onTransitionEnd={handleTransitionEnd}
      />
      <div
        className={classes.backgroundImage}
        style={{

          backgroundImage: backgroundImages[nextImageIndex],
          opacity: isTransitioning ? 1 : 0,
        }}
      />
    </div>
  );
};

export default BackgroundImageRotator;
