import React from "react";
import { StaticsCardProps } from "./type";



const StaticsCard= ({
  title,
  content,
  containerStyles = "",
  titleContainerStyles="",
  titleStyles = "",
  contentContainerStyles="",
  numenatorContentStyles = "",
  denomenatorContentStyles=""
}:StaticsCardProps) => {
  return (
    <div className={`rounded-[10px]  bg-white ${containerStyles}`}>
      <div className={`border-b-1 ${titleContainerStyles} `}>
        <h3 className={`${titleStyles}`}>{title}</h3>
      </div>

      <div className={`flex justify-center ${contentContainerStyles} `}>
        <h1 className={`font-bold ${numenatorContentStyles}`}>{content}</h1>
        <h1 className={`pt-2 ${ denomenatorContentStyles} text-black  font-bold`}>/20,000</h1>
      </div>
    </div>
  );
};

export default StaticsCard;
