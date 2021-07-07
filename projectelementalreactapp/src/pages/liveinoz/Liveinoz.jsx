import React, {Component} from 'react';
import {Button} from 'react-bootstrap/';
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './Liveinoz.css';
import ReadMore from './ReadMore';
import {data_arr} from './database_liveinoz.jsx'

const MAX_CHR = 300;

function render_entry(object){
    return (
        <div>
            <div className='page-content'>
                <img src = {object.img} className = 'entry-thumb'/>
                <div className = 'entry-text'>
                    <h3>{object.title}</h3>
                    <p>{object.description.slice(0, MAX_CHR)}</p>
                    <Link to={object}>
                        <Button variant = 'news' style = {{width: '155px'}}>Continue Reading</Button>
                    </Link>
                </div>
            </div>
            <div className='share-icons'>
                <i class="fas fa-share-alt-square" />
                <i class="fab fa-facebook-square" />
                <i class="fab fa-instagram-square" />
                <i class="fab fa-youtube-square" />
                <i class="fab fa-twitter-square" />
            </div>
        </div>
    );
}

function render_subtitle(object){
    return (
        <div className = 'subtitle'>
            <h2>{object.heading}</h2>
            <hr style={{width: '70%', margin: 'auto'}} />
        </div>
    );
}

function Liveinoz(props){
    const page = props.match.params.page;
    return (
        <div>
            <div className = 'page'>
                <div className = 'title'>
                    <h1>Student Guide</h1>
                    <hr style={{width: '95%', margin: 'auto'}} />
                </div>
                {data_arr.map((obj) => {
                    switch (obj.type){
                        case 'subtitle':
                            return render_subtitle(obj);
                        case 'entry':
                            return render_entry(obj);
                        }
                    }
                )}
                <hr style={{marginTop: '108px'}} />
            </div>
        </div>
    );
}



// class Liveinoz extends React.Component {
//     render() {
//         return (
//             <div className = 'page'>
//                 <div className = 'title'>
//                     <h1>Student Guide</h1>
//                     <hr style={{width: '95%', margin: 'auto'}} />
//                 </div>
//                 {data_arr.map((obj) => {
//                     switch (obj.type){
//                         case 'subtitle':
//                             return render_subtitle(obj);
//                         case 'entry':
//                             return render_entry(obj);
//                         }
//                     }
//                 )}
//                 <hr style={{marginTop: '108px'}} />
//             </div>
//         );
//     }
// };



export default Liveinoz;
