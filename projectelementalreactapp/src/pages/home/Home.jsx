import React, {Component} from 'react';
import {Carousel, Container, Row, Col, Image, CardGroup, Card, Button} from 'react-bootstrap/';
import ReactDOM from 'react-dom';

import "./Home.css";

import dummy1 from "../../assets/images/cat.jpg";
import dummy2 from "../../assets/images/cat2.jpg";
import dummy3 from "../../assets/images/cat3.jpg";

const image_arr = [
    <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy1}/>,
    <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy2}/>,
    <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy3}/>
];

const source_arr = [
    {
        img: dummy1,
        name: "cat1"
    },
    {
        img: dummy2,
        name: "cat2"
    },
    {
        img: dummy3,
        name: "cat3"
    },
    {
        img: dummy1,
        name: "cat1"
    },
    {
        img: dummy2,
        name: "cat2"
    },
    {
        img: dummy3,
        name: "cat3"
    },
    {
        img: dummy1,
        name: "cat1"
    },
    {
        img: dummy2,
        name: "cat2"
    }
];

const latest_updates =[
    {
        img: dummy1,
        title: "Cat picture 1",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        updated: 3
    },
    {
        img: dummy2,
        title: "Cat picture 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        updated: 5
    },
    {
        img: dummy3,
        title: "Cat picture 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        updated: 4
    }
]

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
                                    <Image src={chapter.img} className='d-block responsive-gallery img-fluid mx-4' roundedCircle/>
                                    <h5>{chapter.name}</h5>
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
                    <CardGroup>
                        {latest_updates.map((news,i) => 
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant = 'top' src = {news.img}/>
                                <Card.Body>
                                    <Card.Title>
                                        {news.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {news.desc}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className='text-muted'>Last updated {news.updated} mins ago</small>
                                </Card.Footer>
                            </Card>
                        )}
                    </CardGroup>
                </div>
                <Button variant = "news" >Read More</Button>
            </div>
        );
    }
}