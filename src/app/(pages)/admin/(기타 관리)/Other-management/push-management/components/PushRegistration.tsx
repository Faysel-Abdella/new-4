"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import React from "react";

const PushRegistration = ({ handleClick }: { handleClick: () => void }) => {
  return (
    <div className="w-full bg-white   p-10">
      <div className="grid grid-cols-12 gap-y-[20px]">
        <p className="col-span-1 py-[10px]">구분</p>
        <div className="flex items-center gap-[100px] col-span-11">
          <div className="col-span-5">
            <RadioButton
              options={["전체", "장비사업자", "발주사"]}
              selectedValue="전체"
              onChange={() => {}}
              optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
            />
          </div>
          <div className="flex items-center gap-[20px] col-span-6">
            <p>대상 설정</p>
            <div className="flex gap-[10px]">
              <RadioButton
                options={["전체이용자", "이용자 선택"]}
                selectedValue="전체이용자"
                onChange={() => {}}
                optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
              />
              <Button
                label={"이용자 선택"}
                backgroundColor={"bg-[#A3A6AB]"}
                borderRadius={"rounded-[5px]"}
                textStyle={"w-[100px] text-white"}
                onPress={handleClick}
              />
            </div>
          </div>
        </div>
        <p className="col-span-1 py-[10px]">분류</p>
        <div className="flex gap-[100px] items-center col-span-11">
          <div className="col-span-5">
            <RadioButton
              options={["전체이용자", "마케팅 수신동의자"]}
              selectedValue="전체이용자"
              onChange={() => {}}
              optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
            />
          </div>
          <div className="flex items-center gap-[20px] col-span-6">
            <p>발송일시</p>
            <RadioButton
              options={["즉시", "예약"]}
              selectedValue="즉시"
              onChange={() => {}}
              optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
            />
            <div className="flex items-center gap-[10px]">
              <div className="w-[130px]">
                <InputNoLabel type="date" placeholder="시작일" />
              </div>
              <div className="">
                <DropDown
                  options={[
                    { key: "1", label: "선택" },
                    { key: "2", label: "선택" },
                    { key: "3", label: "선택" },
                  ]}
                  defaultSelectedKeys={"1"}
                />
              </div>
              <p>시</p>
              <div className="">
                <DropDown
                  options={[
                    { key: "1", label: "선택" },
                    { key: "2", label: "선택" },
                    { key: "3", label: "선택" },
                  ]}
                  defaultSelectedKeys={"1"}
                />
              </div>
              <p>분 </p>
            </div>
          </div>
        </div>

        <p className="col-span-1 py-[10px]">제목</p>
        <div className="col-span-11 w-full">
          <InputNoLabel placeholder="제목 입력" />
        </div>
        <p className="col-span-1 py-[10px]">푸시 타이틀</p>
        <div className="col-span-11 w-full">
          <InputNoLabel placeholder="제목 입력" />
        </div>
        <p className="col-span-1 py-[10px]">푸시 내용</p>
        <div className="col-span-11 w-full">
          <InputNoLabel placeholder="제목 입력" />
        </div>
        <p className="col-span-1 py-[10px]">랜딩페이지</p>
        <div className="col-span-11 w-full space-y-[10px]">
          <DropDown options={[]} defaultSelectedKeys={""} />
          <InputNoLabel placeholder="url 입력" />
          <p>*http:// 혹은 https:// 로 시작하는 URL을 입력하셔야 합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default PushRegistration;
