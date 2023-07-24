import React from "react";
import "./PlayStore.css";
// import "./Componants/ContactBar/ContactBar.css";
import { Images } from "../../Contant/ImagePath";
const PlayStore = () => {
  return (
    <>
      <div className="Contact_Bar_Container_Right">
        <div className="Contact_Bar_Container_Store_Heading">
          Download our ACKO app now!
        </div>
        <div className="Contact_Bar_Container_Store_Type">
          <img src={Images.PlayStore_LOGO} alt="" className="StoreLogo" />
          <img src={Images.AppleStore_LOGO} alt="" className="StoreLogo" />
        </div>
      </div>
    </>
  );
};

export default PlayStore;
