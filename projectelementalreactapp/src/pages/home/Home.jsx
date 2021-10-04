import React from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Card,
  Button,
  CardDeck,
} from "react-bootstrap/";

import { image_data, chapters_data, news_data } from "./database_home";
import "./Home.css";
import ImageSlider from "./ImageSlider/ImageSlider";

export default function Home() {
    return (
      <>

      {/* image_slider */}
      <ImageSlider />
        {/* <div className="background">
          <Carousel>
            {image_data.map((image) => (
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
        </div> */}


        {/* chapters_gallery */}
        <div className="front-page">
        <div className="mt-5">
          <h4>Chapters</h4>
        </div>
        <div className="img-gallery">
          <Container>
            <Row className="justify-content-md-center">
              {chapters_data.map((chapter, i) => (
                <Col md="auto">
                  <Link to={chapter.path}>
                    <Image
                      src={chapter.img}
                      className="d-block responsive-gallery img-fluid mx-4"
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

      {/* news_cards */}
      <div className="background front-page news">
        <div className="news-title">
          <h4>Latest Updates</h4>
        </div>
        <div className="news-cards">
          <CardDeck style={{ display: "flex", flexDirection: "row" }}>
            {news_data.map((news, i) => (
              <div>
                <Card style={{ width: "18rem", flex: 1, maxWidth: "90%" }}>
                  <Link to={news.path}>
                    <Card.Img
                      variant="top"
                      src={news.img}
                      className="card-img"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{news.title}</Card.Title>
                    <Card.Subtitle>{news.date}</Card.Subtitle>
                    <Card.Text>{news.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </CardDeck>
        </div>

        <Link to="/blog">
          <Button variant="news" style={{ width: "116px" }}>
            Read More
          </Button>
        </Link>
      </div>
      {/* bottom_panel */}
      <div className="front-page bottompanel">UPCOMING EVENTS</div>;
      </>
    );
}
