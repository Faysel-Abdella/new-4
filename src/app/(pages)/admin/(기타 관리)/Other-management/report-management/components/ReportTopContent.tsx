import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React, { useState } from "react";

const ReportTopContent = ({
  label1,
  option2,
}: {
  label1: string;
  option2: string[];
}) => {
  const [radioGroups, setRadioGroups] = useState({
    group1: "전체",
    group2: option2[0],
  });

  const handleChange = (group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  };
  const width = option2.length * 100;
  return (
    <div className="flex flex-col gap-4">
      {/* first content */}
      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[510px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">{label1}</span>

        <RadioButton
          options={["전체", "설정"]}
          selectedValue={radioGroups.group1}
          onChange={(value) => {
            handleChange("group1", value);
          }}
          optionStyles="flex  flex-col gap-2 text-[14px] font-[400] text-[#333333]"
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
      <div>
        <div
          className={`flex flex-1 justify-start items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[${width}px] gap-[24px]`}
        >
          <span className="text-[14px] font-[400] text-[#333333]">상태</span>

          <RadioButton
            options={option2}
            selectedValue={radioGroups.group2}
            onChange={(value) => {
              handleChange("group2", value);
            }}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
      </div>
      {/* third content */}

      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
        <div className="flex gap-3">
          <SearchInput placeholder="검색어를 입력해주세요" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ReportTopContent;
