"use client";
import React from "react";
import TextInput from "../blocks/inputs/Input";
import { Button } from "../blocks/buttons/Button";

const ApplicationStatusForm = ({ formTitle = "title" }) => {
  return (
    <div>
      <div className="w-[679px] flex flex-col justify-center items-center bg-white gap-4 ">
        <div className="flex justify-center items-center border-b-1 border-[#D9D9D9] py-4 w-full">
          <span className="text-[16px] font-[700]">{formTitle}</span>
        </div>
        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            상세 정보
          </span>

          <div className="flex w-full gap-5">
            <div className="flex-1">
              <TextInput
                type={"text"}
                label="승인요청 일시"
                placeholder={"2024-01-15 12:12:20"}
              />
            </div>
            <div className="flex-1">
              <TextInput
                type={"text"}
                label="최근 접속"
                placeholder={"2024-01-15 12:12:20"}
              />
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="flex-1">
              <TextInput type={"text"} label="구분" placeholder={"카카오"} />
            </div>
            <div className="flex-1">
              <TextInput type={"text"} label="기업/개인" placeholder={"개인"} />
            </div>
          </div>

          <div className="flex w-full gap-5">
            <div className="flex-1">
              <TextInput type={"text"} label="ID" placeholder={"b14312"} />
            </div>
            <div className="flex-1">
              <TextInput type={"text"} label="이름" placeholder={"홍길동"} />
            </div>
          </div>

          <div className="flex w-full ">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="주소"
                labelWidth="w-[105px]"
                placeholder={"서울 금천구"}
              />
            </div>
          </div>

          <div className="flex w-full border-b-1 border-[#D9D9D9] pb-4">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="  휴대폰 번호"
                labelWidth="w-[105px]"
                placeholder={"02"}
              />
            </div>
          </div>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            마케팅 수신 동의
          </span>
          <div className="flex w-full text-[14px] font-[400] pb-4 border-b-1 border-[#D9D9D9] ">
            <span className="w-[105px]">상태</span>
            <div className="flex gap-4">
              <span>동의</span>
              <span className="text-[#429FFF] underline pb-1">변경</span>
            </div>
          </div>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            회원 상태
          </span>
          <div className="flex w-full text-[14px] font-[400] pb-4 border-b-1 border-[#D9D9D9] ">
            <span className="w-[105px]">상태</span>
            <div className="flex gap-4">
              <span>정상</span>
              <span className="text-[#F05858] underline pb-1">제재하기</span>
              <span className="text-[#F05858] underline pb-1">해제하기</span>
            </div>
          </div>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <div className="flex w-full">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="사유"
                labelWidth="w-[105px]"
                placeholder={"-"}
              />
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="w-full px-9 flex it gap-4 justify-between items-center pt-6 pb-10">
          <div className="flex gap-3">
            <Button
              label={"취소"}
              backgroundColor={"bg-[#A3A6AB]"}
              borderRadius={"rounded-[5px]"}
              textStyle={" font-[400] text-[14px] text-white"}
              width="w-[106px]"
              onPress={() => {}}
            />

            <Button
              label={"거절"}
              backgroundColor={"bg-[#4A4E57]"}
              borderRadius={"rounded-[5px]"}
              textStyle={"font-[400] text-[14px] text-white"}
              width="w-[106px]"
            />
          </div>
          <div className="flex gap-3">
            <Button
              label={"승인"}
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
              textStyle={"font-[400] text-[14px] text-white"}
              width="w-[106px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatusForm;
