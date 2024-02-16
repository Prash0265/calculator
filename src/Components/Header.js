import React from "react";
import logo from "../Assets/logo.png";

const Header = () => {
  return (
    <div className=" flex items-center justify-center text-center text-3x font-bold pb-5  shadow-md">
      <div>
        <img src={logo} alt="logo" className="w-24" />
      </div>
      <div className="text-[#ECA432]">LONDON HEALTH SCIENCES CENTER</div>
    </div>
  );
};

export default Header;


