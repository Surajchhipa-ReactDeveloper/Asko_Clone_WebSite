import React, { useState } from "react";
import "./BigLinksItem.css";
import LinksItemData from "../LinksItemData";
const BigLinksItem = () => {
  //   const [LinkItem] = useState(LinksItemData);
  const [linkData, setLinkData] = useState(LinksItemData);
  return (
    <>
      <div className="Big_Screen_Links_Items_Container">
        <div className="Big_Screen_Links_Items_Map_Method">
          {linkData?.map((Item, index) => {
            return (
              <>
                <div className="Big_Screen_Main_container" key={index}>
                  <div className="Big_Screen_Links_Items_Heading">
                    {Item.Heading}
                  </div>
                  <div className="Big_Screen_Links_Items_Heading_Item">
                    <div className="Big_Screen_Item1 Links">{Item.Item1}</div>
                    <div className="Big_Screen_Item2 Links">{Item.Item2}</div>
                    <div className="Big_Screen_Item3 Links">{Item.Item3}</div>
                    <div className="Big_Screen_Item4 Links">{Item.Item4}</div>
                    <div className="Big_Screen_Item5 Links">{Item.Item5}</div>
                    <div className="Big_Screen_Item6 Links">{Item.Item6}</div>
                    <div className="Big_Screen_Item7 Links">{Item.Item7}</div>
                    <div className="Big_Screen_Item8 Links">{Item.Item8}</div>
                    <div className="Big_Screen_Item9 Links">{Item.Item9}</div>
                    <div className="Big_Screen_Item10 Links">{Item.Item10}</div>
                    <div className="Big_Screen_Item11 Links">{Item.Item11}</div>
                    <div className="Big_Screen_Item12 Links">{Item.Item12}</div>
                    <div className="Big_Screen_Item13 Links">{Item.Item13}</div>
                    <div className="Big_Screen_Item14 Links">{Item.Item14}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BigLinksItem;
