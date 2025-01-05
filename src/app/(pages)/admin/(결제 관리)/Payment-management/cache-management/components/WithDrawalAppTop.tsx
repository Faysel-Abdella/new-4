import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React, { useState } from "react";

const WithDrawalAppTop = () => {
  const [radioGroups, setRadioGroups] = useState({
    group1: "",
    group2: "",
    group3: "",
  });

  const handleChange = (group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex mt-1 justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[450px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">상태</span>
        <RadioButton
          options={["전체", "신청중", "승인", "거절"]}
          selectedValue={radioGroups.group2}
          onChange={(value) => handleChange("group2", value)}
          optionStyles="flex flex-col gap-12 text-[14px] font-[400] text-[#333333]"
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center rounded-[100px] bg-[white] mt-5 py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">검색어</span>

          <div className="flex gap-3 ">
            <SearchInput
              placeholder="검색어를 입력해주세요"
              onClick={() => {}}
            />
          </div>
        </div>
        <Button
          label="Excel 다운로드"
          backgroundColor="bg-[#404251]"
          textStyle="text-sm text-white"
          borderRadius="rounded-[100px]"
          padding="py-7 px-8"
          width="w-[126px]"
        />
      </div>
    </div>
  );
};

export default WithDrawalAppTop;
