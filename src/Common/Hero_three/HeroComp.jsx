import React from "react";
import "./HeroComp.css";
const HeroComp = (props) => {
  return (
    <>
      <div className="Hero_Three_Icon_Container">
        <div className="Hero_Three_Icon_Left_Container">
          <img src={props.HeroImg} alt="" className="HeroIcon"/>
        </div>
        <div className="Hero_Three_Icon_Right_Container">{props.IconText}</div>
      </div>
    </>
  );
};

export default HeroComp;
