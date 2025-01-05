import React from "react";
import { MultipleInputs } from "../../../(회원 관리)/Membership-Management/membership-management/equipmentExponent/components/MultipleInput";
import MyPageInformation from "./MyPageInformation";
import { Button } from "@/src/components/blocks/buttons/Button";

const BasicInformation = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-white gap-4 py-8  px-9 rounded-[10px]">
      <div className="w-full pb-4">
        <div className="w-[678px] flex flex-col items-start gap-3 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            기본 정보
          </span>

          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
              {"사업자명"}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {"제일중기"}
            </span>
          </div>
          <MultipleInputs
            displayType="text"
            type={"text"}
            firstLabel={"회원구분"}
            secondLabel={"사업자번호"}
            firstPlaceholder={"기업"}
            secondPlaceholder={"0000000000"}
          />

          <MultipleInputs
            displayType="text"
            type={"text"}
            firstLabel={"대표자"}
            secondLabel={"담당자명"}
            firstPlaceholder={"홍길동"}
            secondPlaceholder={"김철수"}
          />

          <MultipleInputs
            displayType="text"
            type={"text"}
            secondLabel={"휴대폰 번호"}
            firstLabel={"사무실번호"}
            firstPlaceholder={"02-1234-5678"}
            secondPlaceholder={"010-1111-2222"}
          />

          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
              {"주소"}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {"서울특별시 금천구 가산디지털로 1"}
            </span>
          </div>
          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
              {"사업자등록증"}
            </span>
            <span className="bg-[#FFF0F0] w-[48px] h-[48px]"></span>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#E4E5EA]"></div>
      <MyPageInformation />
      <div className="flex items-center justify-center w-[106px]">
        <Button
          label={"저장"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white"}
        />
      </div>
    </div>
  );
};

export default BasicInformation;
