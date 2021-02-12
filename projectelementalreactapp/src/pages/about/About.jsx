import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';

class About extends React.Component {
    render() {
        return (
            <div>
            <Sidebar/>
                <h1>Successfully route to About page</h1>
            </div>
        );
    }
}

export default About;