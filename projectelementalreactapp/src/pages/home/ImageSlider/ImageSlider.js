import React from "react"

import { image_data } from "../database_home"
import styles from "./ImageSlider.module.css"

import { Carousel } from "react-bootstrap/"

export default function ImageSlider() {
    return (
        <div className={styles.container}>
            <div className={styles.welcome}>
                <h2>PPI Australia (PPIA)</h2>
                <p className={styles.welcomeSubtitle}>
                    Perhimpunan Pelajar Indonesia Australia (PPIA) or Indonesian
                    Students' Association of Australia. it has purpose to serve
                    Indonesian students across Australia
                </p>
            </div>
            <div className={styles.containerCarousel}>
                <Carousel className={styles.carousel}>
                    {image_data.map((image) => (
                        <Carousel.Item>
                            <div className={styles.imageContainer}>
                                <img
                                    class={styles.carouselImage}
                                    src={image}
                                    alt="missing"
                                />
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
