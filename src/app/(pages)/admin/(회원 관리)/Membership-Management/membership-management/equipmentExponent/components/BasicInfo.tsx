import { Button } from "@/src/components/blocks/buttons/Button";
import React from "react";
import { MultipleInputs } from "./MultipleInput";

const BasicInfo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="w-full flex flex-col justify-start items-center bg-white gap-4 py-8  px-9 rounded-[10px]">
        <div className="w-full pb-4">
          <div className="w-[678px] flex flex-col items-start gap-3 ">
            <span className="text-[14px] font-[700] text-[#ABAFB7]">
              상세 정보
            </span>

            <MultipleInputs
              displayType="text"
              type={"text"}
              firstLabel={"승인요청일시"}
              secondLabel={"최근 접속"}
              firstPlaceholder={"2024-01-15 12:12:20"}
              secondPlaceholder={"2024-01-15 12:12:20"}
            />

            <MultipleInputs
              displayType="text"
              type={"text"}
              firstLabel={"구분"}
              secondLabel={"회원 구분"}
              firstPlaceholder={"카카오"}
              secondPlaceholder={"기업"}
            />

            <MultipleInputs
              displayType="text"
              type={"text"}
              secondLabel={"휴대폰 번호"}
              firstLabel={"이름"}
              firstPlaceholder={"홍길동"}
              secondPlaceholder={"개인"}
            />

            <div className="flex-1 flex gap-2">
              <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
                {"주소"}
              </span>
              <span className="font-[400] text-[14px] text-[#333333]">
                {"서울특별시 금천구 가산디지털로~~~"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          label={"거절"}
          backgroundColor={"bg-[#A3A6AB]"}
          borderRadius={"rounded-[5px]"}
          textStyle={" font-[400] text-[14px] text-white"}
          width="w-[106px]"
          onPress={() => {}}
        />

        <Button
          label={"저장"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={" font-[400] text-[14px] text-white"}
          width="w-[106px]"
          onPress={() => {}}
        />
      </div>
    </div>
  );
};

export default BasicInfo;
