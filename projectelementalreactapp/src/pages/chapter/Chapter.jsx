import React from 'react';
import './Chapter.css'

// temporary Database
import ChapterDatabase from "./ChapterDatabase"

// function Chapter (props) {
//         return (
//             <div>
//                 <Skeleton />
//             </div>
//         );
// }TypeError: statename.toUpper is not a function

function Chapter(props) {
    // get statename value form url
    const statename = props.match.params.statename;
    // add PPIA prefix
    const PPIA_STATENAME = `PPIA_${statename.toUpperCase()}`;

    // { key1: value1, key2: value2 }
    function renderPPIA(ppia) {
        // for each key in the object
        return Object.keys(ppia)
        // filter out title
        .filter(key => key !== "name")
        .map(key => {
            let Key = key.charAt(0).toUpperCase() + key.slice(1)
            return <p>{Key}: {ppia[key]}</p>
        });
    }
    
    return ChapterDatabase[PPIA_STATENAME].map(ppia => (   
        <div className="ppia-frame">
            {/* <div> <img id="logo1" src={process.env.PUBLIC_URL + '/assets/images/PPIA.jpg'} alt="LOGO"/> </div> */}
            <div className = "ppia-image">
                <img className="ppia-logo" src= {'/assets/images/PPIA.jpg'} alt= "logo" />
            </div>
            <div className="ppia-description">
                <p className="ppia-title">{ppia.name}</p>
                { renderPPIA(ppia) }
            </div>
        </div>
    ));
}

export default Chapter;