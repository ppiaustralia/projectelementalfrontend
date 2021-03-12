import React, {Component} from 'react';
import {Carousel, Container, Row, Col, Image, CardGroup, Card, Button} from 'react-bootstrap/';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import '../home/Home.css';

import dummy1 from "../../assets/images/cat.jpg";
import dummy2 from "../../assets/images/cat2.jpg";
import dummy3 from "../../assets/images/cat3.jpg";

const StyledSection = styled.section`
margin: auto auto 0 auto;
width: 100%;

  .heading--main {
    text-align: left
    ;
  }
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  
  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
  }
  .double-column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 3;
  }
`;



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
   
];


export default class KabinetSinergi extends React.Component {
    render() {
        return(
            <div>
               
                <ImageGallery />
               
            </div>
        );
    }
}

export class ImageGallery extends Component {
    render() {
        return (
            <StyledSection className="About Us">
            <div class='wrapper'>
          <div class = 'row'>
            <div class = 'column'>

            </div>
            <div class = 'double-column'>
            <div className = "front-page">
                <div className = "mt-5">
                    <h3>Information Technology</h3>
                </div>
                <div className="img-gallery">
                    <Container>
                        <Row className="justify-content-md-center">
                                {source_arr.map((kabinet,i) => 
                                    <Col md={3}>
                                    <Image src={kabinet.img} className='d-block responsive-gallery img-fluid mx-4' roundedCircle/>
                                    <h5>{kabinet.name}</h5>
                                    </Col>
                                )}
                        </Row>
                    </Container>
                </div>
            </div>
            </div>
            </div>
            </div>
            </StyledSection>
        )
    }
}