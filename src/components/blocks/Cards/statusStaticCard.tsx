import React from "react";
import { StatusStaticCardProps } from "./type";

const StatusStaticCard = ({
  items,
  containerStyles,
  title,
  titleStyles,
  titleContainerStyles,
  contentStyles,
  contentContainerStyles,
}: StatusStaticCardProps) => {
  return <div  className={`rounded-[10px]  bg-white ${containerStyles}`}  >
    <div className={`border-b-1 ${titleContainerStyles} `} >
  <h3  className={`${titleStyles}`}>{title}</h3>
  </div>
  <div className={`flex  ${contentContainerStyles}`}>
  {items.map((item, index) => (
    <div key={index}>
      <h1 className={`font-bold  ${contentStyles}`}>{item.amount}</h1>
      <p className="text-center  mt-1">{item.status}</p>
    </div>
  ))}
  </div>
  


  </div>;
};

export default StatusStaticCard;
