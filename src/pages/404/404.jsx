import React from "react";
import "./404.css";

const ErrorPage = () => {
  return (
    <div className="Error">
      <img
        src="./images/smail.png"
        alt="smail"
        style={{ width: "150px" }}
      ></img>
      <div>404</div>
      <div>Not Found</div>
    </div>
  );
};
export default ErrorPage;
