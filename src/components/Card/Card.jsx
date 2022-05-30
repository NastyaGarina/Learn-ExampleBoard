import React from "react";
import { Badge } from "../Badge/Badge";
import { Checkbox } from "../Checkbox/Checkbox";
import "./Card.css";

export const Card = ({ avatars, label, description, badge, checkboxes }) => {
  return (
    <div className="Card">
      <div style={{ display: "flex" }}>
        {avatars &&
          avatars.map((avatar) => (
            <img
              key={avatar}
              className="avatar"
              src={avatar}
              alt={avatar}
              style={{ marginRight: "5px" }}
            ></img>
          ))}
      </div>
      <div className="Frame">{label.text}</div>
      {description && <div className="Content">{description}</div>}
      {checkboxes &&
        checkboxes.map((checkbox) => (
          <Checkbox key={checkbox} values={true} inDescription={checkbox} />
        ))}
      {badge && <Badge text={badge?.text} color={badge?.color} />}
    </div>
  );
};
