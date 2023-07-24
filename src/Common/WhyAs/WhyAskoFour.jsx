import React from "react";
import "./WhyAskoFour.css";

const WhyAcKoFour = (props) => {
  return (
    <>
      <div className="Why_AcKo_Four_Item_Container">
        <div className="Why_Img_Heading">
          <div className="Why_ACko_Img">
            <img src={props.WhyImg} alt="" className="WhyImg" />
          </div>
          <div className="Why_AcKo_Heading">{props.WhyHeading}</div>
        </div>
        <div className="Why_AcKo_Text">{props.WhyText}</div>
      </div>
    </>
  );
};

export default WhyAcKoFour;
