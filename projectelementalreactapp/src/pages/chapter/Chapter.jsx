import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Chapter.css'

// picture gallery
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// pictures 
import Logo1 from "../../assets/images/PPIA.jpg";
import Logo2 from "../../assets/images/PPIA.jpg";
import Logo3 from "../../assets/images/PPIA.jpg";

import Database from "./ChapterData"

export default class Chapter extends React.Component {

    render() {
        return (
            <div>
                <Skeleton />
            </div>
        );
    }
}

// Constructor 
export class Skeleton extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            list : [
                {
                    "name"          : "PPI-Australia",
                    "president"     : "James Wieguna",
                    "email"         : "publicrelations@ppi-australia.org",
                    "instagram"     : "@ppiaustralia",
                    "facebook"      : "@ppiaustralia (PPI-Austrlia)",
                    "website"       : "http://www.ppi-australia.org/",
                    "logo"          : {Logo1}
                }
            ]
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    
    handleEvent() {
        console.log(this.props);
    }
    
    render() {
        return (
        <div>
            {this.state.list.map(list => (   
            <div>
                <div>{list.name}</div>
                <img src={list.logo} />
            </div>
            ))}
        </div>
        );
    }
}