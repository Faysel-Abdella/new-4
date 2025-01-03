"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import TextInput from "@/src/components/blocks/inputs/Input";
import React from "react";

const EditBannerModal = () => {
  return (
    <div className="flex flex-col text-[14px] space-y-[20px] bg-white p-10 w-[679px]">
      <div className="grid grid-cols-11 gap-[20px]">
        <p className="col-span-2 text-[#333333] py-[10px]">상태</p>
        <div className="col-span-9 py-[10px]">
          <RadioButton
            options={["진행", "종료"]}
            selectedValue="진행"
            onChange={() => {}}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
        <p className="col-span-2 text-[#333333] py-[10px]">제목</p>
        <div className="col-span-9 text-[#A3A6AB]">
          <TextInput type={""} placeholder={"제목 입력"} />
        </div>
        <p className="col-span-2 text-[#333333] py-[10px]">구분</p>
        <div className="col-span-9 py-[10px]">
          <RadioButton
            options={["전체", "발주사", "장비사업자"]}
            selectedValue="전체"
            onChange={() => {}}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
        <p className="col-span-2 text-[#333333] py-[10px]">배너이미지</p>
        <div className="col-span-9 space-y-[10px]">
          <div className="flex items-center gap-[10px]">
            <Button
              label={"파일 선택"}
              backgroundColor={"bg-[#A3A6AB]"}
              borderRadius={"rounded-[5px]"}
              textStyle={"text-white w-[65px]"}
            />
            <p className="text-[#A3A6AB]">720.jpg</p>
          </div>
          <p>*이미지는 400KB 미만, 너비 720px, JPG, PNG 파일만 등록 가능</p>
        </div>

        <p className="col-span-2 text-[#333333] py-[10px]">노출기간</p>
        <div className="col-span-9 text-[#333333] space-y-[10px]">
          <div className="flex flex-row gap-[10px] items-center">
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
            <div>
              <DropDown
                options={[
                  { key: "1", label: "선택" },
                  { key: "2", label: "선택" },
                  { key: "3", label: "선택" },
                ]}
                defaultSelectedKeys={"1"}
              />
            </div>
            <p>분 ~</p>
          </div>
          <div className="flex gap-[10px]">
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
        <p className="col-span-2 text-[#333333] py-[10px]">랜딩페이지</p>
        <div className="col-span-9 text-[#333333] space-y-[10px] w-full">
          <div className="">
            <DropDown
              options={[
                { key: "1", label: "새 창 URL" },
                { key: "2", label: "새 창 URL" },
                { key: "3", label: "새 창 URL" },
              ]}
              defaultSelectedKeys={"1"}
            />
          </div>
          <InputNoLabel type="text" placeholder="url 입력" />
          <p>*http:// 혹은 https:// 로 시작하는 URL을 입력하셔야 합니다. </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-[16px] ">
        <Button
          label={"취소"}
          backgroundColor={"bg-[#A3A6AB]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
        <Button
          label={"등록"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
      </div>
    </div>
  );
};

export default EditBannerModal;
