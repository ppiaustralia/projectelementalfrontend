import React from "react";

import { image_data } from "../database_home";
import styles from "./ImageSlider.module.css";

import { Carousel } from "react-bootstrap/";

export default function ImageSlider() {
    return (

        <div className={styles.background}>

          <Carousel>
            {image_data.map(image => (
              <Carousel.Item>
                <img
                  class="d-block mx-auto responsive-carousel img-fluid"
                  src={image}
                  alt="missing"
                />
                ,
              </Carousel.Item>
            ))}
          </Carousel>

        </div>

    )
}