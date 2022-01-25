import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

import "./Chapter.css"
import Branch from "./Branch"
import Twigs from "./Twigs"
import Loading from "../../components/Loading"
// temporary Database
// import ChapterDatabase from "./ChapterDatabase.json";

function Chapter(props) {
    const [branch, setBranch] = useState([])
    const [twigs, setTwigs] = useState([])
    const chapterBaseLink = "https://chapterslogo.s3.us-east-2.amazonaws.com/"

    // get statename value form url
    let { statename } = useParams()
    //send get to backend
    useEffect(() => {
        //when statename changes, setBranch and twigs to empty to trigger loading icon
        setBranch([])
        setTwigs([])
        if (statename == "all") {
            axios
                .get(`https://ppia-backend.herokuapp.com/user/ppia/`)
                .then((data) => {
                    setBranch(
                        data.data.filter((eachData) => eachData.level === 1)
                    )
                })
        } else {
            axios
                .get(
                    `https://ppia-backend.herokuapp.com/user/ppia/?state=${statename}`
                )
                .then((data) => {
                    setBranch(
                        data.data.filter((eachData) => eachData.level === 1)
                    )
                    setTwigs(
                        data.data.filter((eachData) => eachData.level === 2)
                    )
                })
        }
    }, [statename])

    // const filteredData = receivedData.filter(data => data.parent = "ISA NSW")
    return (
        <div className="container">
            {branch.length < 1 ? (
                <>
                    <Loading />
                </>
            ) : (
                <Branch data={branch} chBaseLink={chapterBaseLink} />
            )}
            {twigs.length < 1 ? (
                <></>
            ) : (
                <Twigs data={twigs} chBaseLink={chapterBaseLink} />
            )}
        </div>
    )
}

export default Chapter
