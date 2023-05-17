import React, { useState } from "react";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  function handleChange(e) {
    setSelected(+e.target.value);
    select(+e.target.value);
  }

  return (
    <ul className="rating">
      {[...Array(10).keys()]
        .map((n) => n + 1)
        .map((number) => (
          <li key={number}>
            <input
              type="radio"
              id={`num${number}`}
              name="rating"
              value={number}
              onChange={handleChange}
              checked={selected === number}
            />
            <label htmlFor={`num${number}`}>{number}</label>
          </li>
        ))}
    </ul>
  );
}

export default RatingSelect;
