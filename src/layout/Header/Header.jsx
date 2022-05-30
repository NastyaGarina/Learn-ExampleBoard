import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const HeaderLayout = ({ children }) => {
  return (
    <div className="header">
      <div className="logo">WWW</div>
      <div className="Content">
        <p>
          <Link className="Ref mainly" to="/">
            Home
          </Link>
        </p>
        <p>
          <Link className="Ref mainly" to="/about">
            About
          </Link>
        </p>
        <p>
          <Link className="Ref mainly" to="/test">
            Test
          </Link>
        </p>
        <p>
          <Link className="Ref mainly" to="/stats">
            Stats
          </Link>
        </p>
        <p>
          <Link className="Ref mainly" to="/user">
            User
          </Link>
        </p>
      </div>
      <div className="icons">
        <i className="fa fa-search" />
        <i className="fa fa-user-circle" />
        <i className="fa fa-bars" />
      </div>
      {children}
    </div>
  );
};
export default HeaderLayout;
