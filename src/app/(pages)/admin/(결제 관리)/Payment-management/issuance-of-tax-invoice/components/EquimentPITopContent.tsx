"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import React from "react";

const EquimentPITopContent = () => {
  const description = [
    { key: "1", items: "-세금계산서는전자세금계산서를사용하고있습니다" },
    {
      key: "2",
      items:
        "-세금계산서는발행예정일자다음날00시에자동발행됩니다. (Ex, 2월15일설정시2월16일00시에발행일자를전일자로자동발행)",
    },
    {
      key: "3",
      items: "-발행실패시사유를확인후재시도가가능합니다",
    },
    {
      key: "4",
      items: "-수정세금계산서, 마이너스세금계산서는별도로발행을해주셔야합니다.",
    },
  ];
  return (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex flex-col  p-5 bg-[#FFFFFF] rounded-[10px] gap-[10px] ">
        <div className="w-fit px-[16px] py-[14px] bg-[#F1F3F6] rounded-[100px]">
          <p className="text-[18px] text-[#333333]">세금계산서 발행 안내</p>
        </div>
        <div className="flex  flex-col">
          {description.map((item) => (
            <p key={item.key} className="text-sm text-[#80808E]">
              {item.items}
            </p>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center py-[10px] px-[16px] bg-white rounded-[100px]">
          <p className="min-w-[54px] text-sm text-[#333333]">기간</p>
          <div className="flex items-center gap-[5px] ">
            <div className="py-[12px] px-[16px] rounded-[100px] bg-[#F2F3F5]">
              <p className=" text-sm text-[#333333]">2024-01-01</p>
            </div>

            <span>~</span>
            <div className="py-[12px] px-[16px] rounded-[100px] bg-[#F2F3F5]">
              <p className=" text-sm text-[#333333]">2024-01-01</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[10px]">
          <Button
            label="세금계산서 신규발행"
            backgroundColor="bg-[#404251]"
            textStyle="text-sm text-white"
            padding="py-8 px-7"
            borderRadius="rounded-[100px]"
          />
          <Button
            label="Excel 다운로드"
            backgroundColor="bg-[#404251]"
            textStyle="text-sm text-white"
            padding="py-8 px-7"
            borderRadius="rounded-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default EquimentPITopContent;
