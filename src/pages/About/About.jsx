import React from "react";

import "../HomeWork/HomeWork.css";
import dataAbout from "../../moqData/dataAbout";
import { CardContainer } from "../../components/CardContainer/CardContainer";

const AboutPage = () => {
  return (
    <>
      <div className="BoardDescription">
        <p className="DesignText">Personal</p>
        <p>A board to keep track of personal tasks.</p>
      </div>
      <div className="Board">
        {dataAbout.map((cardContainer, container) => (
          <CardContainer
            key={container}
            cards={cardContainer.cards}
            title={{
              color: cardContainer.title.color,
              text: cardContainer.title.text,
            }}
          />
        ))}
      </div>
    </>
  );
};
export default AboutPage;
