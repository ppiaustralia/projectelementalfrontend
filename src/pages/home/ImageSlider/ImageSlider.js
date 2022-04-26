import React from 'react';

import { image_data } from '../database_home';
import styles from './ImageSlider.module.css';

import { Carousel } from 'react-bootstrap/';
import { useSelector } from 'react-redux';
import Loading from '../../../components/Loading';
import { setChapters } from '../../../store/chapters/chaptersSlice';
import { Link } from 'react-router-dom';

import ImageHeader from '../../../assets/images/2.jpg';
export default function ImageSlider() {
  const slideshow = useSelector((state) => state.slideshow.slideshow);
  return (
    <div className={styles.container}>
      <span className={styles.backgroundImage} />
      <div className={styles.welcome}>
        <h2>PPI-Australia (PPIA)</h2>
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
      <div>
        <img src={ImageHeader} alt="ppia" class={styles.imageHeader} />
      </div>

      {/* <div className={styles.containerCarousel}>
        <Carousel className={styles.carousel}>
          {slideshow ? (
            slideshow.map((item) => (
              <Carousel.Item>
                <div className={styles.imageContainer}>
                  <img
                    class={styles.carouselImage}
                    src={`${item.image}`}
                    alt="Fetching Carousel Images"
                  />
                </div>
              </Carousel.Item>
            ))
          ) : (
            <Loading />
          )}
        </Carousel>
      </div> */}
    </div>
  );
}
