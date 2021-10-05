import React from "react";
import { Link } from "react-router-dom";
import { chapters_data } from "../database_home";
import styles from "./ChaptersGallery.module.css";

import {
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap/";

export default function ChaptersGallery() {
  return (

    <div className={styles["front-page"]}>

      <div className="mt-5">
        <h4>Chapters</h4>
      </div>

      <div className={styles["img-gallery"]}>
        <Container>
          <Row className="justify-content-md-center">
            {chapters_data.map((chapter, i) => (

              <Col md="auto">
                <Link to={chapter.path}>
                  <Image
                    src={chapter.img}
                    className={`d-block ${styles["responsive-gallery"]} img-fluid mx-4`}
                    roundedCircle
                  />
                </Link>
                <h5>{chapter.title}</h5>
              </Col>

            ))}
          </Row>
        </Container>
      </div>

    </div>
  )
}
