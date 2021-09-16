import React, { Component } from "react"
import ReactDOM from "react-dom"
import SinglePagePDFViewer from "./Pdfreader"
import "./Pdfreader.css"

import samplePDF from "../../assets/pdf/sample.pdf" /* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import MissionVision from "./MissionVision"
import KabinetSinergi from "./KabinetSinergi"

class About extends React.Component {
    render() {
        return (
            <div>
                <MissionVision />
                <KabinetSinergi />
                <SinglePagePDFViewer pdf={samplePDF} />
            </div>
        )
    }
}

export default About
