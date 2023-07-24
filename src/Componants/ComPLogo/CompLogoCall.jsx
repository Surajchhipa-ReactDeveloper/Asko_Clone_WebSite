import React from "react";
import "./CompLogoCall.css";
import CompLogo from "./CompLogo";
import CompTab from "./CompTabMode/CompTab";

const CompLogoCall = () => {
  return (
    <>
      <div className="Comp_Logo_Coll_Container">
        <div className="Comp_Logo_Coll_Container_1">
          <CompLogo />
        </div>
        <div className="Comp_Logo_Coll_Container_2">
          <CompTab />
        </div>
      </div>
    </>
  );
};

export default CompLogoCall;
