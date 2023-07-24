import React from "react";
import "./SlUp.css";
import FourSlUp from "../../Common/FourSlUp/FourSlup";
import { Images } from "../../Contant/ImagePath";

const SlUp = () => {
  return (
    <>
      <div className="SlUp_Four_Container">
        <div className="SlUp_Four_Container_Item">
          <div className="SlUp_Four_Container_Item1">
            <FourSlUp
              SlUpImg={Images.SlT1_LOGO}
              SlUpText={"Easy on your pocket"}
            />
            <FourSlUp
              SlUpImg={Images.SlT2_LOGO}
              SlUpText={"Instant everything"}
            />
          </div>
          <div className="SlUp_Four_Container_Item2">
            <FourSlUp
              SlUpImg={Images.SlT3_LOGO}
              SlUpText={"Stress free claims"}
            />
            <FourSlUp
              SlUpImg={Images.SlT4_LOGO}
              SlUpText={"Support 24/7/365"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SlUp;
