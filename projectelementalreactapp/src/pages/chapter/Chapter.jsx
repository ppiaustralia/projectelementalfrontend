import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Chapter.css'
// picture gallery
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// pictures 
import logo1 from "../../assets/images/PPIA.jpg";
import logo2 from "../../assets/images/PPIA.jpg";
import logo3 from "../../assets/images/PPIA.jpg";

// main component to call all other components

export default class Chapter extends React.Component {

    render() {
        return (
            <div>
                <PPIA />
            </div>
        );
    }
}

// Constructor 
export class Skeleton extends React.Component {
    constructor(props) {
        super(props); // always needed

        this.state = {
            President: 'Bayu',
            Email: "someone@gmail.com",
            Instagram: '@ppia_official',
            Facebook: '@ppia_official (PPIA Official)',
            Website: 'www.ppia-australia.com'
        }

    // this.handleEvent = this.handleEvent.bind(this);
    // }

    // handleEvent = () => {
    //     console.log(this.props);
    // }
    }
}

export class PPIA extends React.Component {
    render() {
        return (
            <div>
                <Image src={logo1} className='d-block mx-auto responsive-gallery img-fluid' />
                <h1>Welcome</h1>
            </div> 
        )
    }
}
