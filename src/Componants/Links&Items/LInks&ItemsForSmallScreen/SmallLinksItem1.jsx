import { useState } from "react";
import LinksItemData from "../LinksItemData";
import SmallLinksItem from "./SmallLinksItem";
import "./SmallLinksItem.css";

const SmallLinksItem1 = () => {
  const [data, setData] = useState(LinksItemData);
  return (
    <>
      <div className="SmallLinksItem1_main">
        {data.map((CurElement,index) => {
          const { id } = CurElement;
          return <SmallLinksItem key={id + index} {...CurElement} />;
        })}
      </div>
    </>
  );
};

export default SmallLinksItem1;
