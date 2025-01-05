"use client";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React, { useState } from "react";
import { DropDownOptionsType } from "./type";

const CustomerSupportTopContent: React.FC<DropDownOptionsType> = ({
  option,
}) => {
  const [selectedFirst, setSelectedFirst] = useState("전체");
  const [selectedSecond, setSelectedSecond] = useState("전체");
  return (
    <div className="space-y-[20px]">
      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[500px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">등록일</span>
        <RadioButton
          options={["전체", "설정"]}
          selectedValue={selectedFirst}
          onChange={(value) => setSelectedFirst(value)}
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
      <div className="flex  items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[340px]  gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">등록일</span>
        <RadioButton
          options={option.map((opt) => opt.label)}
          selectedValue={selectedSecond}
          onChange={(value) => setSelectedSecond(value)}
          optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
        />
      </div>
      <div className="flex  items-center rounded-[100px] bg-white  py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
        <SearchInput placeholder="검색어를 입력해주세요" onClick={() => {}} />
      </div>
    </div>
  );
};

export default CustomerSupportTopContent;
