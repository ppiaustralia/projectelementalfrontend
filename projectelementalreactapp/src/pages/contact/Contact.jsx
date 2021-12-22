import React, { useState, useEffect } from "react"

import "./Contact.css"
import ContactDatabase from "./ContactDatabase.json"
import Embassy from "./Embassy"
import ConsulatesCard from "./ConsulatesCard"
import PPIA from "./PPIA"
import axios from "axios"

function Contact() {
    const [contact, setContact] = useState()
    const contacts = ContactDatabase
    const baseURL = "https://ppiacontact.s3.us-east-2.amazonaws.com/"
    useEffect(() => {
        axios
            .get("https://ppia-backend.herokuapp.com/external_contact/")
            .then((data) => {
                console.log(data)
            })
    })
    return (
        <div className="container mt-3">
            <div>
                <PPIA data={contacts.PPIAustralia} />
            </div>
            <div>
                <h3>
                    The information below are the lists of our embassy and
                    consulates that are located in Australia
                </h3>
                <div>
                    <Embassy data={contacts.Embassy} />
                </div>
                <div>
                    {contacts.Consulate.map((element) => {
                        return <ConsulatesCard data={element} />
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
