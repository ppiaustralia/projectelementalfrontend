import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import SinglePagePDFViewer from './Pdfreader';
import "./Pdfreader.css";

import samplePDF from './sample.pdf'; /* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/

class About extends React.Component {
    render() {
        return (
            <div>
            <Sidebar/>
            <SinglePagePDFViewer pdf={samplePDF}/>
            </div>    
        );
    }
}

export default About;