"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import Checkbox from "@/src/components/blocks/checkbox/Checkbox";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";

import { Textarea } from "@nextui-org/react";

import React, { useState } from "react";

const DumpOrderRegistartionForm = () => {
  const option1 = [
    { key: "1", label: "작업 기간" },
    { key: "2", label: "작업 기간" },
    { key: "3", label: "작업 기간" },
  ];
  const selectedOption1 = option1[0].key;
  const option2 = [
    { key: "1", label: "단위 선택" },
    { key: "2", label: "단위 선택" },
    { key: "3", label: "단위 선택" },
  ];

  const selectedOption2 = option2[0].key;
  const option3 = [
    { key: "1", label: "선택" },
    { key: "2", label: "선택" },
    { key: "3", label: "선택" },
  ];

  const selectedOption3 = option3[0].key;
  const option4 = [
    { key: "1", label: "광역시도" },
    { key: "2", label: "광역시도" },
    { key: "3", label: "광역시도" },
  ];

  const selectedOption4 = option4[0].key;
  const option5 = [
    { key: "1", label: "시군구" },
    { key: "2", label: "시군구" },
    { key: "3", label: "시군구" },
  ];

  const selectedOption5 = option5[0].key;
  const option6 = [
    { key: "1", label: "광역시도" },
    { key: "2", label: "광역시도" },
    { key: "3", label: "광역시도" },
  ];

  const selectedOption6 = option6[0].key;
  const option7 = [
    { key: "1", label: "시군구" },
    { key: "2", label: "시군구" },
    { key: "3", label: "시군구" },
  ];

  const selectedOption7 = option7[0].key;
  const option8 = [
    { key: "1", label: "읍면동" },
    { key: "2", label: "읍면동" },
    { key: "3", label: "읍면동" },
  ];

  const selectedOption8 = option8[0].key;
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Handle logic for changing selected values
  const handleCheckboxChange = (updatedValues: string[]) => {
    setSelectedValues(updatedValues);
  };
  const [showModal, setShowModal] = useState(false);
  const handleModalShow = () => {
    setShowModal(!showModal);
  };
 
  return (
    <section>
      {" "}
      <div className="flex flex-col gap-4 rounded-[10px] bg-white py-[20px] px-[24px]">
        <div className="flex items-center  gap-[70px]">
          <div className="flex items-center w-full gap-5">
            <p className="min-w-[81px] text-sm text-[#404251]">장비</p>
            <div className="flex items-center  gap-[8px]">
              <p className=" w-[80px] text-sm text-[#404251]">덤프</p>
              <span className="text-sm text-[#404251]">{">"}</span>
              <Button
                backgroundColor="bg-[#255DF91A]"
                label="장비 선택"
                textStyle="text-[#255DF9] font-bold"
                padding="py-[12px] px-[14px]  "
                borderRadius="rounded-[6px]"
                onPress={handleModalShow}
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-5">
            <p className="min-w-[81px]  text-sm text-[#404251]">작업일</p>
            <div className="w-full">
              <InputNoLabel type="date" />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className=" w-full  "></div>
          <div className="flex items-center  gap-5 w-full">
            <div className="min-w-[81px]"></div>
            <div className="flex gap-4 w-full">
              <DropDown
                options={option1}
                defaultSelectedKeys={selectedOption1}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option2}
                defaultSelectedKeys={selectedOption2}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className="flex items-center w-full gap-5 ">
            <p className="min-w-[81px] text-sm text-[#404251]">상차지</p>
            <div className="flex w-full gap-4">
              <DropDown
                options={option3}
                defaultSelectedKeys={selectedOption3}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="min-w-[140px] w-auto"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option4}
                defaultSelectedKeys={selectedOption4}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="w-full min-w-[140px]"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option5}
                defaultSelectedKeys={selectedOption5}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="w-full min-w-[140px]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
          <div className="flex items-center w-full gap-5 ">
            <p className="min-w-[81px] text-sm text-[#404251]">상차지</p>
            <div className="flex w-full gap-4">
              <DropDown
                options={option6}
                defaultSelectedKeys={selectedOption6}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="min-w-[140px] w-auto"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option7}
                defaultSelectedKeys={selectedOption7}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="w-full min-w-[140px]"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option8}
                defaultSelectedKeys={selectedOption8}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="w-full min-w-[140px]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex  w-full gap-[70px]">
          <div className="flex items-center w-full gap-2">
            <div className="min-w-[81px]"></div>
            <div className="w-full">
              {" "}
              <InputNoLabel placeholder="상세주소" />
            </div>
          </div>
          <div className="flex items-center w-full gap-2">
            <div className="min-w-[81px]"></div>
            <div className="w-full">
              {" "}
              <InputNoLabel placeholder="상세주소" />
            </div>
          </div>
        </div>
        <div className="flex  w-full gap-[70px]">
          {" "}
          <div className="flex items-center w-full gap-5 ">
            <div className="flex items-center flex-col">
              {" "}
              <p className="w-[85px] text-sm text-[#404251]">희망 운반 횟수</p>
              <p className="w-[80px] text-sm text-[#404251]">(몇 탕)</p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-sm  text-[#404251]">하루</p>
              <InputNoLabel placeholder="40" inputParentStyles="w-[94px] " />
              <p className="text-sm text-[#404251]">회 운반 / 일</p>
              <p className="text-sm text-[#404251]">총 금액 : 000만원</p>

              <Checkbox
                options={["제안 받기"]}
                selectedValues={selectedValues}
                alignment="horizontal"
                onChange={handleCheckboxChange}
                Label={true}
              />
            </div>
          </div>
          <div className="w-full">
            <div className="flex items-center gap-5">
              <p className="min-w-[81px] text-sm text-[#404251]">운반물 종류</p>
              <div className="w-full">
                <InputNoLabel placeholder="운반물의 종류와 수분 포함 여부 등을 적어주세요" />
              </div>
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
            <CameraInput imageSrc="/src/app/assets/Camera" label="사진 첨부" />
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
      </div>
      <div className="mt-[40px] flex justify-center">
        <Button
          label="등록"
          backgroundColor="bg-[#4A4E57]"
          borderRadius="rounded-[5px]"
          textStyle=" text-sm text-white"
          padding="p-[11px]"
          width="w-[148px]"
        />
      </div>
    </section>
  );
};
export default DumpOrderRegistartionForm;
