import React from "react";
import "./Acqo.css";

const ACkoSlider = (props) => {
  return (
    <>
      <div className="ACko_Slider_Container">
        <div className="ACko_Slider_Top_Img_Name">
          <div className="Customers_Img">
            <img src={props.CusImg} alt="" className="CustomersImg" />
          </div>
          <div className="Customer_Name_ID">
            <div className="Customer_Name">{props.CusName}</div>
            <div className="Customer_ID">{props.CusID}</div>
          </div>
        </div>
        <div className="ACko_Slider_Text">{props.CusText}</div>
      </div>
    </>
  );
};

export default ACkoSlider;
