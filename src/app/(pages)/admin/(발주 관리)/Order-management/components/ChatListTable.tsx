"use client";
import React, { useState } from "react";
import { ChatListType } from "./type";
import ChatModal from "@/src/components/blocks/chat/chatModal";
import { useDisclosure } from "@nextui-org/react";

const tabs = [
  "번호",
  "생성일시",
  "발주자",
  "대표자(발주)",
  "장비사업자",
  "대표자(장비)",
  "상세보기",
];
const data: ChatListType[] = [
  {
    num: 10,
    creationDate: "2023-01-08",
    creationTime: "12:32:22",
    sender: "(주)한번트레이딩",
    representative: "이종재",
    equipmentOperator: "아산장기",
    equipmentRepresentative: "홍길동",
    details: "상세보기",
  },
  {
    num: 9,
    creationDate: "2023-01-07",
    creationTime: "11:15:00",
    sender: "(주)한번트레이딩",
    representative: "박지성",
    equipmentOperator: "서울중앙",
    equipmentRepresentative: "김철수",
    details: "상세보기",
  },
  {
    num: 8,
    creationDate: "2023-01-06",
    creationTime: "14:45:10",
    sender: "(주)한번트레이딩",
    representative: "이영표",
    equipmentOperator: "부산지점",
    equipmentRepresentative: "최유리",
    details: "상세보기",
  },
  {
    num: 7,
    creationDate: "2023-01-06",
    creationTime: "14:45:10",
    sender: "(주)한번트레이딩",
    representative: "이영표",
    equipmentOperator: "부산지점",
    equipmentRepresentative: "최유리",
    details: "상세보기",
  },
  {
    num: 6,
    creationDate: "2023-01-06",
    creationTime: "14:45:10",
    sender: "(주)한번트레이딩",
    representative: "이영표",
    equipmentOperator: "부산지점",
    equipmentRepresentative: "최유리",
    details: "상세보기",
  },
  {
    num: 5,
    creationDate: "2023-01-06",
    creationTime: "14:45:10",
    sender: "(주)한번트레이딩",
    representative: "이영표",
    equipmentOperator: "부산지점",
    equipmentRepresentative: "최유리",
    details: "상세보기",
  },

  {
    num: 4,
    creationDate: "2023-01-06",
    creationTime: "14:45:10",
    sender: "(주)한번트레이딩",
    representative: "이영표",
    equipmentOperator: "부산지점",
    equipmentRepresentative: "최유리",
    details: "상세보기",
  },
  {
    num: 3,
    creationDate: "2023-01-06",
    creationTime: "14:45:10",
    sender: "(주)한번트레이딩",
    representative: "이영표",
    equipmentOperator: "부산지점",
    equipmentRepresentative: "최유리",
    details: "상세보기",
  },
  {
    num: 2,
    creationDate: "2023-01-06",
    creationTime: "14:45:10",
    sender: "(주)한번트레이딩",
    representative: "이영표",
    equipmentOperator: "부산지점",
    equipmentRepresentative: "최유리",
    details: "상세보기",
  },
  {
    num: 1,
    creationDate: "2023-01-06",
    creationTime: "14:45:10",
    sender: "(주)한번트레이딩",
    representative: "이영표",
    equipmentOperator: "부산지점",
    equipmentRepresentative: "최유리",
    details: "상세보기",
  },
];

const ChatListTable = () => {
  const [selectedChatSender, setSelectedChat] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  // const seeDetails = (sender: string) => {
  // setSelectedChat(sender);
  // };

  return (
    <div className="bg-[white] w-full text-[14px]">
      <div className="grid grid-cols-7 text-center bg-[#F1F3F6]">
        {tabs.map((title, index) => (
          <div key={index} className={`text-[#4B505D] py-[20px] `}>
            {title}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div key={rowIndex}>
          <div
            key={rowIndex}
            className="grid grid-cols-7 text-center  text-[#A3A6AB] border-b-[1px] border-b-[#F1F3F6]"
          >
            <div className="flex py-[10px] items-center justify-center border-x-[1px] border-x-[#F1F3F6]">
              {row.num}
            </div>
            <div className="flex flex-col py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
              <p>{row.creationDate}</p>
              <p>{row.creationTime}</p>
            </div>
            <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
              {row.sender}
            </div>
            <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
              {row.representative}
            </div>
            <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
              {row.equipmentOperator}
            </div>
            <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
              {row.equipmentRepresentative}
            </div>
            <div
              onClick={() => {
                onOpen();
                setSelectedChat(row.sender);
              }}
              className="flex items-center justify-center py-[10px] underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]"
            >
              {row.details}
            </div>
          </div>
        </div>
      ))}
      <ChatModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        senderName={selectedChatSender}
        profileName={"발주자명"}
      />
    </div>
  );
};

export default ChatListTable;
