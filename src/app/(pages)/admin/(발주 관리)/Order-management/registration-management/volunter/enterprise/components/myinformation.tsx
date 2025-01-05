"use state";
import Checkbox from "@/src/components/blocks/checkbox/Checkbox";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import cameraIcon from "@/src/app/assets/mdi_camera.svg";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import React, { useState } from "react";
import TextAreaInput from "@/src/components/blocks/inputs/TextArea";
import { Button } from "@/src/components/blocks/buttons/Button";

const Myinformation = () => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Handle logic for changing selected values
  const handleCheckboxChange = (updatedValues: string[]) => {
    setSelectedValues(updatedValues);
  };
  const option1 = [
    { key: "1", label: "선택" },
    { key: "2", label: "선택" },
    { key: "3", label: "선택" },
  ];

  const selectedOption1 = option1[0].key;

  return (
    <section>
      <div className="bg-white p-[40px]">
        <p className="min-w-[91px] text-sm text-[#ABAFB7]">마이페이지 정보</p>
        <div className="flex flex-col gap-[10px] mt-4">
          <div className="flex items-center gap-5">
            <p className="min-w-[78px] text-sm text-[#404251]">
              마이페이지 정보
            </p>
            <Checkbox
              options={["임대 (장비+기사)", "스페어 (기사)", "렌탈 (장비)"]}
              Label={true}
              selectedValues={selectedValues}
              onChange={handleCheckboxChange}
              alignment="horizontal"
              gap="gap-5"
            />
          </div>
          <div className="flex items-center gap-5 mt-3">
            <div className="flex flex-col">
              <p className="min-w-[78px] text-sm text-[#404251]">
                작업가능지역
              </p>
              <p className="min-w-[78px] text-sm text-[#404251]">(알람 셋팅)</p>
            </div>
            <div className="flex w-full gap-[60px]">
              <div className="flex w-full gap-[10px]">
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
              </div>
              <div className="flex w-full gap-[10px]">
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
              </div>
              <div className="flex gap-[10px] w-full">
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-3">
            <div className="min-w-[78px]"></div>
            <div className="flex w-full gap-[60px]">
              <div className="flex w-full gap-[10px]">
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
              </div>
              <div className="flex w-full gap-[10px]">
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
                <DropDown
                  options={option1}
                  defaultSelectedKeys={selectedOption1}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectContainerStyles="w-full"
                />
              </div>
              <div className="flex gap-[10px] w-full">
                <div className="w-full"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="min-w-[78px]"></div>
            <div className="w-[310px] p-2 bg-[#F2F3F5] rounded-[4px] flex justify-center items-center  cursor-pointer">
              <p className="font-bold">
                <span className="text-2xl font-bold">+</span> 작업 지역 추가하기
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="min-w-[78px] text-sm text-[#404251]">작업단가</p>
            <div className="flex gap-5">
              <div className="flex items-center gap-[10px]">
                <InputNoLabel placeholder="00" inputParentStyles="w-[100px]" />
                <p className="text-sm text-[#404251]">만원 / 반일</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <InputNoLabel placeholder="00" inputParentStyles="w-[100px]" />
                <p className="text-sm text-[#404251]">만원 / 40분</p>
              </div>
              <div className="flex items-center gap-[10px]">
                <InputNoLabel placeholder="00" inputParentStyles="w-[100px]" />
                <p className="text-sm text-[#404251]">만원 / 일대</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="min-w-[78px]"></div>
            <div className="flex gap-[10px]">
              <InputNoLabel placeholder="00" inputParentStyles="w-[100px]" />
              <div className="flex items-center gap-[5px]">
                <p className="text-sm text-[#404251]">만원 /</p>
                <InputNoLabel
                  placeholder="시간 (브레카 추가시)"
                  inputParentStyles="w-[135px]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-sm min-w-[78px]">장비 사진</p>
            <div className="flex gap-[10px]">
              <div className="w-[63px] h-[63px] py-[14px] px-[20px] bg-[#FFEEEE] rounded-[6px]"></div>
              <CameraInput
                imageSrc={cameraIcon?.src}
                label="사진 첨부"
                containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-[#F2F3F5] rounded-[6px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-sm min-w-[78px]">작업 사진</p>
            <div className="flex gap-[10px]">
              <div className="w-[63px] h-[63px] py-[14px] px-[20px] bg-[#FFEEEE] rounded-[6px]"></div>
              <CameraInput
                imageSrc={cameraIcon?.src}
                label="사진 첨부"
                containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-[#F2F3F5] rounded-[6px]"
              />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex flex-col">
              <p className="text-sm min-w-[78px]">소개 및 홍보</p>
              <p className="text-sm min-w-[78px]">내용</p>
            </div>
            <TextAreaInput
              placeholder="업체소개, 장비별 세부 작업 단가, 전문시공 영역, 이전 진행 프로젝트, 장비 소개, 기사님 보유 기술 등 자세하게 기입해 주세요"
              type=""
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Button
          label="저장"
          backgroundColor="bg-[#4A4E57]"
          textStyle="text-sm text-white"
          borderRadius="rounded-[5px]"
          padding="py-[11px] px-[40px]"
          width="w-[106px]"
        />
      </div>
    </section>
  );
};

export default Myinformation;
