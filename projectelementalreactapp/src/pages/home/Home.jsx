import React, {Component} from 'react';
import {Carousel, Container, Row, Col, Image, CardGroup, Card} from 'react-bootstrap/';
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
    dummy1,
    dummy2,
    dummy3,
    dummy1,
    dummy2,
    dummy3,
    dummy1,
    dummy2,
    dummy3
];

const test = 2;

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
                                {source_arr.map((image,i) => 
                                    <Col md="auto">
                                    <Image src={image} className='d-block responsive-gallery img-fluid mx-4' roundedCircle/>
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
            <div className = "front-page">
                <div className = "mt-5 mb-2">
                    <h3>Latest Updates</h3>
                </div>
                <div className = 'news-cards'>
                    <CardGroup>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant = 'top' src = {dummy1}/>
                            <Card.Body>
                                <Card.Title>First Card</Card.Title>
                                <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant = 'top' src = {dummy2}/>
                            <Card.Body>
                                <Card.Title>Second Card</Card.Title>
                                <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant = 'top' src = {dummy3}/>
                            <Card.Body>
                                <Card.Title>Third Card</Card.Title>
                                <Card.Text>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        );
    }
}