import React from 'react';

// import Testimonial from './database/Testimony.json';
// import '../database/TestimonyPic';

// import TestimonyPreview from './components/TestimonyPreview';
import styles from './Testimony.module.css';

// import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';

function Testimony() {
  return (
    <div className={styles.testimony}>
      <h2>
        <b>Testimonies</b>
      </h2>
      <p>
        Check out how some of our associates
        <br />
        got their scholarship
      </p>
      <div className={styles.testimony__carousel}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimony;
