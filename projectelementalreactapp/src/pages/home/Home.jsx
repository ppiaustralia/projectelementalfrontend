import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Carousel, Container, Row, Col, Image, Card, Button, CardDeck} from 'react-bootstrap/';
import ReactDOM from 'react-dom';

import {image_arr, source_arr, update_arr} from './database'

import "./Home.css";

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <ImageSlider />
                <ImageGallery />
                <NewsCards />
            </div>
        );
    }
}

export class ImageSlider extends Component {
    render() {
        return (
                <div className = "background">
                    <Carousel>
                        {image_arr.map((image,i) => 
                            <Carousel.Item>
                                {image}
                            </Carousel.Item>
                        )}
                    </Carousel>
                </div>
        );
    }
}

export class ImageGallery extends Component {
    render() {
        return (
            <div className = "front-page">
                <div className = "mt-5">
                    <h3>Chapters</h3>
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
}

export class NewsCards extends Component {
    render() {
        return (
            <div className = "background front-page news">
                <div className = "news-title">
                    <h3>Latest Updates</h3>
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
        );
    }
}
