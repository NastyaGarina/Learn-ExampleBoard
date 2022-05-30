import React from "react";
import "./Badge.css";

export const Badge = ({ size, className, color, text }) => {
  const sizeClassname = () => {
    switch (size) {
      case "m":
        return "Badge";
      default:
        return "label";
    }
  };
  return (
    <div
      className={`${sizeClassname()}${className ? ` ${className}` : ""}`}
      style={{ color: "black", background: color }}
    >
      {text}
    </div>
  );
};
