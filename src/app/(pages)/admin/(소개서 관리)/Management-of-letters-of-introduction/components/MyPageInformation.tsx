"use client";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import React from "react";
import PlusIcon from "./Icons";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import cameraIcon from "../../../../../assets/Camera.svg";

const MyPageInformation = () => {
  const option = [
    { key: "1", label: "선택" },
    { key: "2", label: "선택" },
    { key: "3", label: "선택" },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="w-full flex flex-col  text-[14px]  ">
        <div className="w-full flex flex-col items-start gap-3 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            마이페이지 정보
          </span>

          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#333333]">
              제공서비스
            </span>
            <div className="flex flex-wrap gap-[20px]">
              {["임대 (장비+기사)", "스페어 (기사)", "렌탈 (장비)"].map(
                (service, index) => (
                  <label
                    key={index + Math.random()}
                    className="flex items-center gap-1 font-[400] text-[14px] text-[#333333]"
                  >
                    <input type="checkbox" className="w-[14px] h-[14px]" />
                    {service}
                  </label>
                )
              )}
            </div>
          </div>

          <div className="flex-1 w-full flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#333333]">
              작업가능지역 (알람 셋팅)
            </span>
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full grid grid-cols-3 gap-x-[60px] gap-y-[20px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index + Math.random()}
                    className="flex gap-2 w-full"
                  >
                    <DropDown
                      insideStyles="bg-white text-[#ABAFB7]"
                      selectContainerStyles="w-full "
                      selectStyles=" border-[1px] rounded-[8px] border-[#E4E5EA]"
                      options={option}
                      defaultSelectedKeys={""}
                      placeholder="선택"
                    />

                    <DropDown
                      insideStyles="bg-white text-[#ABAFB7]"
                      selectContainerStyles="w-full "
                      selectStyles="  border-[1px] rounded-[8px] border-[#E4E5EA]"
                      options={option}
                      defaultSelectedKeys={""}
                      placeholder="선택"
                    />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3">
                <div className="flex w-full gap-2 justify-center items-center bg-[#F2F3F5] rounded-[4px] p-[8px]">
                  <PlusIcon />
                  <p className="text-[#404251] text-[14px] font-[700]">
                    작업 지역 추가하기
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex gap-2">
            <span className="w-[90px] font-[400] text-[14px] text-[#333333]">
              작업단가
            </span>
            <div className="space-y-[10px]">
              <div className="flex gap-[10px] font-[400] text-[14px] text-[#333333]">
                {[
                  "00만원 / 40분",
                  "00만원 / 반일",
                  "00만원 / 일대",
                  "0000만원 / 월대",
                ].map((item, index) => (
                  <div
                    key={index + Math.random()}
                    className="flex items-center gap-[10px]"
                  >
                    <InputNoLabel defaultValue="00" inputStyles="w-[90px]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-[10px]">
                <InputNoLabel defaultValue="00" inputStyles="w-[90px]" />
                <p>{"만원 / "}</p>
                <InputNoLabel defaultValue="시간 (브레카 추가시)" />
              </div>
            </div>
          </div>

          <div className="flex w-full text-[14px] font-[400] text-[#333333] items-center">
            <span className="w-[100px]">장비 사진</span>
            <div className="flex gap-3">
              <div className="w-[63px] h-[63px] bg-[#FFEEEE] rounded-[6px]" />
              <CameraInput
                imageSrc={cameraIcon.src}
                label={"사진 첨부"}
                containerStyle="w-[63px] h-[63px] bg-[#F2F3F5] rounded-[6px]"
              />
            </div>
          </div>

          <div className="flex w-full text-[14px] font-[400] text-[#333333] items-center">
            <span className="w-[100px]">작업 사진</span>
            <div className="flex gap-3">
              <div className="w-[63px] h-[63px] bg-[#FFEEEE] rounded-[6px]" />
              <CameraInput
                imageSrc={cameraIcon.src}
                label={"사진 첨부"}
                containerStyle="w-[63px] h-[63px] bg-[#F2F3F5] rounded-[6px]"
              />
            </div>
          </div>

          <div className="flex-1 w-full flex gap-2 justify-center items-center">
            <span className="w-[90px]"> 소개 및 홍보내용 </span>
            <InputNoLabel
              mainStyles="h-[111px] px-[16px] py-[12px] w-full flex"
              inputParentStyles="w-full h-full"
              inputStyles="h-full border-[#E4E5EA] rounded-[8px]"
              placeholder="업체소개, 장비별 세부 작업 단가, 전문시공 영역, 이전 진행 프로젝트, 장비 소개, 기사님 보유 기술 등 자세하게 기입해 주세요"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPageInformation;
