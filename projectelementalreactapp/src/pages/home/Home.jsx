import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ReactDOM from 'react-dom';

import "./Home.css";

import dummy1 from "../../assets/images/cat.jpg";
import dummy2 from "../../assets/images/cat2.jpg";
import dummy3 from "../../assets/images/cat3.jpg";

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <ImageSlider />
                <ImageGallery />
                <h3>Latest Update</h3>
            </div>
        );
    }
}

export class ImageSlider extends Component {
    render() {
        return (
                <div className = "background">
                    <Carousel>
                        {/*
                        image needs a class="d-block mx-auto img-fluid w-1439" to fit within
                        the carousel 
                        */}
                        <Carousel.Item>
                            <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img class="d-block mx-auto responsive-carousel img-fluid" src={dummy3}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
        );
    }
}

export class ImageGallery extends Component {
    render() {
        return (
            <div className = "img-gallery">
                <div className = "mt-5">
                    <h2>Chapters</h2>
                </div>
                <Container>
                    <Row className = "mb-4">
                        <Col>
                            <Image src={dummy1} className='d-block mx-auto responsive-gallery img-fluid' roundedCircle/>
                        </Col>
                        <Col>
                            <Image src={dummy2} className='d-block mx-auto responsive-gallery img-fluid' roundedCircle/>
                        </Col>
                        <Col>
                            <Image src={dummy3} className='d-block mx-auto responsive-gallery img-fluid' roundedCircle/>
                        </Col>
                        <Col>
                            <Image src={dummy1} className='d-block mx-auto responsive-gallery img-fluid' roundedCircle/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Image src={dummy1} className='d-block mx-auto responsive-gallery img-fluid' roundedCircle/>
                        </Col>
                        <Col>
                            <Image src={dummy2} className='d-block mx-auto responsive-gallery img-fluid' roundedCircle/>
                        </Col>
                        <Col>
                            <Image src={dummy3} className='d-block mx-auto responsive-gallery img-fluid' roundedCircle/>
                        </Col>
                        <Col>
                            <Image src={dummy1} className='d-block mx-auto responsive-gallery img-fluid' roundedCircle/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}