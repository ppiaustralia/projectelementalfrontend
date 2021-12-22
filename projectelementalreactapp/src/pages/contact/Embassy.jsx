import React from "react"

function Embassy(data) {
    console.log(data);
    const { address, name, phone, website } = data.data[0]
    console.log(address);
    return (
        <div className="card p-3 pb-0">
            <h3 className="m-2"> {name}</h3>
            <p>{`Address: ${address}`}</p>
            <p>{`Phone: ${phone}`}</p>
            <p>{`Website ${website}`}</p>
        </div>
    )
}

export default Embassy
