import React from "react";
import "./FourSlup.css";

const FourSlUp = (props) => {
  return (
    <>
      <div className="Four_Slider_Upper_container">
        <div className="Four_Slider_Upper_Img">
          <img src={props.SlUpImg} alt="" className="UpperImg"/>
        </div>
        <div className="Four_Slider_Upper_Text">{props.SlUpText}</div>
      </div>
    </>
  );
};

export default FourSlUp;
