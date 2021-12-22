import React from "react";

function ConsulatesCard(data) {
  console.log(data);
  /*
  Not sure what this is for - Daniel

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  */
  // const { address, name, phone, website }

  const{address, name, phone, website} =data.data;

  return (
    <div className="card p-3 pb-0 mt-3">
      {/* <h1>{info.title}</h1>
      <ul className="list-unstyled">
        {Object.entries(info).map(([key, value]) => {
          if (key !== "title") {
            return <li>{`${capitalizeFirstLetter(key)} : ${value}`}</li>;
          }
        })}
      </ul> */}
            <h3 className="m-2"> {name}</h3>
            <p>{`Address: ${address}`}</p>
            <p>{`Phone: ${phone}`}</p>
            <p>{`Website ${website}`}</p>

    </div>
  );
}

export default ConsulatesCard;
