import React from 'react';
import classes from './Preloader.module.css';
import preloaderGif from '../../../assets/images/preloader.gif';

const Preloader: React.FC = () => {
  return (
    <div className={classes.preloader__wrapper}>
      <img src={preloaderGif} alt="preloader" />
    </div>
  );
};

export default Preloader;
