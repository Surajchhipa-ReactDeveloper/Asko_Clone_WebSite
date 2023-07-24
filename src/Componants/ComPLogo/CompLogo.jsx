import React from "react";
import "./CompLogo.css";
import CLogo from "../../Common/CompanyLogo/CLogo";
import { Images } from "../../Contant/ImagePath";

const CompLogo = () => {
  return (
    <>
      <div className="Company_Logo_Container">
        <div className="Company_Logo_Main_Heading">
          India's favorite brands choose ACKO for their customers
        </div>
        <div className="Company_Logo_Inner_Item">
          <CLogo CompLogo={Images.Comp1_LOGO} />
          <CLogo CompLogo={Images.Comp2_LOGO} />
          <CLogo CompLogo={Images.Comp3_LOGO} />
          <CLogo CompLogo={Images.Comp4_LOGO} />
          <CLogo CompLogo={Images.Comp5_LOGO} />
          <CLogo CompLogo={Images.Comp6_LOGO} />
          <CLogo CompLogo={Images.Comp7_LOGO} />
          <CLogo CompLogo={Images.Comp8_LOGO} />
          <CLogo CompLogo={Images.Comp9_LOGO} />
          <CLogo CompLogo={Images.Comp10_LOGO} />
          <CLogo CompLogo={Images.Comp11_LOGO} />
          <CLogo CompLogo={Images.Comp12_LOGO} />
          <CLogo CompLogo={Images.Comp13_LOGO} />
          <CLogo CompLogo={Images.Comp14_LOGO} />
          <CLogo CompLogo={Images.Comp15_LOGO} />
          <CLogo CompLogo={Images.Comp16_LOGO} />
          <CLogo CompLogo={Images.Comp17_LOGO} />
          <CLogo CompLogo={Images.Comp18_LOGO} />
        </div>
      </div>
    </>
  );
};

export default CompLogo;
