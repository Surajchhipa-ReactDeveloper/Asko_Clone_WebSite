import React from "react";
import "./Navbar.css";
import { Images } from "../../Contant/ImagePath";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="Navbar_Left_Right_Container">
          <div className="Navbar_Left_Container">
            <img src={Images.Logo} alt="" className="MainLogo" />
          </div>
          <div className="Navbar_Right_Container">
            <img src={Images.Help_Logo} alt="" className="HelpLogo" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
