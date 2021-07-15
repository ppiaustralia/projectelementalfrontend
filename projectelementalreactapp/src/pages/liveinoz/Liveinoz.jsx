import React from 'react';
import { Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

import './Liveinoz.css';
import { section_data, entry_data } from "./database_liveinoz"

const MAX_CHR = 300;

export default class Liveinoz extends React.Component {
    render_subtitle = (object) => {
        return (
            <div className = 'subtitle'>
                <h2>{object.subtitle}</h2>
                <hr style={{width: '70%', margin: 'auto'}} />
            </div>
        )
    }
    render_entry = (object) => {
        return (
            <div>
                <div className='page-content'>
                    <img src = {object.img} className = 'entry-thumb' alt='missing' />
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
        )
    }
    render(){
        return (
            <div>
                <div className = 'page'>
                    <div className = 'title'>
                        <h1>Student Guide</h1>
                        <hr style={{width: '95%', margin: 'auto'}} />
                    </div>

                    {section_data.map((section) => {
                        return (
                            <div>
                                {this.render_subtitle(section)}
                                {section.entries.map((entry) => {
                                    return (
                                        <div>
                                            {this.render_entry(entry)}
                                        </div>
                                    )
                                })}
                            </div>
                            )
                    })}

                    <hr style={{marginTop: '108px'}} />
                </div>
            </div>
        );
                }
}

export class ReadMore extends React.Component{
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id
        this.obj = entry_data[this.id]
    }

    render() {
        return (
            <div className='page'>
                <div className='title'>
                    <h1>Student Guide</h1>
                </div>
                <div className='breadcrumb page-content'>
                    <Breadcrumb aria-label='breadcrumb'>
                        <Link to='/liveinoz'>
                            Live in Oz
                        </Link>
                        <div>
                            /{this.obj.title}
                        </div>
                    </Breadcrumb>
                </div>
                <img src = {this.obj.img} className = 'entry-thumb page-content' alt='missing'/>
                <div className='page-content'>
                    {this.obj.description}
                </div>
                <h3>ID: {this.id}</h3>
            </div>
        );
    }
}
