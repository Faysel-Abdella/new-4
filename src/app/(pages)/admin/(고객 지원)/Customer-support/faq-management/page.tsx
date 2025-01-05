"use client";
import React, { useState } from "react";
import CustomerSupportTopContent from "../components/CustomerSupportTopContent";
import Table from "@/src/components/blocks/tabels/Table";
import data from "./data";
import Modal from "@/src/components/blocks/Modals/Modal";
import { Register } from "../components/FaqDetailEditModal";
import { useDisclosure } from "@nextui-org/react";
import { Register as FaqRegister } from "../components/FaqRegistrationModal";

const FAQManagement = () => {
  const [activePage, setActivePage] = useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onOpenChange: onOpenChangeRegister,
  } = useDisclosure();

  // const [isModalVisible, setModalVisible] = useState(false);

  const { faqHeader, faqData } = data({ showModal: onOpen });
  return (
    <div className="space-y-[20px]">
      <CustomerSupportTopContent
        option={[
          { key: "1", label: "전체" },
          { key: "2", label: "사용" },
          { key: "3", label: "미사용" },
        ]}
      />
      <div className="bg-white px-[24px] text-[14px] py-[20px] space-y-[20px] rounded-[10px]">
        <Table
          header={faqHeader}
          data={faqData}
          title="  N건의 게시물이 검색되었습니다"
          hasPagination={false}
          buttonLabel="등록"
          onClick={onOpenRegister}
        />
        <div className="flex items-center justify-center text-[14px] text-[#4B505D] gap-[20px]">
          {Array.from({ length: 10 }, (_, index) => (
            <p
              key={index}
              onClick={() => setActivePage(index + 1)} // Set active page on click
              className={`cursor-pointer  ${
                activePage === index + 1 ? "text-main-color " : ""
              }`}
            >
              {index + 1}
            </p>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        cancelBtnLabel="취소"
        buttonLabel={"수정"}
        modalWidthInPercent="max-w-[40%] max-h-[70%]"
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <Register />
        </div>
      </Modal>

      <Modal
        isOpen={isOpenRegister}
        onOpenChange={onOpenChangeRegister}
        cancelBtnLabel="취소"
        buttonLabel={"수정"}
        modalWidthInPercent="max-w-[40%] max-h-[70%]"
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <FaqRegister />
        </div>
      </Modal>
    </div>
  );
};

export default FAQManagement;
