"use client";
import React from "react";
import CustomerSupportTopContent from "../components/CustomerSupportTopContent";
import Table from "@/src/components/blocks/tabels/Table";
import data from "./data";
import { useDisclosure } from "@nextui-org/react";
import NoticeFormModal from "../components/NoticeFormModal";
import NoticeManagementDetailsModal from "../components/NoticeManagementDetailsModal";

const NoticeManagement = () => {
 
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenDetails,
    onOpen: onOpenDetails,
    onOpenChange: onOpenChangeDetails,
  } = useDisclosure();
  const { noticeHeader, noticeData } = data({ showModal: onOpenDetails });
  return (
    <div className="space-y-[20px]">
      <CustomerSupportTopContent
        option={[
          { key: "1", label: "전체" },
          { key: "2", label: "진행" },
          { key: "3", label: "종료" },
        ]}
      />
      <div className="bg-white px-[24px] text-[14px] py-[20px] space-y-[20px] rounded-[10px]">
        <Table
          header={noticeHeader}
          data={noticeData}
          title="N건의 게시물이 검색되었습니다"
          hasPagination={false}
          buttonLabel="등록"
          onClick={onOpen}
        />
      </div>
      <NoticeManagementDetailsModal
        isOpen={isOpenDetails}
        onOpenChange={onOpenChangeDetails}
        value=""
      />
      <NoticeFormModal isOpen={isOpen} onOpenChange={onOpenChange} value="" />
    </div>
  );
};

export default NoticeManagement;
