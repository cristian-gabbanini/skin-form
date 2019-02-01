import React from "react";
import styled from "@emotion/styled";

const Arrival = styled.input`
  padding: 1em;
  border: 2px solid #ffff00;
  cursor: pointer;
`;

function ArrivalComponent({ onClick }) {
  return <Arrival onClick={onClick} />;
}

export default ArrivalComponent;
