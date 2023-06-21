import React from "react";

const ShowData = ({ firstName, lastName, age, address, id }) => {
  return (
    <div className="container border m-1">
      <div>{id}</div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{age}</div>
      <div>{address}</div>
    </div>
  );
};

export default ShowData;
