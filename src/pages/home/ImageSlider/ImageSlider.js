import React from 'react';

import styles from './ImageSlider.module.css';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ImageHeader from '../../../assets/images/2.jpg';
export default function ImageSlider() {
  const slideshow = useSelector((state) => state.slideshow.slideshow);
  return (
    // <div className="flex min-h-[50vh] relative z-[5] overflow-hidden p-[2em]">
    <div className={styles.container}>
      <span className={styles.backgroundImage} />
      <div className="flex flex-col text-lg p-2 px-4 items-center">
        <h2 className="text-5xl text-red-600 mb-2">PPI-Australia (PPIA)</h2>
        <p className={styles.welcomeSubtitle}>
          Perhimpunan Pelajar Indonesia Australia (PPIA) or Indonesian Students'
          Association of Australia. it has purpose to serve Indonesian students
          across Australia
        </p>
        <div className={styles.buttons}>
          <Link to="about/" className={styles.findOut}>
            <span>Learn More</span>
          </Link>
          <a
            href="https://www.ppi-australia.org/kipi-2022/"
            className={styles.contactUs}
          >
            <span>KIPI 2022</span>
          </a>
        </div>
      </div>
      <div className=''>
        <img src={ImageHeader} alt="Synergy for Indonesia image" className='w-full h-full object-contain' />
      </div>

    </div>
  );
}
