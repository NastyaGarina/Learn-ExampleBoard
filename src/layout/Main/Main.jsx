import React from "react";
import "./Main.css";
import HeaderLayout from "../Header/Header";
import FooterLayout from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderLayout />
      <div className="Main">
        <div className="ExampleBoard">
          <div className="Container">{children}</div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};
export default MainLayout;
