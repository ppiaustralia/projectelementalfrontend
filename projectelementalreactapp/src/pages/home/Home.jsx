import React from 'react';
import {Link} from "react-router-dom";
import {Carousel, Container, Row, Col, Image, Card, Button, CardDeck} from 'react-bootstrap/';

import {image_arr, source_arr, update_arr} from './database_home';
// import Appdata from './database';

import "./Home.css";

export default function Home(props) {
    return (
        <div>
            <ImageSlider />
            <ImageGallery />
            <NewsCards />
            <BottomPanel />
        </div>
    )
}

function ImageSlider(props) {
    return(
        <div className = "background">
            <Carousel className="wrap">
                {image_arr.map((image,i) => 
                    <Carousel.Item>
                        {image}
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}

function ImageGallery(props) {
    return (
        <div className = "front-page">
            <div className = "mt-5">
                <h4>Chapters</h4>
            </div>
            <div className="img-gallery">
                <Container>
                    <Row className="justify-content-md-center">
                            {source_arr.map((chapter,i) => 
                                <Col md="auto">
                                    <Link to={chapter.path}>
                                        <Image src={chapter.img} className='d-block responsive-gallery img-fluid mx-4' roundedCircle/>
                                    </Link>
                                    <h5>{chapter.title}</h5>
                                </Col>
                            )}
                    </Row>
                </Container>
            </div>
        </div>
    )
}

function NewsCards(props) {
    return (
        <div className = "background front-page news">
            <div className = "news-title">
                <h4>Latest Updates</h4>
            </div>
            <div className = 'news-cards'>
                <CardDeck style={{display: 'flex', flexDirection: 'row'}}>
                    {update_arr.map((news,i) => 
                            <div>
                            <Card style={{ width: '18rem', flex: 1, maxWidth: '90%'}}>
                                <Link to={news.path}>
                                    <Card.Img variant = 'top' src = {news.img} className = "card-img"/>
                                </Link>
                                <Card.Body>
                                    <Card.Title>
                                        {news.title}
                                    </Card.Title>
                                    <Card.Subtitle>
                                        {news.date}
                                    </Card.Subtitle>
                                    <Card.Text>
                                        {news.desc}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                    )}
                </CardDeck>
            </div>
            <Link to="/blog">
                <Button variant = "news" style = {{width: "116px"}} >Read More</Button>
            </Link>
        </div>
    )
}

function BottomPanel(props) {
    return (
        <div className = "front-page bottompanel">
            UPCOMING EVENTS
        </div>
    )
}