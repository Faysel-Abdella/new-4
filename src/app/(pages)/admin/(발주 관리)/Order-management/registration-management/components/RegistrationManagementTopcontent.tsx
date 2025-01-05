'use client'
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React, { useState } from "react";

const RegistrationManagementTopcontent = () => {
  const [radioGroups, setRadioGroups] = useState({
    group1: "",
    group2: "",
  });

  const handleChange = (group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-6 bg-white py-[15px] px-[30px] rounded-[100px] w-fit">
        <p className="min-w-[54px] text-sm text-[#333333]">등록일</p>
        <RadioButton
          options={["전체", "설정"]}
          selectedValue={radioGroups.group1}
          onChange={(value) => {
            handleChange("group1", value);
          }}
          optionStyles="flex  flex-col gap-2 text-[14px] font-[400] text-[#333333]"
        />
        <div className="flex items-center gap-[4px]">
          <div className="py-[12px] px-[16px] rounded-[100px] bg-[#F2F3F5]">
            <p className="text-sm tetx-[#333333]">2024-01-01</p>
          </div>
          <span>~</span>
          <div className="py-[12px] px-[16px] rounded-[100px] bg-[#F2F3F5]">
            <p className="text-sm tetx-[#333333]">2024-01-01</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6 bg-white py-[25px] px-[30px] rounded-[100px] w-fit">
        <p className="min-w-[54px] text-sm text-[#333333]">오더 상태</p>
        <RadioButton
          options={["전체", "모집중", "배차완료", "작업완료", "숨기기"]}
          selectedValue={radioGroups.group2}
          onChange={(value) => {
            handleChange("group2", value);
          }}
          optionStyles="flex  flex-col gap-2 text-[14px] font-[400] text-[#333333]"
        />
      </div>
      <div className="flex items-center gap-6 bg-white py-[25px] px-[30px] rounded-[100px] w-fit">
        {" "}
        <p className="min-w-[54px] text-sm text-[#333333]">검색어</p>
        <SearchInput placeholder="검색어를 입력해주세요" onClick={()=>{}}/>
      </div>
    </div>
  );
};

export default RegistrationManagementTopcontent;
