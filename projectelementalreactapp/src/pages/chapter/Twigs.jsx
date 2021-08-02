import React from "react";

function Twigs(data) {
  console.log(data.data);
  return (
    <>
      {data.data.map((element) => {
        const {
          ppia_id,
          name,
          president,
          state,
          level,
          image,
          parent,
          details,
          is_deleted,
          others,
        } = element;
        return (
          <div className="card">
            <h2>{name} </h2>
            <p>President: {president}</p>
            <p>Parent: {parent}</p>
            <p>State: {state}</p>
          </div>
        );
      })}
    </>
  );
}
export default Twigs;
