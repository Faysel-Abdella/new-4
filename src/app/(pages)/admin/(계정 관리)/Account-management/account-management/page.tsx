"use client";
import React from "react";
import Sidebar from "./components/NestedList";
import TopContent from "./components/TopContent";
import Table from "@/src/components/blocks/tabels/Table";
import data from "./data";
import { useDisclosure } from "@nextui-org/react";
import FormModal from "./components/FormModal";
import CompleteFormModal from "./components/CompleteFormalModal";
import Modal from "@/src/components/blocks/Modals/Modal";

const AccountManagement = () => {
  const { AccountData, AccoutHeader } = data();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onOpenChange: onOpenConfirmChange,
  } = useDisclosure();

  const {
    isOpen: isCompleteOpen,
    onOpen: onCompleteOpen,
    onOpenChange: onCompleteOpenChange,
  } = useDisclosure();
  return (
    <div className="flex w-full flex-col gap-2">
      <span className="text-[20px] text-[#333333] font-[400]">
        조직 및 계정 관리
      </span>
      <div className="flex w-full gap-3">
        <Sidebar />
        <div className="flex w-full flex-col gap-3">
          <TopContent onClick={onOpen} />
          <Table header={AccoutHeader} data={AccountData} title="" />
        </div>
      </div>
      <FormModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onButtonClick={onCompleteOpen}
      />
      <CompleteFormModal
        isOpen={isCompleteOpen}
        onOpenChange={onCompleteOpenChange}
        onButtonClick={onOpenConfirm}
      />

      <Modal
        isOpen={isOpenConfirm}
        onOpenChange={onOpenConfirmChange}
        cancelBtnLabel="취소"
        buttonLabel={"삭제"}
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333]">
            해당 계정을 삭제처리 하시겠습니까?
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default AccountManagement;
