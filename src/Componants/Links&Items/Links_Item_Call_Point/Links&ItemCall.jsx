import React from "react";
import "./Links&ItemCall.css";
import BigLinksItem from "../LInks&ItemsForBigScreen/BigLinksItem";
import SmallLinksItem1 from "../LInks&ItemsForSmallScreen/SmallLinksItem1";
const Links_ItemCall = () => {
  return (
    <>
      <div className="Links_Item_Call_Container">
        <div className="Links_Item_Call_Container_Big_Screen">
          <BigLinksItem />
        </div>
        <div className="Links_Item_Call_Container_Small_Screen">
          <SmallLinksItem1 />
        </div>
      </div>
    </>
  );
};

export default Links_ItemCall;
