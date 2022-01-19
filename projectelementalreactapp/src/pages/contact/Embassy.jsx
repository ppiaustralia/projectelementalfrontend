import React from "react"
import "./Card.css"
import { Image } from "react-bootstrap"

function Embassy(data) {
    console.log(data);
    const { address, name, phone, website, image} = data.embassy[0]
    console.log(address);
    return (
        <div className="card">
            <div className = "imageContainer">
                <Image
                    src = {data.emBaseLink + image}
                    className="logo"
                />

            </div>
            <div className = "infoContainer">
                <h3 >{name}</h3>
                <p>{`Address: ${address}`}</p>
                <p>{`Phone: ${phone}`}</p>
                <p>{`Website ${website}`}</p>
            </div>
        </div>
    )
}

export default Embassy
