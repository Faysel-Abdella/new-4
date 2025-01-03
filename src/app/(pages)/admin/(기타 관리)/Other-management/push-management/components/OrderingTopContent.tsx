import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React from "react";

const OrderingTopContent = () => {
  const dropDownOptions = [
    {
      key: "1",
      label: "이름",
    },
    {
      key: "2",
      label: "사업자명",
    },
    {
      key: "3",
      label: "전호번호",
    },
  ];
  return (
    <div className="space-y-[20px]">
      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[580px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">기간</span>
        <DropDown
          options={[
            { key: "1", label: "발송일" },
            { key: "2", label: "발송일" },
            { key: "3", label: "발송일" },
          ]}
          defaultSelectedKeys={"1"}
          selectStyles="w-[125px] text-[14px] font-[400] text-[#333333]"
          insideStyles="text-[14px] font-[400] text-[#333333]"
          selectedItemRadius="rounded-[100px]"
        />
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
      <div className="flex gap-[30px]">
        <div className="flex  items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[340px]  gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">
            계정 상태
          </span>
          <RadioButton
            options={["전체", "설정", "종료"]}
            selectedValue="전체"
            onChange={() => {}}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
        <div className="flex  items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[340px]  gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">구분</span>
          <RadioButton
            options={["전체", "카카오", "네이버"]}
            selectedValue="전체"
            onChange={() => {}}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
      </div>
      <div className="flex  justify-between items-center pr-[30px]">
        <div className="flex   items-center rounded-[100px] bg-white  py-[10px] px-[30px] w-auto max-w-[500px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
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

        <Button
          label={"등록"}
          backgroundColor={"bg-[#404251]"}
          borderRadius={"rounded-full"}
          textStyle={"text-[14px] text-white"}
          width="w-[60px]"
        />
      </div>
    </div>
  );
};

export default OrderingTopContent;
