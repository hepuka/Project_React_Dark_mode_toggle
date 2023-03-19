import React from "react";
import "./Footer.css";

const Footer = ({ myTheme }) => {
  return (
    <footer className="--flex-center" data-theme={myTheme}>
      <p>Copyright&copy; 2023. - Created by Zoltan KUN-FAGYAL</p>
    </footer>
  );
};

export default Footer;
