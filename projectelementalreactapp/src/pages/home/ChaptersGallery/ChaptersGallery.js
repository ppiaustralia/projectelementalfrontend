import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./ChaptersGallery.module.css"
import axios from "axios"

import { Container, Row, Col, Image } from "react-bootstrap/"

export default function ChaptersGallery() {
    const [branchList, setBranchList] = useState([])
    const chapterBaseLink = "https://chapterslogo.s3.us-east-2.amazonaws.com/"

    useEffect(() => {
        axios
            .get(`https://ppia-backend.herokuapp.com/user/ppia/`)
            .then((data) => {
                setBranchList(
                    data.data.filter((eachPPIAObj) => eachPPIAObj.level === 1)
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }, [branchList])
    return (
        <div className={styles["front-page"]}>
            <div className="mt-5">
                <h4>Chapters</h4>
            </div>

            <div className={styles["img-gallery"]}>
                <Container>
                    <Row className="justify-content-md-center">
                        {branchList.map((branch, i) => {
                            console.log(branch)
                            return (
                                <Col md="auto">
                                    <Link to={`chapter/${branch.state}`}>
                                        <Image
                                            src={`${chapterBaseLink}${branch.image}`}
                                            className={`d-block ${styles["responsive-gallery"]} img-fluid mx-4`}
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
