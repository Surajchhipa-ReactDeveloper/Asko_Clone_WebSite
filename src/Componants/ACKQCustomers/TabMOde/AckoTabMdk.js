import React, { useState } from "react";
import "./AckoTabMdk.css";
import ACKoData from "./AcKoCustomersData";

const AckoTabMdk = () => {
  const [AckoSlider] = useState(ACKoData);
  const [currentSlider, setCurrentSlider] = useState(0);
  console.log(ACKoData[currentSlider].CusName);

  // const goToNextSlide = () => {
  //   setCurrentSlider((prevIndex) => (prevIndex + 1) % AckoSlider.length);
  // };
  const goToSlide = (index) => {
    setCurrentSlider(index);
  };
  return (
    <>
      <div className="ACko_Slider_Control_Container">
        <div className="ACko_Slider_Container2">
          <div className="ACko_Slider_Top_Img_Name">
            <div className="Customers_Img">
              <img
                src={ACKoData[currentSlider].CusImg}
                alt=""
                className="CustomersImg"
              />
            </div>
            <div className="Customer_Name_ID">
              <div className="Customer_Name">
                {ACKoData[currentSlider].CusName}
              </div>
              <div className="Customer_ID">{ACKoData[currentSlider].CusID}</div>
            </div>
          </div>
          <div className="ACko_Slider_Text">
            {ACKoData[currentSlider].CusText}
          </div>
        </div>
        {/* ******************************** */}
        <div className="Acko_Slider_Control">
          {AckoSlider.map((curElm, index) => {
            return (
              <div className="Img_Control_Slider" key={index}>
                <img
                  src={curElm.CusImg}
                  alt=""
                  className={`CustomersImg2   Position${index} ${
                    index === currentSlider ? "ActiveImg" : ""
                  }`}
                  key={index + curElm.id}
                  onClick={() => goToSlide(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AckoTabMdk;
