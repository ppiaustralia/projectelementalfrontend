import React, { useState, useEffect } from "react"

import "./Contact.css"
import ContactDatabase from "./ContactDatabase.json"
import Embassy from "./Embassy"
import ConsulatesCard from "./ConsulatesCard"
import PPIA from "./PPIA"
import axios from "axios"
import Loading from "../../components/Loading"

function Contact() {
    const [consulates, setConsulate] = useState([])
    const [embassies, setEmbassies] = useState([])
    var receivedEmbassy = false;    
    var receivedConsulate = false;

    // const contacts = ContactDatabase
    const baseURL = "https://ppiacontact.s3.us-east-2.amazonaws.com/"
    useEffect(() => {
        axios
            .get("https://ppia-backend.herokuapp.com/external_contact/")
            .then((data) => {
                setEmbassies(
                    data.data.filter((eachData) => eachData.name.toUpperCase().includes("EMBASSY")),
                    receivedEmbassy = true
                )
                setConsulate(
                    data.data.filter((eachData) => eachData.name.toUpperCase().includes("CONSULATE")),
                    receivedConsulate = true
                )
                /*
                let checkEmbassy = data.data.filter((eachData) => eachData.name.toUpperCase().includes("EMBASSY"))
                let checkConsulate= data.data.filter((eachData) => eachData.name.toUpperCase().includes("CONSULATE"))
                console.log(checkEmbassy);
                console.log(checkConsulate);
                */
            })
    },[])
    return (
        <div className="container mt-3">
            <div>
                <PPIA />
            </div>
            <div>
                <h3>
                    The information below are the lists of our embassy and
                    consulates that are located in Australia
                </h3>
                <div>
                    {
                        embassies.length<1 ? (
                            <>
                                <Loading/>
                            </>
                        ):(
                            <Embassy embassy = {embassies} emBaseLink = {baseURL} />
                        )
                    }
                </div>
                <div>
                    {consulates.map((element) => {
                        return <ConsulatesCard consulate={element} conBaseLink = {baseURL} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Contact
