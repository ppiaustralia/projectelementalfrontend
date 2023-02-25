import React, { useState, useEffect } from "react"

import "./Contact.css"
import Embassy from "./Embassy"
import ConsulatesCard from "./ConsulatesCard"
import PPIA from "./PPIA"
import axios from "axios"
import Loading from "../../components/Loading"
import TestCard from "./TestCard"

function Contact() {
    const [consulates, setConsulate] = useState([])
    const [embassies, setEmbassies] = useState([])
    //   const [contact, setContact] = useState();
    var receivedEmbassy = false
    var receivedConsulate = false

    // const contacts = ContactDatabase
    const baseURL = "https://ppiacontact.s3.us-east-2.amazonaws.com/"
    useEffect(() => {
        axios
            .get("https://elemental-backend.onrender.com/external_contact/")
            .then((data) => {
                setEmbassies(
                    data.data.filter((eachData) =>
                        eachData.name.toUpperCase().includes("EMBASSY")
                    ),
                    (receivedEmbassy = true)
                )
                setConsulate(
                    data.data.filter((eachData) =>
                        eachData.name.toUpperCase().includes("CONSULATE")
                    ),
                    (receivedConsulate = true)
                )
            })
    }, [])
    return (
        <div>
            <div className="container mt-3">
                <h3>
                    The information below are the lists of our embassy and
                    consulates that are located in Australia
                </h3>
                <div>
                    <PPIA />
                    <div>
                        <div>
                            {embassies.length < 1 ? (
                                <>
                                    <Loading />
                                </>
                            ) : (
                                <Embassy
                                    embassy={embassies}
                                    emBaseLink={baseURL}
                                />
                            )}
                        </div>
                        <div>
                            {consulates.map((element) => {
                                return (
                                    <ConsulatesCard
                                        consulate={element}
                                        conBaseLink={baseURL}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
