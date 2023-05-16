import React from "react";

function Card({ children, reverseColor }) {
  return <div className={`card ${reverseColor && "reverse"}`}>{children}</div>;
}

export default Card;
