import React from "react";
import "./HomeWork.css";

import { CardContainer } from "../../components/CardContainer/CardContainer";
import dataHomeWork from "../../moqData/dataHomeWork";

const HomeWorkPage = () => {
  return (
    <div>
      <div className="BoardDescription">
        <p className="DesignText">Design weekly </p>
        <p>A board to keep track of design progress.</p>
      </div>
      <div className="Board">
        {dataHomeWork.map((cardContainer, indexContainer) => (
          <CardContainer
            key={indexContainer}
            cardsFilter={cardContainer.cardsFilter}
            cards={cardContainer.cards}
            title={{
              color: cardContainer.title.color,
              text: cardContainer.title.text,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeWorkPage;
