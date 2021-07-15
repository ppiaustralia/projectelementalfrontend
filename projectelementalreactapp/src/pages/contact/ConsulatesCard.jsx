import React from "react";

function ConsulatesCard(data) {
  const info = data.data;

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div className="card p-3 pb-0 mt-3">
      <h4>{info.title}</h4>
      <ul className="list-unstyled">
        {Object.entries(info).map(([key, value]) => {
          if (key !== "title") {
            return <li>{`${capitalizeFirstLetter(key)} : ${value}`}</li>;
          }
        })}
      </ul>
    </div>
  );
}

export default ConsulatesCard;
