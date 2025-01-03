import { Button } from "@/src/components/blocks/buttons/Button";
import React from "react";

const Instructions = () => {
  return (
    <div className="flex flex-col justify-center space-y-[40px]">
      <div className="px-[24px] py-[20px] w-full bg-white rounded-[10px]">
        <div className="border-[1px] border-[#E4E5EA] h-[128px] rounded-[8px] px-[16px] py-[12px] text-[13px] text-[#4B505D]">
          <p>안녕하세요 장비파트너입니다.</p>
          <p>견적 문의, 명함 교환 금지 등 알림 영역입니다.</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Button
          label={"수정"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-[14px] text-white w-[148px]"}
        />
      </div>
    </div>
  );
};

export default Instructions;
