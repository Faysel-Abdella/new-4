"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import Checkbox from "@/src/components/blocks/checkbox/Checkbox";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import cameraicon from "@/src/app/assets/mdi_camera.svg";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import { Textarea, useDisclosure } from "@nextui-org/react";

import React, { useState } from "react";

import CustomTab from "@/src/components/blocks/tabs/Tabs";
import Modal from "@/src/components/blocks/Modals/Modal";

const ExcavatorNewOrderRegistartionForm = () => {
  const {
    isOpen: isOpenForm,
    onOpen: onOpenWithForm,
    onOpenChange: onOpenChangeWithForm,
  } = useDisclosure();
  const option1 = [
    { key: "1", label: "광역시도" },
    { key: "2", label: "광역시도" },
    { key: "3", label: "광역시도" },
  ];
  const selectedOption1 = option1[0].key;
  const option2 = [
    { key: "1", label: "선택" },
    { key: "2", label: "선택" },
    { key: "3", label: "선택" },
  ];

  const selectedOption2 = option2[0].key;
  const option3 = [
    { key: "1", label: "선택" },
    { key: "2", label: "선택" },
    { key: "3", label: "선택" },
  ];

  const selectedOption3 = option3[0].key;
  const option4 = [
    { key: "1", label: "작업 기간" },
    { key: "2", label: "작업 기간" },
    { key: "3", label: "작업 기간" },
  ];

  const selectedOption4 = option4[0].key;
  const option5 = [
    { key: "1", label: "단위 선택" },
    { key: "2", label: "단위 선택" },
    { key: "3", label: "단위 선택" },
  ];

  const selectedOption5 = option5[0].key;
  const option6 = [
    { key: "1", label: "단위 선택" },
    { key: "2", label: "단위 선택" },
    { key: "3", label: "단위 선택" },
  ];

  const selectedOption6 = option6[0].key;
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  // Handle logic for changing selected values
  const handleCheckboxChange = (updatedValues: string[]) => {
    setSelectedValues(updatedValues);
  };

  const Tabs = [
    { title: "굴착기", content: <div></div> },
    { title: "초기화", content: <div></div> },
  ];
  return (
    <section>
      {" "}
      <div className="flex flex-col gap-4 rounded-[10px] bg-white py-[20px] px-[24px]">
        <div className="flex items-center  gap-[70px]">
          <div className="flex items-center w-full gap-5">
            <p className="min-w-[81px] text-sm text-[#404251]">장비</p>
            <div className="flex items-center  gap-[8px]">
              <p className=" w-[80px] text-sm text-[#404251]">굴착기</p>
              <span className="text-sm text-[#404251]">{">"}</span>
              <Button
                backgroundColor="bg-[#255DF91A]"
                label="장비 선택"
                textStyle="text-[#255DF9] font-bold"
                padding="py-[12px] px-[14px]  "
                borderRadius="rounded-[6px]"
                onPress={onOpenWithForm}
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-5">
            <p className="min-w-[81px]  text-sm text-[#404251]">구분</p>
            <div className="w-full">
              <Checkbox
                options={["임대 (장비+기사)", "스페어 (기사)", "렌탈 (장비)"]}
                selectedValues={selectedValues}
                alignment="horizontal"
                onChange={handleCheckboxChange}
                gap="gap-[20px]"
                inputTextStyles=" text-sm text-[#404251] w-full"
                inputStyles=""
                Label={true}
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className="flex items-center w-full gap-5 ">
            <p className="w-[80px] text-sm text-[#404251]">작업일</p>
            <div className="w-full">
              <InputNoLabel type="date" inputParentStyles="w-full" />
            </div>
          </div>
          <div className="flex items-center  gap-5 w-full">
            <p className="w-[80px] text-sm text-[rgb(64,66,81)]">작업일</p>
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
              <DropDown
                options={option3}
                defaultSelectedKeys={selectedOption3}
                selectedItemRadius="border border-[#E4E5EA]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full items-center gap-[70px]">
          <div className="flex items-center w-full gap-5 ">
            <div className="w-[75px]"></div>
            <div className="flex w-full gap-4">
              <DropDown
                options={option4}
                defaultSelectedKeys={selectedOption4}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="min-w-[235px] w-auto"
                selectContainerStyles="w-full"
              />
              <DropDown
                options={option5}
                defaultSelectedKeys={selectedOption5}
                selectedItemRadius="border border-[#E4E5EA]"
                selectStyles="w-full min-w-[235px]"
                selectContainerStyles="w-full"
              />
            </div>
          </div>
          <div className="flex gap-5 w-full">
            <div className="w-[80px]"></div>
            <div className="w-full">
              <InputNoLabel placeholder="상세주소" />
            </div>
          </div>
        </div>
        <div className="flex  w-full gap-[70px]">
          {" "}
          <div className="flex items-center w-full gap-5 ">
            <p className="w-[80px] text-sm text-[#404251]">희망비용</p>
            <div className="flex items-center gap-2">
              <InputNoLabel placeholder="40" inputParentStyles="w-[94px] " />
              <p className="text-sm text-[#404251]">만원 / 일</p>
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
              <p className="min-w-[81px] text-sm text-[#404251]">결제 일정</p>
              <div className="w-full">
                <DropDown
                  options={option6}
                  defaultSelectedKeys={selectedOption6}
                  selectedItemRadius="border border-[#E4E5EA]"
                  selectStyles="w-full min-w-[235px]"
                  selectContainerStyles="w-full"
                />
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
            <CameraInput imageSrc={cameraicon?.src} label="사진 첨부" />
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
            placeholder="로필요장비대수, 작업내용, 장비진입로 확보여부, 기사 숙식제공 여부 (월대) 등 구체적인 요청사항 및 현장조건에 대하여 자세하게 적어주시면 상호 정확한 견적 및 소통에 도움이 됩니다. 그인"
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
      <Modal
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeWithForm}
        buttonLabel={"해제"}
        modalWidthInPercent="max-w-[62%]"
        footer={false}
        closeButton={true}
      >
        <div className="bg-white pt-10">
          <div className="flex justify-center pb-2   border-b-1 border-[#E4E5EA]">
            <div className="w-[24px] h-[24px]"></div>
            <p className="text-[#404251] font-bold">장비 선택</p>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <p className="block text-[#404251] fonit-bold">장비 분류</p>
            <div className="flex gap-4 ">
              <Button
                label="미니 017"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#255DF9]"
                borderColor="border border-[#255DF9]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="미니 020"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="미니 030"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
            </div>
            <div className="flex gap-4">
              <Button
                label="미니 035"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="02(공투)"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="03(공삼)"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
            </div>
            <div className="flex gap-4">
              <Button
                label="06(공육)"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="08(공팔)"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="10(텐)"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
            </div>
            <div className="flex gap-4">
              <Button
                label="기타"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[260px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <div className="flex items-center gap-2">
              <p className="block text-[#404251] fonit-bold">장비 분류</p>
              <p className="block text-[#80808E] fonit-bold">중복선택가능</p>
            </div>

            <div className="flex gap-4">
              <Button
                label="브레이크"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#255DF9]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="크리샤"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="쪽버켓"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
            </div>
            <div className="flex gap-4">
              <Button
                label="채버켓"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="대버켓"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="틸트 로테이터"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
            </div>
            <div className="flex gap-4">
              <Button
                label="집게"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="지게발"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="면삭기"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
            </div>
            <div className="flex gap-4">
              <Button
                label="회전 돌집게"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="리퍼"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
              <Button
                label="마이티백"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[278px]"
              />
            </div>
            <div className="flex gap-4">
              <Button
                label="기타"
                backgroundColor="bg-white"
                borderRadius="rounded-[8px]"
                textStyle="text-[#80808E]"
                borderColor="border border-[#E4E5EA]"
                padding="p-[16px]"
                width="w-[260px]"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 w-full">
          <CustomTab
            items={Tabs}
            raduis="rounded-none"
            selectedBgColor="bg-[#255DF9]"
            selectedTextColor="text-white"
            unselectedBgColor="bg-white"
            unselectedBorderColor="border-t-1 border-[#E4E5EA]"
            tabWidth="w-[430px]"
          />
        </div>
      </Modal>
    </section>
  );
};

export default ExcavatorNewOrderRegistartionForm;
