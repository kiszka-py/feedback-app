import { FaTimes } from "react-icons/fa";
import React from "react";
import { useState } from "react";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverseColor={false}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
