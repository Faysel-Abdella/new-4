"use client";
import React from "react";
import data from "./data";
import Table from "@/src/components/blocks/tabels/Table";
import Modal from "@/src/components/blocks/Modals/Modal";
import { useDisclosure } from "@nextui-org/react";

const PasswordMismatchManagement = () => {
  const { isOpen, onOpenChange } = useDisclosure();

  const { missmatchHeader, missmatchData } = data({
    onClickToRelease: onOpenChange,
  });

  return (
    <>
      <Table
        header={missmatchHeader}
        data={missmatchData}
        title=""
        hasPagination={false}
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        cancelBtnLabel="취소"
        buttonLabel="해제"
      >
        <div className="w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333]">
            해당 계정 잠금을 해제하시겠습니까?
          </span>
        </div>
      </Modal>
    </>
  );
};

export default PasswordMismatchManagement;
