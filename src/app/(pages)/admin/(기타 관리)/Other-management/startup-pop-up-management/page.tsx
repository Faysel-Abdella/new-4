"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React, { useState } from "react";
import BannerTable from "../components/BannerTable";

const StartupPopupManagement = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="space-y-[20px]">
      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[500px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">등록일</span>
        <RadioButton
          options={["전체", "설정"]}
          selectedValue="전체"
          onChange={() => {}}
          optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
        />
        <div className="flex justify-center items-center gap-[5px] text-[#333333]">
          <span className="py-[14px] px-[17px] bg-[#F2F3F5] text-[14px] font-[400] rounded-[100px]">
            2024-01-01
          </span>
          <span>~</span>
          <span className="py-[14px] px-[17px] bg-[#F2F3F5] text-[14px] font-[400] rounded-[100px]">
            2024-01-01
          </span>
        </div>
      </div>
      <div className="flex  items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[320px]  gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">등록일</span>
        <RadioButton
          options={["전체", "설정", "종료"]}
          selectedValue="전체"
          onChange={() => {}}
          optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
        />
      </div>
      <div className="flex  items-center rounded-[100px] bg-white  py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
        <SearchInput placeholder="검색어를 입력해주세요" onClick={() => {}} />
      </div>

      <div className="bg-white rounded-[10px] px-[24px] py-[20px] space-y-[20px]">
        <div className="flex  items-center justify-between">
          <p>N건의 게시물이 검색되었습니다</p>
          <div>
            <Button
              label={"등록"}
              backgroundColor={"bg-[#404251]"}
              borderRadius={"rounded-full"}
              textStyle={"text-[14px]  text-white"}
            />
          </div>
        </div>
        <BannerTable />
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
    </div>
  );
};

export default StartupPopupManagement;
