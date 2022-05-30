import React from "react";
import "./Footer.css";

const FooterLayout = ({ children }) => {
  return (
    <div className="footer">
      <p className="subject">I'm out of fantasy</p>
      <p className="subtitle">
        I don't want to redo it for the fifth time. So let it be
      </p>
      <div className="socials">
        <i className="socialNetworks fa fa-facebook" />
        <i className="socialNetworks fa fa-twitter" />
        <i className="socialNetworks fa fa-telegram" />
        <i className="socialNetworks fa fa-youtube" />
        <i className="socialNetworks fa fa-instagram" />
      </div>
      <div>
        <p>Sign up for our mailing list</p>
        <input type="text" placeholder="Email" />
        <button className="button">Subscribe</button>
      </div>
      <div className="bottom">
        <p>2022</p>
      </div>
      {children}
    </div>
  );
};
export default FooterLayout;
