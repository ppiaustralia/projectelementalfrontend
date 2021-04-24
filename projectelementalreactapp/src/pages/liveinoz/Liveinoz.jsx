import React, {Component} from 'react';
import {Button} from 'react-bootstrap/';
import ReactDOM from 'react-dom';

import './Liveinoz.css';
import {data_arr} from './database.jsx'

function entry(object){
    return(
        <div className = 'entry'>
            <img src = {object.img} className = 'entry-thumb'/>
            <i class="fas fa-share-alt-square" />
            <i class="fab fa-facebook-square" />
            <i class="fab fa-instagram-square" />
            <i class="fab fa-youtube-square" />
            <i class="fab fa-twitter-square" />
            <div className = 'entry-text'>
                <h3>{object.title}</h3>
                <p>
                    {object.description}
                </p>
                <Button variant = 'news' style = {{width: '155px'}}>Continue Reading</Button>
            </div>
        </div>
    );
};

class Liveinoz extends React.Component {
    render() {
        return (
            <div className = 'page'>
                <div className = 'title'>
                    <h1>Student Guide</h1>
                    <hr style={{width: '95%', margin: 'auto'}} />
                </div>
                <div className = 'subtitle'>
                    <h2>Menjelang Keberangkatan ke Australia</h2>
                    <hr style={{width: '70%', margin: 'auto'}} />
                </div>
                <div>
                    {data_arr.map((obj, i) =>
                        entry(obj)
                    )}
                </div>
                <div className = 'subtitle'>
                    <h2>Tiba di Australia</h2>
                    <hr style={{width: '70%', margin: 'auto'}} />
                </div>
                <div>
                    {data_arr.map((obj, i) =>
                        entry(obj)
                    )}
                </div>
                <hr style={{marginTop: '108px'}} />
            </div>
        );
    }
};

export default Liveinoz;