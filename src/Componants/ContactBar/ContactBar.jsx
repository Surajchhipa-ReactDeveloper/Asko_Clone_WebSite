import React from "react";
import "./ContactBar.css";
import { Images } from "../../Contant/ImagePath";
import SingleLogo from "../../Common/SlingleLogo/SingleLogo";
import PlayStore from "../../Common/PlayStore/PlayStore";

const ContactBar = () => {
  return (
    <>
      <div className="Contact_Bar_Container">
        <div className="Contact_Bar_Container_1">
          <div className="Contact_Bar_Container_Left">
            <div className="Contact_Main_Logo">
              <img src={Images.Logo2} alt="" className="AddersLogo" />
            </div>
            <div className="Contact_Main_Company_Name">
              ACKO General Insurance Limited
            </div>
            <div className="Contact_Main_Company_Adders">
              2nd Floor, #36/5, Hustlehub One East, Somasandrapalya, 27th Main
              Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102
            </div>
            <div className="Contact_Main_Company_Media">
              <SingleLogo MediaLogo={Images.Media1_LOGO} />
              <SingleLogo MediaLogo={Images.Media2_LOGO} />
              <SingleLogo MediaLogo={Images.Media3_LOGO} />
              <SingleLogo MediaLogo={Images.Media4_LOGO} />
              <SingleLogo MediaLogo={Images.Media5_LOGO} />
            </div>
          </div>
          <div className="Contact_Container_Right">
            <PlayStore />
          </div>
        </div>
        <div className="Contact_Bar_Container_2">
          <div className="Blank_Border"></div>
        </div>
      </div>
    </>
  );
};

export default ContactBar;
