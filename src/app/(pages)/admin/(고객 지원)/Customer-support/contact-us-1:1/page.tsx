"use client";
import React from "react";
import CustomerSupportTopContent from "../components/CustomerSupportTopContent";
import Table from "@/src/components/blocks/tabels/Table";
import data from "./data";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/src/components/blocks/Modals/Modal";
import CustomerSupportModal from "../components/CustomerSupportModal";

const ContactUs = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenComplete,
    onOpen: onOpenComplete,
    onOpenChange: onOpenChangeComplete,
  } = useDisclosure();
  const { contactUsHeader, contactUsData } = data({ showModal: onOpen });
  return (
    <div className="space-y-[20px]">
      <CustomerSupportTopContent
        option={[
          { key: "1", label: "전체" },
          { key: "2", label: "대기" },
          { key: "3", label: "답변완료" },
        ]}
      />
      <Table
        header={contactUsHeader}
        data={contactUsData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        cancelBtnLabel="취소"
        buttonLabel={"답변"}
        modalWidthInPercent="max-w-[30%] max-h-[70%]"
        buttonOnClick={onOpenComplete}
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <CustomerSupportModal complete={false} />
        </div>
      </Modal>

      <Modal
        isOpen={isOpenComplete}
        onOpenChange={onOpenChangeComplete}
        buttonLabel={"닫기"}
        modalWidthInPercent="max-w-[30%] max-h-[70%]"
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <CustomerSupportModal complete={true} />
        </div>
      </Modal>
    </div>
  );
};

export default ContactUs;
