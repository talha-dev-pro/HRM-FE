import React from "react";
import logo from "../../../media/Logo PNG/main-b.png";

const LogoComponent = ({ updateLogo }) => {
  return (
    <div
      className="logo-container bg-black w-full h-full flex items-center justify-center"
      onClick={() => {
        updateLogo(false);
      }}
    >
      <img src={logo} alt="Our Logo" />
    </div>
  );
};

export default LogoComponent;
