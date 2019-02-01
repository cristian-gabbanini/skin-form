import React from "react";
import Input from "./Input";

function ArrivalComponent({ onClick }) {
  return (
    <>
      <Input placeholder="Arrival" onClick={onClick} />
    </>
  );
}

export default ArrivalComponent;
