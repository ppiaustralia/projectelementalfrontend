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
// import Logo2 from "/src/assets/images/PPIA.jpg"; // doesnt work

// Database
// import Database from "./ChapterData"

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
            ppia : [
                {
                    "name"          : "PPIA",
                    "president"     : "John Doe",
                    "email"         : "john-doe@ppi-austraCola.org",
                    "instagram"     : "@ppiaustraCola",
                    "facebook"      : "@ppiaustraCola (PPI-AustrCola)",
                    "website"       : "http://www.ppi-australicaolaa.org/",
                    "logo"          : "/src/assets/images/PPIA.jpg"
                },
                {
                    "name"          : "PPIA-2",
                    "president"     : "John Doe",
                    "email"         : "john-doe@ppi-austraCola.org",
                    "instagram"     : "@ppiaustraCola",
                    "facebook"      : "@ppiaustraCola (PPI-AustrCola)",
                    "website"       : "http://www.ppi-austrcaolalia.org/",
                    "logo"          : "../../assets/images/PPIA.jpg"
                },
                {
                    "name"          : "PPIA-3",
                    "president"     : "John Doe",
                    "email"         : "john-doe@ppi-austraCola.org",
                    "instagram"     : "@ppiaustraCola",
                    "facebook"      : "@ppiaustraCola (PPI-AustrCola)",
                    "website"       : "http://www.ppi-australicaolaa.org/",
                    "logo"          : "/src/assets/images/PPIA.jpg"
                },
                {
                    "name"          : "PPIA-4",
                    "president"     : "John Doe",
                    "email"         : "john-doe@ppi-austraCola.org",
                    "instagram"     : "@ppiaustraCola",
                    "facebook"      : "@ppiaustraCola (PPI-AustrCola)",
                    "website"       : "http://www.ppi-austrcaolalia.org/",
                    "logo"          : "../../assets/images/PPIA.jpg"
                },
            ]
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    
    handleEvent() {
        console.log(this.props);
    }
    
    render() {
        return (
            <>
                {this.state.ppia.map(ppia => (   
                    <>
                    <div className="ppia-frame">
                        {/* <div> <img id="logo1" src={process.env.PUBLIC_URL + '/assets/images/PPIA.jpg'} alt="LOGO"/> </div> */}
                        <div className = "ppia-image">
                            <img className="ppia-logo" src= {'/assets/images/PPIA.jpg'} alt= "logo" />
                        </div>
                        <div className="ppia-description">
                            <p className="ppia-title">{ppia.name}</p>
                            <p>President: {ppia.president}</p> 
                            <p>Email: {ppia.email}</p> 
                            <p>Facebook: {ppia.facebook}</p> 
                            <p>Website: {ppia.website}</p> 
                        </div>
                    </div>
                </>
                ))}
            </>
        );
    }
}