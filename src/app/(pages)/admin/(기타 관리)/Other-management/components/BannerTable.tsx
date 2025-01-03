import React from "react";
import { bannerType } from "./type";

const tabs = [
  "번호",
  "노출기간",
  "제목",
  "구분",
  "상태",
  "클릭수",
  "등록일",
  "관리자",
];

const data: bannerType[] = [
  {
    num: 6,
    creationDate: "2023-08-10  00:00",
    creationTime: "~ 2023-09-22  23:59",
    title: "화장품 이벤트",
    division: "전체",
    situation: "진행",
    numOfClicks: 0,
    registrationDate: "2023-08-05",
    manager: "이중재",
  },
  {
    num: 5,
    creationDate: "2023-07-10  10:00",
    creationTime: "~ 2023-08-30  23:59",
    title: "7월 이벤트 2탄",
    division: "발주사",
    situation: "진행",
    numOfClicks: 120,
    registrationDate: "2023-07-01",
    manager: "이중재",
  },
  {
    num: 4,
    creationDate: "2023-07-01  00:00",
    creationTime: "~ 2023-09-05  23:59",
    title: "7월 이벤트 1탄",
    division: "장비사업자",
    situation: "진행",
    numOfClicks: 250,
    registrationDate: "2023-07-01",
    manager: "이중재",
  },
  {
    num: 3,
    creationDate: "2023-06-05  00:00",
    creationTime: "~ 2023-06-15  23:59",
    title: "6월 이벤트 2탄",
    division: "전체",
    situation: "진행",
    numOfClicks: 354,
    registrationDate: "2023-06-05",
    manager: "이중재",
  },
  {
    num: 2,
    creationDate: "2023-06-01  00:00",
    creationTime: "~ 2023-06-14  23:59",
    title: "6월 이벤트 1탄",
    division: "발주사",
    situation: "진행",
    numOfClicks: 215,
    registrationDate: "2023-05-15",
    manager: "이중재",
  },
  {
    num: 1,
    creationDate: "2023-06-01  00:00",
    creationTime: "~ 2023--6-13  23:59",
    title: "상시 이벤트",
    division: "장비사업자",
    situation: "진행",
    numOfClicks: 0,
    registrationDate: "2023-05-11",
    manager: "이중재",
  },
];

const BannerTable = () => {
  return (
    <div className="bg-[white] w-full text-[14px] h-[560px]">
      <div className="grid grid-cols-8 text-center bg-[#F1F3F6]">
        {tabs.map((title, index) => (
          <div key={index} className={`text-[#4B505D] py-[20px] `}>
            {title}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-8 text-center  text-[#A3A6AB] border-b-[1px] border-b-[#F1F3F6]"
        >
          <div className="flex py-[10px] items-center justify-center border-x-[1px] border-x-[#F1F3F6]">
            {row.num}
          </div>
          <div className="flex flex-col py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            <p>{row.creationDate}</p>
            <p>{row.creationTime}</p>
          </div>

          <div className="flex items-center justify-center py-[10px] underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]">
            {row.title}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.division}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.situation}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.numOfClicks}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.registrationDate}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.manager}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BannerTable;
