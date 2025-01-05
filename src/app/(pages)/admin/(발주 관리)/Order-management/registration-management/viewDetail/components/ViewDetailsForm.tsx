"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import Checkbox from "@/src/components/blocks/checkbox/Checkbox";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import cameraIcon from "@/src/app/assets/mdi_camera.svg"
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";

import { Textarea } from "@nextui-org/react";

import React, { useState } from "react";


const ViewDetailForm = () => {
  const option1 = [
    { key: "1", label: "모집중" },
    { key: "2", label: "모집중" },
    { key: "3", label: "모집중" },
  ];
  const selectedOption1 = option1[0].key;
  const option2 = [
    { key: "1", label: "광역시도" },
    { key: "2", label: "광역시도" },
    { key: "3", label: "광역시도" },
  ];

  const selectedOption2 = option2[0].key;
  const option3 = [
    { key: "1", label: "스페어 (기사)" },
    { key: "2", label: "스페어 (기사)" },
    { key: "3", label: "스페어 (기사)" },
  ];

  const selectedOption3 = option3[0].key;
  const option4 = [
    { key: "1", label: "렌탈 (장비)" },
    { key: "2", label: "렌탈 (장비)" },
    { key: "3", label: "렌탈 (장비)" },
  ];

  const selectedOption4 = option4[0].key;
  const option5 = [
    { key: "1", label: "작업 기간" },
    { key: "2", label: "작업 기간" },
    { key: "3", label: "작업 기간" },
  ];

  const selectedOption5 = option5[0].key;
  const option6 = [
    { key: "1", label: "단위 선택" },
    { key: "2", label: "단위 선택" },
    { key: "3", label: "단위 선택" },
  ];

  const selectedOption6 = option6[0].key;
  const option7 = [
    { key: "1", label: "단위 선택" },
    { key: "2", label: "단위 선택" },
    { key: "3", label: "단위 선택" },
  ];

  const selectedOption7 = option7[0].key;
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Handle logic for changing selected values
  const handleCheckboxChange = (updatedValues: string[]) => {
    setSelectedValues(updatedValues);
  };

 
  return (
    <section>
      {" "}
      <div className="flex flex-col gap-4 rounded-[10px] bg-white py-[20px] px-[24px]">
        <div className="flex items-center  gap-[70px]">
          <div className="flex items-center w-full gap-5">
            <p className="min-w-[81px] text-sm text-[#404251]">노출 기간</p>
            <div className="flex w-full items-center gap-[6px]">
              <div className="w-full">
                <InputNoLabel type="date" />
              </div>

              <span>~</span>
              <div className="w-full">
                {" "}
                <InputNoLabel type="date" />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center gap-5">
            <p className="min-w-[81px]  text-sm text-[#404251]">상태</p>
            <div className="w-full">
              <DropDown
                options={option1}
                defaultSelectedKeys={selectedOption1}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className="flex items-center w-full gap-5 ">
            <p className="w-[81px] text-sm text-[#404251]">장비</p>
            <div className="flex w-full items-center gap-[6px]">
              <p className=" text-sm text-[#404251]">굴착기</p>
              <span>{">"}</span>
              <p className=" text-sm text-[#404251]">미니000</p>
              <p className=" text-sm text-[#404251]">어태치먼트1</p>
              <p className=" text-sm text-[#404251]">어태치먼트2</p>
              <Button
                label="장비 선택"
                backgroundColor="bg-[#255DF91A]"
                borderRadius="rounded-[6px]"
                textStyle="text-sm text-[#255DF9] font-bold"
                padding="py-[12px] px-[14px]"
                width="w-[75px]"
              />
            </div>
          </div>
          <div className="flex items-center  gap-5 w-full">
            <p className="w-[81px] text-sm text-[rgb(64,66,81)]">구분</p>

            <Checkbox
              options={["임대 (장비+기사)", "스페어 (기사)", "렌탈 (장비)"]}
              selectedValues={selectedValues}
              Label={true}
              onChange={handleCheckboxChange}
              alignment="horizontal"
              gap="gap-5"
            />
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className="flex items-center w-full gap-5 ">
            <p className="w-[81px] text-sm text-[rgb(64,66,81)]">작업일</p>

            <div className=" w-full ">
              <InputNoLabel type="date" />
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <p className="w-[82px] text-sm text-[rgb(64,66,81)]">작업위치</p>
            <div className="w-full flex gap-[8px]">
              <DropDown
                options={option2}
                defaultSelectedKeys={selectedOption2}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option3}
                defaultSelectedKeys={selectedOption3}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option4}
                defaultSelectedKeys={selectedOption4}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex  w-full gap-[70px]">
          {" "}
          <div className="flex items-center w-full gap-5 ">
            <div className="w-[81px]"></div>
            <div className="flex w-full items-center gap-[10px]">
              <DropDown
                options={option5}
                defaultSelectedKeys={selectedOption5}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option6}
                defaultSelectedKeys={selectedOption6}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-5">
              <div className="w-[81px]"></div>
              <div className="w-full">
                <InputNoLabel placeholder="상세주소" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  w-full gap-[70px]">
          <div className="flex w-full items-center gap-5">
            <p className="w-[82px] text-sm text-[rgb(64,66,81)]">희망비용</p>
            <div className="flex items-center gap-[10px]">
              <InputNoLabel placeholder="60" />
              <p className=" text-sm text-[#404251]">만원 / 일</p>
              <p className=" text-sm text-[#404251]">총 금액 : 000만원</p>
              <Checkbox
                Label={true}
                onChange={handleCheckboxChange}
                options={["제안 받기"]}
                selectedValues={selectedValues}
              />
            </div>
          </div>
          <div className="flex items-center w-full gap-5">
            <p className="w-[82px] text-sm text-[rgb(64,66,81)]">결제 일정</p>
            <div className="w-full">
              <DropDown
                options={option7}
                defaultSelectedKeys={selectedOption7}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center w-full gap-5 ">
          <div className="flex flex-col">
            {" "}
            <p className="w-[80px] text-sm text-[#404251]">현장사진</p>
            <p className="w-[80px] text-sm text-[#404251]">(선택)</p>
          </div>
          <div>
            <CameraInput
             imageSrc={cameraIcon?.src}
              label="사진 첨부"
              containerStyle="py-[14px] px-[20px] rounded-[5px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          {" "}
          <div className="flex flex-col">
            <p className="min-w-[81px] text-sm text-[#404251]">우대 및 요청</p>
            <p className="min-w-[81px] text-sm text-[#404251]">사항(선택)</p>
          </div>
          <Textarea
            className="w-full"
            minRows={5}
            size="sm"
            placeholder="필요장비대수, 작업내용, 장비진입로 확보여부, 기사 숙식제공 여부 (월대) 등 구체적인 요청사항 및 현장조건에 대하여 자세하게 적어주시면 상호 정확한 견적 및 소통에 도움이 됩니다. "
            variant="bordered"
          />
        </div>
        <div className=" flex flex-col gap-[10px] mt-4 border-t-1 py-[16px] border-[#E4E5EA]">
          <p className="text-[#404251] font-bold">(주)아산건설</p>
          <div className="flex gap-[10px]">
            <p className="min-w-[150px] text-sm text-[#80808E]">
              사업자 등록상태
            </p>
            <p className="text-sm text-[#404251]">텍스트</p>
          </div>
          <div className="flex gap-[10px]">
            <p className="min-w-[150px] text-sm text-[#80808E]">
              장비파트너 내부 작업 횟수
            </p>
            <p className="text-sm text-[#404251]">20건</p>
          </div>
          <div className="flex gap-[10px]">
            <p className="min-w-[150px] text-sm text-[#80808E]">
              임금 체불 관련 제보 횟수
            </p>
            <p className="text-sm text-[#404251]">0회</p>
          </div>
        </div>
        <div className=" flex flex-col gap-[10px] mt-4 border-t-1 py-[16px] border-[#E4E5EA]">
          <p className="text-sm text-[#80808E]">연락처</p>
          <p className="text-sm text-[#404251]">사무실 02-****-****</p>
          <p className="text-sm text-[#404251]">현장 담당자 010-****-****</p>
        </div>
      </div>
      <div className="mt-[40px] flex gap-4 justify-center">
        <Button
          label="등록"
          backgroundColor="bg-[#4A4E57]"
          borderRadius="rounded-[5px]"
          textStyle=" text-sm text-white"
          padding="p-[11px]"
          width="w-[148px]"
        />
         <Button
          label="취소"
          backgroundColor="bg-[#A3A6AB]"
          borderRadius="rounded-[5px]"
          textStyle=" text-sm text-white"
          padding="p-[11px]"
          width="w-[148px]"
        />
      </div>
    </section>
  );
};
export default ViewDetailForm;
