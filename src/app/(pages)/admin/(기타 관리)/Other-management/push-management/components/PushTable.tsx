import React from "react";
import { PushType } from "./type";

const tabs = [
  "번호",
  "발송일시",
  "제목",
  "상태",
  "발송수",
  "성공수",
  "실패수",
  "등록일시",
  "관리자",
];

const data: PushType[] = [
  {
    num: 10,
    creationDateTime: "2023-08-21  11:30",
    title: "점심메뉴 추천!",
    situation: "발송 대기",
    numOfShipments: 980,
    numOfSuccess: 0,
    numOfFailures: 0,
    registrationDateTime: "2023-08-05  22:21:41",
    manager: "이중재",
  },
  {
    num: 9,
    creationDateTime: "2023-08-21  11:30",
    title: "점심메뉴 추천!",
    situation: "발송 대기",
    numOfShipments: 980,
    numOfSuccess: 0,
    numOfFailures: 0,
    registrationDateTime: "2023-08-05  22:21:41",
    manager: "이중재",
  },
  {
    num: 8,
    creationDateTime: "2023-08-21  11:30",
    title: "점심메뉴 추천!",
    situation: "발송 대기",
    numOfShipments: 980,
    numOfSuccess: 0,
    numOfFailures: 0,
    registrationDateTime: "2023-08-05  22:21:41",
    manager: "이중재",
  },
  {
    num: 7,
    creationDateTime: "2023-08-21  11:30",
    title: "점심메뉴 추천!",
    situation: "발송 대기",
    numOfShipments: 980,
    numOfSuccess: 0,
    numOfFailures: 0,
    registrationDateTime: "2023-08-05  22:21:41",
    manager: "이중재",
  },
  {
    num: 6,
    creationDateTime: "2023-08-21  11:30",
    title: "점심메뉴 추천!",
    situation: "발송 대기",
    numOfShipments: 980,
    numOfSuccess: 0,
    numOfFailures: 0,
    registrationDateTime: "2023-08-05  22:21:41",
    manager: "이중재",
  },
  {
    num: 5,
    creationDateTime: "2023-07-15  12:00",
    title: "콜라를 드립니다.",
    situation: "발송 대기",
    numOfShipments: 550,
    numOfSuccess: 0,
    numOfFailures: 0,
    registrationDateTime: "2023-07-01  19:25:33",
    manager: "이중재",
  },
  {
    num: 4,
    creationDateTime: "2023-07-12  12:00",
    title: "핸드폰 추천 이벤트",
    situation: "취소 완료",
    numOfShipments: 420,
    numOfSuccess: 0,
    numOfFailures: 0,
    registrationDateTime: "2023-07-01  12:55:21",
    manager: "이중재",
  },
  {
    num: 3,
    creationDateTime: "2023-06-08  12:30",
    title: "점심 핫타임 이벤트2",
    situation: "발송 완료",
    numOfShipments: 350,
    numOfSuccess: 196,
    numOfFailures: 154,
    registrationDateTime: "2023-06-05  11:41:55",
    manager: "이중재",
  },
  {
    num: 2,
    creationDateTime: "2023-05-18  12:30",
    title: "점심 핫타임 이벤트",
    situation: "발송 완료",
    numOfShipments: 280,
    numOfSuccess: 166,
    numOfFailures: 214,
    registrationDateTime: "2023-05-15  05:55:22",
    manager: "이중재",
  },
  {
    num: 1,
    creationDateTime: "2023-05-20  12:30",
    title: "점심 핫타임 이벤트",
    situation: "발송 완료",
    numOfShipments: 240,
    numOfSuccess: 255,
    numOfFailures: 15,
    registrationDateTime: "2023-05-11  14:22:44",
    manager: "이중재",
  },
];
const PushTable = ({
  handleClickOnLink,
}: {
  handleClickOnLink: () => void;
}) => {
  return (
    <div className="bg-[white] w-full text-[14px] h-full">
      <div className="grid grid-cols-9 text-center bg-[#F1F3F6]">
        {tabs.map((title, index) => (
          <div key={index} className={`text-[#4B505D] py-[20px] `}>
            {title}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-9 text-center  text-[#A3A6AB] border-b-[1px] border-b-[#F1F3F6]"
        >
          <div className="flex py-[10px] items-center justify-center border-x-[1px] border-x-[#F1F3F6]">
            {row.num}
          </div>
          <div className="flex flex-col py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            {row.creationDateTime}
          </div>

          <div
            onClick={handleClickOnLink}
            className="flex items-center justify-center py-[10px] underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]"
          >
            {row.title}
          </div>

          <div className="flex items-center justify-center py-[10px] underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]">
            {row.situation}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.numOfShipments === 0 ? "-" : row.numOfShipments}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.numOfSuccess === 0 ? "-" : row.numOfSuccess}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.numOfFailures === 0 ? "-" : row.numOfFailures}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.registrationDateTime}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.manager}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PushTable;
