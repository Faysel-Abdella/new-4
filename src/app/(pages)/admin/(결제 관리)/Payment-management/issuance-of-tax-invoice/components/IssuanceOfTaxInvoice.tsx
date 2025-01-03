import React, { useState } from "react";
import EquimentPITopContent from "./EquimentPITopContent";
import { EquipementPTTableData, EquipmentPIHeader } from "./EquipmentTableData";
import Table from "@/src/components/blocks/tabels/Table";

import ModalWrapper from "@/src/components/blocks/Modals/ModalWrapper";
import { Button } from "@/src/components/blocks/buttons/Button";

const IssuanceOfTaxInvoice = () => {
  const [showModal, setShowModal] = useState(false);
  const handleChange = () => {
    setShowModal(!showModal);
  };
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

        {showModal && (
          <ModalWrapper width="w-[470px] h-[242px]">
            <div className="flex flex-col justify-center items-center gap-[40px]">
              <p className="text-[20px] text-[#333333]">발행 실패 오류 코드</p>
              <p className="text-[20px] text-[#333333]">
                세금계산서를 재발행 하시겠습니까?
              </p>
              <div className="flex gap-4">
                <Button
                  label="취소"
                  backgroundColor="bg-[#A3A6AB]"
                  padding="p-[11px]"
                  borderRadius="rounded-[5px]"
                  textStyle="text-sm text-white"
                  onPress={handleChange}
                  width="w-[148px]"
                />
                <Button
                  label="재발행"
                  backgroundColor="bg-[#4A4E57]"
                  padding="p-[11px]"
                  borderRadius="rounded-[5px]"
                  textStyle="text-sm text-white"
                  width="w-[148px]"
                />
              </div>
            </div>
          </ModalWrapper>
        )}
      </div>
    </div>
  );
};

export default IssuanceOfTaxInvoice;
