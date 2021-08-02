import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Chapter.css";
import Branch from "./Branch";
import Twigs from "./Twigs";
// temporary Database
// import ChapterDatabase from "./ChapterDatabase.json";

function Chapter(props) {
  const [branch, setBranch] = useState([]);
  const [twigs, setTwigs] = useState([]);

  // get statename value form url
  const statename = props.match.params.statename;

  //send get to backend
  useEffect(() => {
    axios
      .get(`https://ppia-backend.herokuapp.com/user/ppia/?state=${statename}`)
      .then((data) => {
        setBranch(data.data.filter((eachData) => eachData.level === 1));
        setTwigs(data.data.filter((eachData) => eachData.level === 2));
      });
  }, []);

  // const filteredData = receivedData.filter(data => data.parent = "ISA NSW")
  return (
    <div className="container">
      {branch.length < 1 ? <></> : <Branch data={branch} />}
      {twigs.length < 1 ? <></> : <Twigs data={twigs} />}
    </div>
  );
}

export default Chapter;
