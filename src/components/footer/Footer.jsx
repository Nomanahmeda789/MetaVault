import React from "react";
import "./footer.css"
import { ReactComponent as LogoIcon } from "../../assets/svg/meta-logo.svg";

const Footer = () => {
  return (
      <div className="footer">
        <hr/>
      <div className="footer-container">
        <div className="footer-contact">
          <div>
            <LogoIcon className="logo-icon" />
          </div>
          <div>metavault@gmail.com</div>
          <div>+phone-number</div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="copyright">
          Copyright© MetaVault. All rights reserved.
        </div>
        <div className="footer-links">
          <div>Term of Services</div>
          <div>Privacy Policies</div>
          <div>Refund Policy</div>
        </div>
      </div>
      </div>

  );
};

export default Footer;
