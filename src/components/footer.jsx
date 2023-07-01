import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaYoutubeSquare, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo my-3">That's My Craft</div>
      <div className="footer-social-media row">
        <div className="col-sm-1 footer-icon">
          <FaInstagramSquare className="cursor-pointer" />
        </div>
        <div className="col-sm-1 footer-icon">
          <FaYoutubeSquare className="cursor-pointer" />
        </div>
        <div className="col-sm-1 footer-icon">
          <FaFacebookSquare className="cursor-pointer" />
        </div>
        <div className="col-sm-1 footer-icon">
          <FaLinkedinIn className="cursor-pointer" />
        </div>
      </div>
      <div className="footer-copyright-text my-3">
        &copy; TMC & Associates. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
