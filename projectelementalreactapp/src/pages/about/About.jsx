import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import SinglePagePDFViewer from './Pdfreader';
import "./Pdfreader.css";

import samplePDF from './sample.pdf'; /* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import MissionVision from './MissionVision';

class About extends React.Component {
    render() {
        return (
            <div>
                <MissionVision/>
           {/* <Sidebar/> */}
           <h4>AD / ART</h4>
            <SinglePagePDFViewer pdf={samplePDF}/>
            </div>    
        );
    }
}

export default About;