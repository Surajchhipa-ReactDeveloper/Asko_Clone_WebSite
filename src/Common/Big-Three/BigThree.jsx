import React from "react";
import "./BigThree.css";
const BigComp = (props) => {
  return (
    <>
      <div className="Big_Three_Icon_Container">
        <div className="Big_Three_Icon_Left_Container">
          <img src={props.BigImg} alt="" className="BigIcon" />
        </div>
        <div className="Big_Three_Icon_Right_Container">{props.IconText
        }</div>
      </div>
    </>
  );
};

export default BigComp;
