import React from "react";

function Embassy(data) {
  //   console.log(data.data);
  const { address, name, number, website } = data.data;
  return (
    <div className="card p-3 pb-0">
      <h3 className="m-2"> {name}</h3>
      <p>{`Address: ${address}`}</p>
      <p>{`Phone: ${number}`}</p>
      <p>{`Website ${website}`}</p>
    </div>
  );
}

export default Embassy;
