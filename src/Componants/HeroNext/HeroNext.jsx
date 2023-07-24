import React from "react";
import "./HeroNext.css";
import BigComp from "../../Common/Big-Three/BigThree";
import { Images } from "../../Contant/ImagePath";

const HeroNext = () => {
  return (
    <>
      <div className="HeroNext_Container">
        <BigComp
          BigImg={Images.Big1_LOGO}
          IconText={
            "More than 8 crore Indians trust Acko for their insurance needs"
          }
        />
        <BigComp
          BigImg={Images.Big2_LOGO}
          IconText={
            "3 out of 4 customers renew their car insurance policy with us"
          }
        />
        <BigComp
          BigImg={Images.Big3_LOGO}
          IconText={
            "We have happy ACKO customers in 647 cities & towns across India"
          }
        />
      </div>
    </>
  );
};

export default HeroNext;
