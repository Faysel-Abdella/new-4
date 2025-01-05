import React from "react";
import EquimentPITopContent from "./EquimentPITopContent";
import Table from "@/src/components/blocks/tabels/Table";
import Modal from "@/src/components/blocks/Modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import EquipmentTableData from "./EquipmentTableData";

const IssuanceOfTaxInvoice = () => {
  const {
    isOpen: isOpenForm,
    onOpen: onOpenWithForm,
    onOpenChange: onOpenChangeWithForm,
  } = useDisclosure();
  const { EquipementPTTableData, EquipmentPIHeader } = EquipmentTableData({
    showModal: onOpenWithForm,
  });

  return (
    <div>
      <EquimentPITopContent />
      <div className="mt-5">
        <Table
          data={EquipementPTTableData}
          header={EquipmentPIHeader}
          title="N건의 게시물이 검색되었습니다(발행완료 N건  |   발행실패 N건)"
          hasPagination={true}
        />

        <Modal
          isOpen={isOpenForm}
          onOpenChange={onOpenChangeWithForm}
          buttonLabel={"재발행"}
          cancelBtnLabel="취소"
        >
          <div className=" w-full flex flex-col gap-5 justify-center items-center pt-[50px] pb-[10px]">
            <span className="text-[20px] font-[400] text-[#333333] text-center">
              발행 실패 오류 코드
            </span>
            <span className="text-[20px] font-[400] text-[#333333] text-center">
              세금계산서를 재발행 하시겠습니까?
            </span>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default IssuanceOfTaxInvoice;
