import React from "react";
import { Badge } from "../Badge/Badge";
import { Card } from "../Card/Card";
import "./CardContainer.css";

export const CardContainer = ({ title, cardsFilter, cards }) => {
  return (
    <div className="Lane">
      {title && <Badge size="m" text={title?.text} color={title?.color} />}
      {cardsFilter &&
        cardsFilter.map(
          (card, i) =>
            card.display &&
            (card?.badge?.color === "green" ||
              card?.badge?.color === "blue") && (
              <Card
                avatars={card.avatars}
                key={i}
                label={card.label}
                description={card.description}
                badge={card.badge}
                checkboxes={card.checkBoxes}
              />
            )
        )}

      {cards &&
        cards.map((card) => (
          <Card
            key={card}
            avatars={card.avatars}
            label={card.label}
            description={card.description}
            checkboxes={card.checkBoxes}
            badge={card.badge}
          />
        ))}
    </div>
  );
};
