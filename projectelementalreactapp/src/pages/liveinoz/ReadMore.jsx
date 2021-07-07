import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';

export default class ReadMore extends React.Component{
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id
        this.img = this.props.location.img
        this.title = this.props.location.title
        this.description = this.props.location. description
    }
    render() {
        return (
            <div>
                <div className="header">
                    <h1>Student Guide</h1>
                </div>
                <div className="breadcrumb">
                    <Breadcrumb aria-label="breadcrumb">
                        <Link to="/liveinoz">
                            Live in Oz
                        </Link>
                        <div>
                            /{this.title}
                        </div>
                    </Breadcrumb>
                </div>
                <img src = {this.img} className = 'entry-thumb'/>
                <div className="body">
                    {this.description}
                </div>
                <h3>ID: {this.id}</h3>
            </div>
        );
    }
}