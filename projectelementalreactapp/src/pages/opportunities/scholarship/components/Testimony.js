import React from 'react';
import TestimonyDB from '../database/Testimony.json';

// import TestimonyPreview from './components/TestimonyPreview';
import styles from './Testimony.module.css';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import cat from './cat.jpg';

// import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function Testimony() {
  return (
    <div className={styles.testimony}>
      <div className={styles.descripiton}>
        <h2>
          <b>Testimonies</b>
        </h2>
        <p>
          Check out how some of our associates
          <br />
          got their scholarship
        </p>
      </div>

      <div className={styles.testimonyCarousel}>
        <Carousel>
          <div>
            <img src={cat} />
            <p className="legend">Cat 1</p>
          </div>
          <div>
            <img src={cat} />
            <p className="legend">Cat 2</p>
          </div>
          <div>
            <img src={cat} />
            <p className="legend">Cat 3</p>
          </div>
        </Carousel>
        {/* https://www.npmjs.com/package/react-responsive-carousel */}
      </div>
    </div>
  );
}

export default Testimony;
