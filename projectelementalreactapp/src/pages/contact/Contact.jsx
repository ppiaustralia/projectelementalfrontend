import React from 'react';
import './Contact.css'
import ContactDatabase from './ContactDatabase.json'

function Contact(props) {
    
    // function renderContact(ppia) {
    //     return Object.keys(ppia)
    //     .filter(key => key !== "name")
    //     .map( key => {
    //         let Key = key.charAt(0).toUpperCase() + key.slice(1)
    //         return <p>{Key}: {ppia[key]}</p>
    //     });
    // }

    return (
        <div>
            <h1>Contact</h1> {/* title */}
            <div>
                {/* call PPIAustralia */}
                

            </div>
            <div>
                <h3>The information below are the lists of our embassy and consulates that are located in Australia</h3>
                <div>
                    <h1>Embassy</h1> {/* title */}
                    <h3>the lists of consulate general in Australia</h3> 
                    {/* call Embassy */}
                    

                    {/* call everything with Consulate */}
                    

                </div>
            </div>
        </div>
    );
}

export default Contact;