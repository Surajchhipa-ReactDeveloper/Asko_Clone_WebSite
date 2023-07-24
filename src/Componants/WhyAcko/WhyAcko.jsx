import React from "react";
import "./WhyAcko.css";
import WhyAcKoFour from "../../Common/WhyAs/WhyAskoFour";
import { Images } from "../../Contant/ImagePath";

const WhyAcko = () => {
  return (
    <div className="Why_AcKO_Container">
      <div className="Why_AcKo_Heading_Main">Why ACKO?</div>
      <div className="Why_AcKO_Container_Item">
        <WhyAcKoFour
          WhyImg={Images.Why1_LOGO}
          WhyHeading={"Easy on your pocket"}
          WhyText={
            "When you insure your car with us, you only pay for insurance. No fees, No commissions."
          }
        />
        <WhyAcKoFour
          WhyImg={Images.Why2_LOGO}
          WhyHeading={"Stress free claims"}
          WhyText={
            "During claims, you chill and we hustle. We offer free pick up and drop services (in selected cities). You can also avail our instant claim settlement process for minor claims"
          }
        />
        <WhyAcKoFour
          WhyImg={Images.Why3_LOGO}
          WhyHeading={"Instant everything"}
          WhyText={
            "Right from policy issuance to claim settlement, we do everything quickly. No paperwork, no hassle."
          }
        />
        <WhyAcKoFour
          WhyImg={Images.Why4_LOGO}
          WhyHeading={"Support 24/7/365"}
          WhyText={
            "Accidents can happen anytime & we've got your back. Whether it is larger calamities like cyclone Nivar or minor road accidents, we're just a click & call away."
          }
        />
      </div>
    </div>
  );
};

export default WhyAcko;
