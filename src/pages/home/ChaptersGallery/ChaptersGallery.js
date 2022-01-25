import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./ChaptersGallery.module.css"

import { Container, Row, Col, Image } from "react-bootstrap/"
import { useSelector } from "react-redux"

export default function ChaptersGallery() {
    const chapterBaseLink = "https://chapterslogo.s3.us-east-2.amazonaws.com/"
    const chapters = useSelector((state) => state.chapters.chapters)
    const branches = chapters.filter((eachData) => eachData.level === 1)
    return (
        <div className={styles["front-page"]}>
            <div className={styles.chaptersTitle}>
                <p>Chapters</p>
            </div>

            <div className={styles["img-gallery"]}>
                <Container>
                    <Row className="justify-content-md-center">
                        {branches.map((branch, i) => {
                            return (
                                <Col md="auto">
                                    <Link to={`chapter/${branch.state}`}>
                                        <Image
                                            src={`${chapterBaseLink}${branch.image}`}
                                            className={`d-block ${styles["responsive-gallery"]} img-fluid mx-4`}
                                            // roundedCircle
                                            style={{ objectFit: "contain" }}
                                        />
                                    </Link>
                                    <h5>{branch.title}</h5>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </div>
    )
}
