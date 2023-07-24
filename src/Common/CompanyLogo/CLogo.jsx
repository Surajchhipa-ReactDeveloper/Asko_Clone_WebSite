import React from "react";
import "./CLogo.css";

const CLogo = (props) => {
  return (
    <>
      <div className="  ">
        <img src={props.CompLogo} alt="" className="CompLogo" />
      </div>
    </>
  );
};

export default CLogo;
