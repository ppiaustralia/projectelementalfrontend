import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
                <h3>Chapters</h3>
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
                            <img class="d-block mx-auto responsive img-fluid" src={dummy1}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img class="d-block mx-auto responsive img-fluid" src={dummy2}/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img class="d-block mx-auto responsive img-fluid" src={dummy3}/>
                        </Carousel.Item>
                    </Carousel>
                </div>
        );
    }
}