import React from "react";
import "./List.css";

export const List = ({ input, onDelete }) => {
  return (
    <ul className="list">
      {input.map((listItem, index) => (
        <li key={index}>
          <span>{listItem.item}</span>
          <button   className='btn' onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};