import React from "react";
import { MultipleInputs } from "../../../(회원 관리)/Membership-Management/membership-management/equipmentExponent/components/MultipleInput";
import MyPageInformation from "./MyPageInformation";
import { Button } from "@/src/components/blocks/buttons/Button";

const SecondBasicInformation = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-white gap-4 py-8  px-9 rounded-[10px]">
      <div className="w-full pb-4">
        <div className="w-[678px] flex flex-col items-start gap-3 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            기본 정보
          </span>

          {/* <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
              {"대표자"}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {"홍길동"}
            </span>
          </div> */}
          <MultipleInputs
            displayType="text"
            type={"text"}
            firstLabel={"대표자"}
            secondLabel={"회원구분"}
            firstPlaceholder={"홍길동"}
            secondPlaceholder={"개인"}
          />

          <MultipleInputs
            displayType="text"
            type={"text"}
            firstLabel={"휴대폰 번호"}
            secondLabel={"주소"}
            firstPlaceholder={"010-1111-2222"}
            secondPlaceholder={"서울특별시 금천구 가산디지털로 1"}
          />
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

export default SecondBasicInformation;
