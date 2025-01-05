import Modal from "@/src/components/blocks/Modals/Modal";
import Table from "@/src/components/blocks/tabels/Table";
import { useDisclosure } from "@nextui-org/react";
import React from "react";
import data from "../../membership-management/equipmentApplicationStatus/data";

const EquipmentCompleteOrReject = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { equimentCompleteOrRejectHeader, equipmentCompleteOrRejectData } =
    data({ showCancelModal: () => onOpen() });
  return (
    <div className="flex flex-col gap-4">
      <Table
        header={equimentCompleteOrRejectHeader}
        data={equipmentCompleteOrRejectData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} buttonLabel={"닫기"}>
        <div className=" w-full flex flex-col justify-center items-center gap-2  pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333]">
            거절 사유 텍스트
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default EquipmentCompleteOrReject;
