"use client";
import React, { useState } from "react";
import { EquipmentBusinessType } from "./type";

const tabs = [
  "사업자명",
  "회원구분",
  "대표자",
  "사무실",
  "휴대폰",
  "보유장비",
  "보유기사",
  "구분",
  "작업지역",
];

const data: EquipmentBusinessType[] = [
  {
    businessName: "-",
    classifiacation: "개인",
    exponent: "이중재",
    office: ["041-712-1146", "010-4012-1146"],
    ownedEquipment: "굴착기 02LC 외 2건",
    articlesHeld: "김굴착 (11년)외 2건",
    division: ["임대 (장비 + 기사)", "렌탈 (장비)"],
    workArea: ["인천 전체", "서울 광진구", "경기 평택시", "충남 부여군"],
  },
  {
    businessName: "(주) 세종스키드로더",
    classifiacation: "개인",
    exponent: "이중재",
    office: ["041-712-1146", "010-4012-1146"],
    ownedEquipment: "굴착기 02LC 외 2건",
    articlesHeld: "김굴착 (11년)외 2건",
    division: ["임대 (장비 + 기사)", "렌탈 (장비)"],
    workArea: ["인천 전체", "서울 광진구", "경기 평택시", "충남 부여군"],
  },
  {
    businessName: "여주 지게차",
    classifiacation: "개인",
    exponent: "이중재",
    office: ["041-712-1146", "010-4012-1146"],
    ownedEquipment: "굴착기 02LC 외 2건",
    articlesHeld: "김굴착 (11년)외 2건",
    division: ["임대 (장비 + 기사)", "렌탈 (장비)"],
    workArea: ["인천 전체", "서울 광진구", "경기 평택시", "충남 부여군"],
  },
  {
    businessName: "포크맨",
    classifiacation: "개인",
    exponent: "이중재",
    office: ["041-712-1146", "010-4012-1146"],
    ownedEquipment: "굴착기 02LC 외 2건",
    articlesHeld: "김굴착 (11년)외 2건",
    division: ["임대 (장비 + 기사)", "렌탈 (장비)"],
    workArea: ["인천 전체", "서울 광진구", "경기 평택시", "충남 부여군"],
  },
  {
    businessName: "-",
    classifiacation: "개인",
    exponent: "이중재",
    office: ["041-712-1146", "010-4012-1146"],
    ownedEquipment: "굴착기 02LC 외 2건",
    articlesHeld: "김굴착 (11년)외 2건",
    division: ["임대 (장비 + 기사)", "렌탈 (장비)"],
    workArea: ["인천 전체", "서울 광진구", "경기 평택시", "충남 부여군"],
  },
];

const EquipmentBusinessTable = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="w-full bg-white px-[24px] py-[20px] space-y-[20px] rounded-[10px]">
      <p className="text-[#333333] text-[16px]">
        N건의 게시물이 검색되었습니다
      </p>
      <div className="bg-[white] w-full text-[14px] h-full">
        <div className="grid grid-cols-9 text-center bg-[#F1F3F6]">
          <div className="flex items-center justify-center border-l-[1px] border-l-[#F1F3F6]">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] cursor-pointer "
            />
          </div>
          {tabs.map((title, index) => {
            if (index !== 3 && index !== 4) {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center text-[#4B505D] border-r-[1px] border-r-[#E9E9E9]"
                >
                  {title}
                </div>
              );
            }

            if (index === 3) {
              return (
                <div
                  key={index}
                  className="text-[#4B505D] border-b-[1px] border-b-[#E9E9E9] border-r-[1px] border-r-[#E9E9E9] py-[20px]"
                >
                  <p className="flex items-center justify-center border-b-[1px] border-b-[#E9E9E9]">
                    {title}
                  </p>
                  <p className="flex items-center justify-center ">{title}</p>
                </div>
              );
            }

            return null;
          })}
        </div>

        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-9 text-center  text-[#A3A6AB] border-b-[1px] border-b-[#F1F3F6]"
          >
            <div className="flex py-[10px] items-center justify-center border-x-[1px] border-x-[#F1F3F6]">
              <input
                type="checkbox"
                className="w-[16px] h-[16px] cursor-pointer"
              />
            </div>
            <div className="flex py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
              {row.businessName}
            </div>
            <div className="flex flex-col py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
              <p>{row.classifiacation}</p>
            </div>
            <div className="flex flex-col py-[10px] items-center justify-center underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]">
              <p>{row.articlesHeld}</p>
            </div>
            <div className="flex flex-col items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
              <p className="w-full flex items-center justify-center border-b-[1px] border-b-[#E9E9E9]">
                {row.office[0]}
              </p>
              <p className="w-full flex items-center justify-center ">
                {row.office[1]}
              </p>
            </div>

            <div className="flex items-center justify-center px-[10px] py-[10px] underline decoration-main-light-color text-main-light-color cursor-pointer  border-r-[1px] border-r-[#F1F3F6]">
              {row.division}
            </div>
            <div className="flex items-center justify-center py-[10px] underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]">
              {row.exponent}
            </div>
            <div className="flex items-center justify-center py-[10px]   border-r-[1px] border-r-[#F1F3F6]">
              {row.ownedEquipment}
            </div>
            <div className="flex flex-col items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
              {row.workArea.map((area, index) => (
                <p key={index}>{area}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-[14px] text-[#4B505D] gap-[20px]">
        {Array.from({ length: 10 }, (_, index) => (
          <p
            key={index}
            onClick={() => setActivePage(index + 1)} // Set active page on click
            className={`cursor-pointer  ${
              activePage === index + 1 ? "text-main-color " : ""
            }`}
          >
            {index + 1}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EquipmentBusinessTable;
