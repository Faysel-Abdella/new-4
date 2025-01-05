"use client";
import React from "react";
import Table from "@/src/components/blocks/tabels/Table";
import TextInput from "@/src/components/blocks/inputs/Input";
import data from "../data";
import Modal from "@/src/components/blocks/Modals/Modal";
import { useDisclosure } from "@nextui-org/react";

const ApplyForMemebership = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenCancel,
    onOpen: onOpenCancel,
    onOpenChange: onOpenChangeCancel,
  } = useDisclosure();
  const { applyForMemebershipData, applyForMemebershipHeader } = data({
    setShowApprovalModal: () => onOpen(),
    exponentPagePath:
      "/admin/Membership-Management/membership-management/applicationStatus/exponent",
    exponentSecondPath:
      "/admin/Membership-Management/membership-management/applicationStatus/exponentNext",
    setShowCancelModal: () => onOpenCancel(),
  });

  return (
    <div className="flex flex-col gap-4">
      <Table
        header={applyForMemebershipHeader}
        data={applyForMemebershipData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />

      <Modal
        isOpen={isOpenCancel}
        onOpenChange={onOpenChangeCancel}
        cancelBtnLabel="취소"
        buttonLabel={"해제"}
        modalWidthInPercent="max-w-[35%]"
      >
        <div className=" w-full flex flex-col justify-center items-center gap-2  pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333]">
            사업자를 승인하시겠습니까?
          </span>
          <span className="text-[20px] font-[400] text-[#333333]">
            승인 시 사업자는 서비스 정상 이용이 가능합니다.
          </span>
        </div>
      </Modal>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        cancelBtnLabel="취소"
        buttonLabel={"해제"}
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <div className="flex flex-col justify-center items-center gap-10 w-full">
            <span className="font-400 text-[20px]">
              거절 사유를 입력해주세요.
            </span>
            <TextInput
              type={"text"}
              width={"w-full"}
              placeholder={""}
              containerStyle="justify-center items-center"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ApplyForMemebership;
