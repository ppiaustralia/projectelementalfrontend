import React from 'react';

// import Testimonial from './database/Testimony.json';
// import '../database/TestimonyPic';

// import TestimonyPreview from './components/TestimonyPreview';
import styles from './Testimony.module.css';

// import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import Carousel from 'react-bootstrap/Carousel';

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
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimony;
