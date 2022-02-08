import React from "react"

import { image_data } from "../database_home"
import styles from "./ImageSlider.module.css"

import { Carousel } from "react-bootstrap/"
import { useSelector } from "react-redux"
import Loading from "../../../components/Loading"

export default function ImageSlider() {
    const slideshow = useSelector((state) => state.slideshow.slideshow)
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
                    {slideshow ? (
                        slideshow.map((item) => (
                            <Carousel.Item>
                                <div className={styles.imageContainer}>
                                    <img
                                        class={styles.carouselImage}
                                        src={`${item.image}`}
                                        alt="missing"
                                    />
                                </div>
                            </Carousel.Item>
                        ))
                    ) : (
                        <Loading />
                    )}
                </Carousel>
            </div>
        </div>
    )
}
