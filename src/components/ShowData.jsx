import React from "react";

const ShowData = ({ firstName, lastName, age, address, id, setActualUser }) => {
  const selectUserFromArray = () => {
    setActualUser({
      firstName: firstName,
      lastName: lastName,
      age: age,
      address: address,
    });
  };
  return (
    <div className="container border m-1" onClick={selectUserFromArray}>
      <div>{id}</div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{age}</div>
      <div>{address}</div>
    </div>
  );
};

export default ShowData;
