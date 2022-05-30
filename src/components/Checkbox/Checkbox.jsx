import React from "react";
import "./Checkbox.css";

export const Checkbox = ({ value, onChange, isChecked, inDescription }) => {
  return (
    <div className="Task">
      <input
        type="checkbox"
        className="Checkbox"
        value={value}
        onChange={onChange}
        checked={isChecked}
      />
      <p className="inDescription">{inDescription}</p>
    </div>
  );
};
