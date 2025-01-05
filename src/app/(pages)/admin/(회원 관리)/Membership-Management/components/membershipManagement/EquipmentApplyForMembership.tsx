"use client";
import Table from "@/src/components/blocks/tabels/Table";
import React from "react";
import data from "../../membership-management/equipmentApplicationStatus/data";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/src/components/blocks/Modals/Modal";
import TextInput from "@/src/components/blocks/inputs/Input";

const EquipmentApplyForMembership = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isAppovedOpen,
    onOpen: onApprovedOpen,
    onOpenChange: onOpenApporovedChange,
  } = useDisclosure();

  const {
    equipmentApplyForMemebershipHeader,
    equipmentApplyForMemebershipData,
  } = data({
    setEquipmentShowCancelModal: () => onOpen(),
    setEquipmentShowApprovalModal: () => onApprovedOpen(),
    exponentPath:
      "/admin/Membership-Management/membership-management/equipmentExponent",
    exponentSecondPath:
      "/admin/Membership-Management/membership-management/equipmentSecondExponent",
  });

  return (
    <div className="flex flex-col gap-4">
      <Table
        header={equipmentApplyForMemebershipHeader}
        data={equipmentApplyForMemebershipData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        cancelBtnLabel="취소"
        buttonLabel={"승인"}
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
        isOpen={isAppovedOpen}
        onOpenChange={onOpenApporovedChange}
        cancelBtnLabel="취소"
        buttonLabel={"거절"}
        modalWidthInPercent="max-w-[35%]"
      >
        <div className=" w-full flex flex-col justify-center items-center gap-8  pt-[45px] pb-[25px]">
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
      </Modal>
    </div>
  );
};

export default EquipmentApplyForMembership;
