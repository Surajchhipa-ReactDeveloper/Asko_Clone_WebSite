import React from "react";
import "./Hero.css";
import "./HeroMd.css";
import HeroComp from "../../Common/Hero_three/HeroComp";
import { Images } from "../../Contant/ImagePath";

const Hero = () => {
  const ClickInput = () => {
    var IconH = document.querySelector(".InputCarLogo");
    IconH.style.display = "none";
  };
  const ClickInputBefore = () => {
    var IconS = document.querySelector(".InputCarLogo");
    var x = document.querySelector(".Input_Number");
    IconS.style.display = "block";
    x.value = x.value.toUpperCase();    
  };
  return (
    <>
      <div className="Hero_Container">
        <div className="Hero_Left_Container">
          <div className="Hero_Main_Top_Heading">
            Get upto 70% off on your Taxi insurance
          </div>
          <div className="Hero_top_Title">
            Get a quote in the blink of an eye
          </div>
          <div className="Hero_Add_Taxi_Number">
            <div className="Input_Taxi_Number">
              <img src={Images.InputImg_LOGO} alt="" className="InputCarLogo" />
              <input
                type="text"
                placeholder="Enter your taxi number"
                className="Input_Number"
                onBlur={ClickInputBefore}
                onFocus={ClickInput}
              />
            </div>
            <div className="Search_Taxi_Number_Btn">
              <button className="View_Price">View price</button>
            </div>
          </div>
          <div className="Three_Icon_text">
            <HeroComp
              HeroImg={Images.Hero1_LOGO}
              IconText={"Rated 4.8/5 on Google"}
            />
            <HeroComp
              HeroImg={Images.Hero2_LOGO}
              IconText={"Licensed by IRDAI, Govt of India"}
            />
            <HeroComp
              HeroImg={Images.Hero3_LOGO}
              IconText={"2 lakh+ claims settled"}
            />
          </div>
        </div>
        <div className="Hero_Right_Container">
          <img src={Images.CarMain} alt="" className="CarImg" />
        </div>
      </div>
    </>
  );
};

export default Hero;
