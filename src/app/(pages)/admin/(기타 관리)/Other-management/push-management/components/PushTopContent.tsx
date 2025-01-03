import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React from "react";

const PushTopContent = () => {
  const dropDownOptions = [
    { key: "1", label: "발송일" },
    { key: "2", label: "발송일" },
    { key: "3", label: "발송일" },
  ];
  return (
    <div className="space-y-[20px]">
      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] max-w-[578px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">기간</span>
        <DropDown
          options={dropDownOptions}
          defaultSelectedKeys={"1"}
          selectStyles=" text-[14px] font-[400] text-[#333333]"
          insideStyles="text-[14px] font-[400] text-[#333333]"
          selectedItemRadius="rounded-[100px]"
        />
        <RadioButton
          options={["전체", "설정"]}
          selectedValue="전체"
          onChange={() => {}}
          optionStyles="flex flex-col gap-[24px] text-[14px] font-[400] text-[#333333]"
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
      <div className="flex  items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[440px]  gap-[20px]">
        <span className="text-[14px] font-[400] text-[#333333]">상태</span>
        <RadioButton
          options={["전체", "발송 대기", "발송 완료", "취소"]}
          selectedValue="전체"
          onChange={() => {}}
          optionStyles="flex flex-col gap-[20px] text-[14px] font-[400] text-[#333333]"
        />
      </div>
      <div className="flex   items-center rounded-[100px] bg-white  py-[20px] px-[30px] w-auto max-w-[340px] gap-[30px]">
        <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
        <SearchInput placeholder="검색어를 입력해주세요" onClick={() => {}} />
      </div>
    </div>
  );
};

export default PushTopContent;
