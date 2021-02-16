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
import ChapterDatabase from "./ChapterDatabase"

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
    render() {
        return (
            <>
                {ChapterDatabase.map(ppia => (   
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