import React from "react";
import "./IndexHeroNext.css";
import HeroNext from "./HeroNext";
import BigSliderTab from "./HeroNextTab/SliderTab";

const HeroNextCall = () => {
  return (
    <>
      <div className="call_Point">
        <div className="Hero_Point_1">
          <HeroNext />
        </div>
        <div className="Hero_Point_2">
          <BigSliderTab />
        </div>
      </div>
    </>
  );
};

export default HeroNextCall;
