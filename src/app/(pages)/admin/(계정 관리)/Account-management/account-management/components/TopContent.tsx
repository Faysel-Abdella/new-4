import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import React, { useState } from "react";

const TopContent = ({ onClick }: { onClick: () => void }) => {
  const [radioGroups, setRadioGroups] = useState({
    group1: "",
    group2: "",
    group3: "",
  });

  const handleChange = (group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  };
  return (
    <div className="flex  w-full justify-between">
      <div className="flex gap-4">
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[5px] px-[30px] w-auto max-w-[400px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">
            소속/부서명
          </span>
          <span className="text-[14px] font-[400] text-[#ABAFB7]">
            서비스기획팀
          </span>
        </div>

        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[5px] px-[30px] w-auto max-w-[500px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">상태</span>
          <RadioButton
            options={["사용", "미사용"]}
            selectedValue={radioGroups.group1}
            onChange={(value) => handleChange("group1", value)}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
          <div className="flex justify-center items-center gap-[5px] text-[#333333]">
            <span className="py-[14px] px-[17px] bg-[#F2F3F5] text-[14px] font-[400] rounded-[100px]">
              수정
            </span>
          </div>
        </div>
      </div>

      <Button
        label={"계정 추가"}
        backgroundColor={"bg-[#404251]"}
        borderRadius={"rounded-[100px]"}
        textStyle={"text-[14px] font-[400] text-white"}
        padding="py-7 px-8"
        width="w-[120px]"
        onPress={onClick}
      />
    </div>
  );
};

export default TopContent;
