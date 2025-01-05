"use client";
import Table from "@/src/components/blocks/tabels/Table";
import React from "react";
import data from "../data";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/src/components/blocks/Modals/Modal";

const CompletedOrRejected = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { completeOrRejectHeader, completeOrRejectData } = data({
    setShowCancelModal: () => onOpen(),
  });
  return (
    <div className="flex flex-col gap-4">
      <Table
        header={completeOrRejectHeader}
        data={completeOrRejectData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} buttonLabel={"닫기"}>
        <div className=" w-full flex flex-col justify-center items-center gap-2  pt-[40px] pb-[20px]">
          <span className="text-[20px] font-[400] text-[#333333]">
            거절 사유 텍스트
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default CompletedOrRejected;
