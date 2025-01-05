import React, { useState } from "react";
import data from "./data";
import { useDisclosure } from "@nextui-org/react";
import ChatModal from "@/src/components/blocks/chat/chatModal";
import Modal from "@/src/components/blocks/Modals/Modal";

const ReportTable = () => {
  const { reportHeader, reportData } = data();
  const [selectedChatSender, setSelectedChat] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenForm,
    onOpen: onOpenWithForm,
    onOpenChange: onOpenChangeWithForm,
  } = useDisclosure();

  return (
    <div className="bg-[white] w-full text-[14px] h-full">
      <div className="grid grid-cols-10 grid-rows-2 text-center text-[#4B505D] bg-[#F1F3F6]">
        <div className="text-[#4B505D] flex items-center justify-center row-span-2 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {reportHeader.num}
        </div>
        <div className="text-[#4B505D] flex items-center justify-center row-span-2 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {reportHeader.reportDateTime}
        </div>
        <div className="text-[#4B505D] flex items-center justify-center row-span-2 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {reportHeader.reportor}
        </div>
        <div className="col-span-2 row-span-2 border-r-[1px] border-r-[#D9DEE5]">
          <div className="text-[#4B505D] w-full  flex items-center justify-center row-span-1  py-[10px] border-b-[1px] border-b-[#D9DEE5]">
            {reportHeader.orderringCompany}
          </div>
          <div className="w-full flex flex-row">
            <div className="text-[#4B505D] flex items-center justify-center flex-1 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
              {reportHeader.companyName}
            </div>
            <div className="text-[#4B505D] flex items-center justify-center flex-1 py-[10px]">
              {reportHeader.name}
            </div>
          </div>
        </div>
        <div className="col-span-2 row-span-2 border-r-[1px] border-r-[#D9DEE5]">
          <div className="text-[#4B505D] w-full flex items-center justify-center py-[10px] border-b-[1px] border-b-[#D9DEE5]">
            {reportHeader.equipmentBusinessOperator}
          </div>
          <div className="w-full flex flex-row">
            <div className="text-[#4B505D] flex items-center justify-center flex-1 py-[10px] border-r-[1px] border-r-[#D9DEE5]">
              {reportHeader.equipmentBusinessOperatorCompanyName}
            </div>
            <div className="text-[#4B505D] flex items-center justify-center flex-1  py-[10px]">
              {reportHeader.equipmentBusinessOperatorName}
            </div>
          </div>
        </div>
        <div className="text-[#4B505D] row-span-2 flex items-center justify-center py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {reportHeader.reportDetails}
        </div>
        <div className="text-[#4B505D] row-span-2 flex items-center justify-center py-[10px] border-r-[1px] border-r-[#D9DEE5]">
          {reportHeader.situation}
        </div>
        <div className="text-[#4B505D] row-span-2 flex items-center justify-center py-[10px] ">
          {reportHeader.viewChat}
        </div>
      </div>

      {reportData.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-10 text-center  text-[#A3A6AB] border-b-[1px] border-b-[#F1F3F6]"
        >
          <div className="flex py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            {row.num}
          </div>
          <div className="flex  py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            {row.reportDateTime}
          </div>
          <div className="flex  py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            <p>{row.reportor}</p>
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.companyName}
          </div>

          <div className="flex items-center justify-center py-[10px]  border-r-[1px] border-r-[#F1F3F6]">
            {row.name}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.equipmentCompanyName}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.equipmentName}
          </div>
          <div className="flex items-center justify-center py-[10px] px-2 border-r-[1px] border-r-[#F1F3F6]">
            {row.reportDetails}
          </div>
          <div
            onClick={() => {
              onOpenWithForm();
            }}
            className="flex items-center justify-center py-[10px]  underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]"
          >
            {row.situation}
          </div>
          <div
            onClick={() => {
              onOpen();
              setSelectedChat(row.name);
            }}
            className="flex items-center justify-center py-[10px]  underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]"
          >
            {row.viewChat}
          </div>
        </div>
      ))}
      <Modal
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeWithForm}
        buttonLabel={"확인"}
        cancelBtnLabel="닫기"
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333] w-[189px] text-center">
            신고 내용을 확인하였습니까?
          </span>
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

export default ReportTable;
