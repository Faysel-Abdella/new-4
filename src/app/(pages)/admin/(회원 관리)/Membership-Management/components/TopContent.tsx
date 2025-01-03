"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";

import React, { useState } from "react";

const TopContent = ({
  onPressExcelButton,
  onPressLinkButton,
}: {
  onPressExcelButton: () => void;
  onPressLinkButton: () => void;
}) => {
  const dropDownOptions = [
    {
      key: "1",
      label: "사업자명",
    },
    {
      key: "2",
      label: "사업자명",
    },
    {
      key: "4",
      label: "사업자명",
    },
  ];
  const [radioGroups, setRadioGroups] = useState({
    group1: '',
    group2: '',
    group3:''
  });

  const handleChange = (group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  };
  return (
    <div className="flex flex-col gap-4">
      {/* first content */}
      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[500px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">등록일</span>
        <RadioButton
          options={["전체", "설정"]}
          selectedValue={radioGroups.group1}
        onChange={(value) => handleChange('group1', value)}
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
      {/* second content */}
      <div className="flex gap-3">
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">
            계정 상태
          </span>
          <RadioButton
            options={["전체", "정상", "정지"]}
            selectedValue={radioGroups.group2}
        onChange={(value) => handleChange('group2', value)}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">구분</span>
          <RadioButton
            options={["전체", "카카오", "네이버"]}
            selectedValue={radioGroups.group3}
        onChange={(value) => handleChange('group3', value)}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
      </div>
      {/* third content */}
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[450px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">등록일</span>
          <div className="flex gap-3">
            <DropDown
              options={dropDownOptions}
              defaultSelectedKeys={"1"}
              selectStyles="w-[105px] text-[14px] font-[400] text-[#333333]"
              insideStyles="text-[14px] font-[400] text-[#333333]"
              selectedItemRadius="rounded-[100px]"
            />

            <SearchInput
              placeholder="검색어를 입력해주세요"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            label={"가입신청현황"}
            backgroundColor={"bg-[#404251]"}
            borderRadius={"rounded-[100px]"}
            textStyle={"text-[14px] font-[400] text-white"}
            padding="py-7 px-8"
            onPress={() => {
              onPressLinkButton();
            }}
          />
          <Button
            label={"Excel 다운로드"}
            backgroundColor={"bg-[#404251]"}
            borderRadius={"rounded-[100px]"}
            textStyle={"text-[14px] font-[400] text-white"}
            padding="py-7 px-8"
            onPress={() => onPressExcelButton}
          />
        </div>
      </div>
    </div>
  );
};

export default TopContent;
