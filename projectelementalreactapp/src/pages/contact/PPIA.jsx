import React from "react";

function PPIA(data) {
  const { contact, name } = data.data;
  return (
    <div className="card p-3 pb-0">
      <h3> {name}</h3>
      <p className="mb-0">Contact Lists: </p>
      <ul>
        {contact.map((element) => {
          return <li> {element} </li>;
        })}
      </ul>
    </div>
  );
}

export default PPIA;
