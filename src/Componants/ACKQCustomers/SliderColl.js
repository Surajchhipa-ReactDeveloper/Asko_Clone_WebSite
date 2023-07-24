import React from "react";
import "./SliderColl.css";
import Slot from "./Slider";
import AckoTabMdk from "./TabMOde/AckoTabMdk";

const SliderColl = () => {
  return (
    <>
      <div className="Slider_Heading">
        Our customers love the ACKO experience
      </div>
        <div className="Slider_Call1">
          <Slot />
        </div>
      <div className="Slider_Call_2">
        <div className="Slider_Call">
          <AckoTabMdk />
        </div>
      </div>
    </>
  );
};

export default SliderColl;
