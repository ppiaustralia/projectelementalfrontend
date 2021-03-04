import React, {Component} from 'react';
import {Image} from 'react-bootstrap/';
import ReactDOM from 'react-dom';

import './Liveinoz.css';


function titlePiece(textInput) {
    return (
    <div>
        <h3>{textInput}</h3>
        <hr style={{width: '70%', margin: 'auto'}} />
    </div>
    );
}

function entryPiece(dataInput) {
    return (
        <div>
            {dataInput}
        </div>
    );
}

class Liveinoz extends React.Component {
    render() {
        return (
            <div className = "page">
                <div>
                    <h1>Student Guide</h1>
                </div>
                <hr style={{width: '95%', margin: 'auto'}} />
            </div>
        );
    }
}

class Entry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Topic page</h3>
            </div>
        );
    }
}

export default Liveinoz;