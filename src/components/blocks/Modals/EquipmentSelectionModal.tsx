"use client";
import React, { useState } from "react";
import { CloseIcon } from "./Icons";
const EquipmentClassification = [
  "미니 017",
  "미니 020",
  "미니 030",
  "미니 035",
  "02(공투)",
  "03(공삼)",
  "06(공육)",
  "08(공팔)",
  "10(텐)",
  "기타",
];

const Attachments = [
  "브레이크",
  "크리샤",
  "쪽버켓",
  "채버켓",
  "대버켓",
  "틸트 로테이터",
  "집게",
  "지게발",
  "면삭기",
  "회전 돌집게",
  "리퍼",
  "마이티백",
  "기타",
];

const EquipmentSelectionModal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAttachment, setActiveAttachment] = useState<number | null>(null);
  return (
    <div className="pt-4 w-[899px] bg-white space-y-[20px] rounded-t-[12px]">
      <div className="flex items-center justify-between px-4 relative">
        <p className="font-bold text-center flex-1">장비 선택</p>
        <div className="absolute right-4">
          <CloseIcon />
        </div>
      </div>

      <div className="h-[1px]  bg-grey-border my-4"></div>
      <div className="px-4 space-y-[20px]">
        <p className="text-md font-semibold mb-2">장비 분류</p>
        <div className="grid grid-cols-3 gap-[20px]">
          {EquipmentClassification.map((equipment, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`border rounded-md p-2 text-center transition ${
                activeIndex === index
                  ? "border-main-color text-main-color"
                  : "border-grey-light text-gray-700"
              } hover:border-main-color hover:text-main-color`}
            >
              {equipment}
            </button>
          ))}
        </div>
      </div>
      <div className="h-[5px] bg-grey-light"></div>
      <div className="px-4 space-y-[20px]">
        <div className="flex gap-[8px]">
          <p className="text-[16px]">어태치먼트</p>
          <p className="text-[13px]">중복선택가능</p>
        </div>
        <div className="grid grid-cols-3 gap-[20px]">
          {Attachments.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveAttachment(index)}
              className={`border rounded-md p-2 text-center transition ${
                activeAttachment === index
                  ? "border-main-color text-main-color"
                  : "border-grey-light text-gray-700"
              } hover:border-main-color hover:text-main-color`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="flex w-full">
        <button className="border-t-[1px] border-grey-light p-4 space-y-[10px] w-1/3">
          초기화
        </button>
        <button className="border-t-[1px] border-grey-light bg-main-color text-white p-4 space-y-[10px] w-2/3">
          선택 완료
        </button>
      </div>
    </div>
  );
};

export default EquipmentSelectionModal;
