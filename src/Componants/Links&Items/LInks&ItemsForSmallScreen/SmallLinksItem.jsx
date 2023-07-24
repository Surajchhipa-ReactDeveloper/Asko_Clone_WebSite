import React from "react";
import { useState } from "react";
import "./SmallLinksItem.css";
import { Images } from "../../../Contant/ImagePath";

const SmallLinksItem = ({
  Heading,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  Item8,
  Item9,
  Item10,
  Item11,
  Item12,
  Item13,
  Item14,
}) => {
  const [show, setShow] = useState(false);

  const showAns = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="Small_Screen_Links_Item_Container">
        <div className="Small_Screen_Main_Heading_Container">
          <div className="Small_Screen_Links_Items_Heading">{Heading}</div>
          <p onClick={showAns}>
            {show ? (
              <img src={Images.Up_LOGO} alt="" className="UPDown" />
            ) : (
              <img src={Images.Down_LOGO} alt="" className="UPDown" />
            )}
          </p>
        </div>
        <div className="Small_Screen_Links_Container">
          <div className="Small_Screen_Item1 ">
            {show && (
              <div className="Small_Screen_Links_Item">
                <div className="Small_Links_box LinksTb">{Item1}</div>
                <div className="Small_Links_box LinksTb">{Item2}</div>
                <div className="Small_Links_box LinksTb">{Item3}</div>
                <div className="Small_Links_box LinksTb">{Item4}</div>
                <div className="Small_Links_box LinksTb">{Item5}</div>
                <div className="Small_Links_box LinksTb">{Item6}</div>
                <div className="Small_Links_box LinksTb">{Item7}</div>
                <div className="Small_Links_box LinksTb">{Item8}</div>
                <div className="Small_Links_box LinksTb">{Item9}</div>
                <div className="Small_Links_box LinksTb">{Item10}</div>
                <div className="Small_Links_box LinksTb">{Item11}</div>
                <div className="Small_Links_box LinksTb">{Item12}</div>
                <div className="Small_Links_box LinksTb">{Item13}</div>
                <div className="Small_Links_box LinksTb">{Item14}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* ********** 2 OPTIONS ********** */}
      {/* <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item1}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item2}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item3}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item4}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item5}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item6}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item7}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item8}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item9}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item10}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item11}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item12}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item13}</p>}
          </div>
          <div className="Small_Screen_Item1 linksTab">
            {show && <p className="Ans_data">{Item14}</p>}
          </div> */}
    </>
  );
};

export default SmallLinksItem;
