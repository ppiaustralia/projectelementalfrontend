import React, { Component } from "react"
import {
    Carousel,
    Container,
    Row,
    Col,
    Image,
    CardGroup,
    Card,
    Button,
} from "react-bootstrap/"
import ReactDOM from "react-dom"
import styles from "./KabinetSinergi.module.css"

import "../home/Home.css"

import dummy1 from "../../assets/images/cat.jpg"
import dummy2 from "../../assets/images/cat2.jpg"
import dummy3 from "../../assets/images/cat3.jpg"

const image_arr = [
    <img
        className="d-block mx-auto responsive-carousel img-fluid"
        src={dummy1}
    />,
    <img
        className="d-block mx-auto responsive-carousel img-fluid"
        src={dummy2}
    />,
    <img
        className="d-block mx-auto responsive-carousel img-fluid"
        src={dummy3}
    />,
]

const source_arr = [
    {
        img: dummy1,
        name: "cat1",
    },
    {
        img: dummy2,
        name: "cat2",
    },
    {
        img: dummy3,
        name: "cat3",
    },
    {
        img: dummy1,
        name: "cat1",
    },
]

export default function KabinetSinergi() {
    return (
        <div>
            <ImageGallery />
        </div>
    )
}

export function ImageGallery() {
    return (
        <div className={styles["main-section"]}>
            <div className={styles["wrapper"]}>
                <div className={styles["row"]}>
                    <div className={styles["column"]}></div>
                    <div className={styles["double-column"]}>
                        <div className={styles["front-page"]}>
                            <div className={styles["mt-5"]}>
                                <h3>Information Technology</h3>
                            </div>
                            <div className={styles["img-gallery"]}>
                                <Container>
                                    <Row className={styles["-center"]}>
                                        {source_arr.map((kabinet, i) => (
                                            <Col md={3}>
                                                <Image
                                                    src={kabinet.img}
                                                    className={`d-block responsive-gallery img-fluid mx-4`}
                                                    roundedCircle
                                                />
                                                <h5>{kabinet.name}</h5>
                                            </Col>
                                        ))}
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
