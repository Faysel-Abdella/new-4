"use client";
import React from "react";
import TextInput from "@/src/components/blocks/inputs/Input";
import { Button } from "@/src/components/blocks/buttons/Button";

const MultipleInputs = ({
  displayType = "input",
  type,
  firstLabel,
  secondLabel,
  secondPlaceholder,
  firstPlaceholder,
}: {
  type: string;
  firstLabel: string;
  secondLabel: string;
  firstPlaceholder: string;
  secondPlaceholder: string;
  displayType?: "input" | "text";
}) => {
  return (
    <div className="flex w-full gap-5">
      {displayType === "input" ? (
        <>
          <div className="flex-1">
            <TextInput
              type={type}
              label={firstLabel}
              placeholder={firstPlaceholder}
            />
          </div>
          <div className="flex-1">
            <TextInput
              type={type}
              label={secondLabel}
              placeholder={secondPlaceholder}
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
              {firstLabel}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {firstPlaceholder}
            </span>
          </div>
          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
              {secondLabel}
            </span>
            <span className="font-[400] text-[14px] text-[#333333]">
              {secondPlaceholder}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

const ExponentNextPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 pt-6">
      <div className="w-full flex flex-col justify-start items-center bg-white gap-4 py-8  px-9 rounded-[10px]">
        <div className="w-full pb-4 border-b-1 border-[#D9D9D9]">
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
              secondLabel={"대표자명"}
              firstLabel={"사업자명"}
              firstPlaceholder={"아산기업"}
              secondPlaceholder={"홍길동"}
            />

            <MultipleInputs
              displayType="text"
              type={"text"}
              secondLabel={"휴대폰 번호"}
              firstLabel={"사무실번호"}
              firstPlaceholder={"0211112222"}
              secondPlaceholder={"01011112222"}
            />

            <div className="flex-1 flex gap-2">
              <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
                {"주소"}
              </span>
              <span className="font-[400] text-[14px] text-[#333333]">
                {"서울특별시 금천구 가산디지털로~~~"}
              </span>
            </div>

            <div className="flex w-full text-[14px] font-[400] text-[#ABAFB7] items-center">
              <span className="w-[100px]">계좌 사본</span>
              <div className="flex gap-3">
                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-[6px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-4 border-b-1 border-[#D9D9D9]">
          <div className="w-[678px] flex flex-col items-start gap-3 ">
            <span className="text-[14px] font-[700] text-[#ABAFB7]">
              정산 정보
            </span>

            <MultipleInputs
              displayType="text"
              type={"text"}
              firstLabel={"은행명"}
              secondLabel={"예금주명"}
              firstPlaceholder={"신한은행"}
              secondPlaceholder={"홍길동"}
            />

            <MultipleInputs
              displayType="text"
              type={"text"}
              firstLabel={"계좌번호"}
              secondLabel={"예금주명"}
              firstPlaceholder={"0000000000"}
              secondPlaceholder={"홍길동"}
            />
          </div>
        </div>

        <div className="w-full">
          <div className="w-[678px] flex flex-col items-start gap-3 ">
            <span className="text-[14px] font-[700] text-[#ABAFB7]">
              기타 서류
            </span>

            <div className="flex w-full text-[14px] font-[400] text-[#ABAFB7] items-center">
              <span className="w-[100px]">기타 서류</span>
              <div className="flex gap-3">
                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-[6px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center gap-3 ">
        <Button
          label={"거절"}
          backgroundColor={"bg-[#A3A6AB]"}
          borderRadius={"rounded-[5px]"}
          textStyle={" font-[400] text-[14px] text-white"}
          width="w-[106px]"
          onPress={() => {}}
        />

        <Button
          label={"승인"}
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

export default ExponentNextPage;
