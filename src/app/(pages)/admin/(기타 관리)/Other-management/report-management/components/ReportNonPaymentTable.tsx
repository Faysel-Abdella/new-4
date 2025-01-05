"use client";
import ChatModal from "@/src/components/blocks/chat/chatModal";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import Modal from "@/src/components/blocks/Modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
import nonPaymentData from "./nonPaymentData";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import Image from "next/image";

const ReportNonPaymentTable = () => {
  const { nonPaymentHeader, nonPaymentDataContent } = nonPaymentData();
  const [selectedChatSender, setSelectedChat] = useState("");
  const { isOpen, onOpenChange } = useDisclosure();
  const { isOpen: isOpenForm, onOpenChange: onOpenChangeWithForm } =
    useDisclosure();
  const { isOpen: isOpenContract, onOpenChange: onOpenChangeContract } =
    useDisclosure();
  const option = [
    { key: "1", label: "선택" },
    { key: "2", label: "체불확인" },
    { key: "3", label: "보류" },
  ];
  return (
    <div className="bg-[white] w-full text-[14px] h-full">
      <div className="grid grid-cols-11 grid-rows-2 text-center text-[#4B505D] bg-[#F1F3F6]">
        <div className="text-[#4B505D] flex items-center justify-center row-span-2 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {nonPaymentHeader.num}
        </div>
        <div className="text-[#4B505D] flex items-center justify-center row-span-2 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {nonPaymentHeader.reportDateTime}
        </div>

        <div className="col-span-2 row-span-2 border-r-[1px] border-r-[#D9DEE5]">
          <div className="text-[#4B505D] w-full  flex items-center justify-center row-span-1  py-[10px] border-b-[1px] border-b-[#D9DEE5]">
            {nonPaymentHeader.orderringCompany}
          </div>
          <div className="w-full flex flex-row">
            <div className="text-[#4B505D] flex items-center justify-center flex-1 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
              {nonPaymentHeader.companyName}
            </div>
            <div className="text-[#4B505D] flex items-center justify-center flex-1 py-[10px]">
              {nonPaymentHeader.name}
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 border-r-[1px] border-r-[#D9DEE5]">
          <div className="text-[#4B505D] w-full flex items-center justify-center py-[10px] border-b-[1px] border-b-[#D9DEE5]">
            {nonPaymentHeader.equipmentBusinessOperator}
          </div>
          <div className="w-full flex flex-row">
            <div className="text-[#4B505D] flex items-center justify-center flex-1 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
              {nonPaymentHeader.equipmentBusinessOperatorCompanyName}
            </div>
            <div className="text-[#4B505D] flex items-center justify-center flex-1  py-[10px]">
              {nonPaymentHeader.equipmentBusinessOperatorName}
            </div>
          </div>
        </div>
        <div className="text-[#4B505D] row-span-2 flex items-center justify-center py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {nonPaymentHeader.reportDetails}
        </div>
        <div className="text-[#4B505D] row-span-2 flex items-center justify-center py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {nonPaymentHeader.situation}
        </div>
        <div className="text-[#4B505D] row-span-2 flex items-center justify-center py-[10px] ">
          {nonPaymentHeader.viewChat}
        </div>
        <div className="text-[#4B505D] row-span-2 flex items-center justify-center py-[10px] ">
          {nonPaymentHeader.viewContract}
        </div>
        <div className="text-[#4B505D] row-span-2 flex items-center justify-center py-[10px] ">
          {nonPaymentHeader.image}
        </div>
      </div>

      {nonPaymentDataContent.map((data, index) => (
        <div
          key={index}
          className="grid grid-cols-11 text-center  text-[#A3A6AB] border-b-[1px] border-b-[#F1F3F6]"
        >
          <div className="flex py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            {data.num}
          </div>
          <div className="flex  py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            {data.reportDateTime}
          </div>

          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {data.companyName}
          </div>

          <div className="flex items-center justify-center py-[10px]  border-r-[1px] border-r-[#F1F3F6]">
            {data.name}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {data.equipmentCompanyName}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {data.equipmentName}
          </div>
          <div className="flex items-center justify-center py-[10px] px-2 border-r-[1px] border-r-[#F1F3F6]">
            {data.reportDetails}
          </div>
          <div
            onClick={() => {
              onOpenChangeWithForm();
            }}
            className="flex items-center justify-center py-[10px]  underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]"
          >
            {data.situation}
          </div>
          <div
            onClick={() => {
              onOpenChange();
              setSelectedChat(data.companyName);
            }}
            className="flex items-center justify-center py-[10px]  underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]"
          >
            {data.viewChat}
          </div>
          <div
            onClick={() => {
              onOpenChangeContract();
            }}
            className="flex items-center justify-center py-[10px]  underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]"
          >
            {data.viewContract}
          </div>
          <div className="flex items-center gap-2 px-2 justify-start py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {Array.from({ length: data.pictures }, (_, index) => (
              <CameraInput
                key={index}
                imageSrc={"/assets/icons/cameraIcon.svg"}
                label={"IMG"}
                containerStyle="w-[36px] h-[36px] bg-[#F2F3F5] rounded-[6px]"
              />
            ))}
          </div>
        </div>
      ))}
      <Modal
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeWithForm}
        buttonLabel={"확인"}
        cancelBtnLabel="닫기"
      >
        <div className=" w-full flex flex-col gap-[20px] justify-center items-center pt-[50px] pb-[30px]">
          <p className="text-[20px] font-[400] text-[#333333]  text-center">
            신고 내용의 상태를 변경해 주세요
          </p>
          <DropDown
            options={option}
            defaultSelectedKeys={"1"}
            insideStyles="bg-white text-[#ABAFB7]"
            selectContainerStyles="w-full px-[10px]"
            selectStyles=" border-[1px] rounded-[8px] border-[#E4E5EA]"
          />
        </div>
      </Modal>

      <Modal
        isOpen={isOpenContract}
        onOpenChange={onOpenChangeContract}
        buttonLabel={"닫기"}
        paddingHorizontal="px-0 py-0"
      >
        <div className=" w-full bg-white flex flex-col gap-[20px] justify-center items-center ">
          <p className="text-[16px] pt-[20px] font-[700] text-[#333333] text-center">
            계약서
          </p>
          <div className="h-[1px] w-full bg-[#d9d9d9]"></div>

          <Image
            src={"/assets/icons/contract.svg"}
            alt="contract"
            width={358}
            height={512}
            className="w-[358px] h-[512px]"
          />
        </div>
      </Modal>

      <ChatModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        senderName={selectedChatSender}
        profileName={"발주자명"}
      />
    </div>
  );
};

export default ReportNonPaymentTable;
