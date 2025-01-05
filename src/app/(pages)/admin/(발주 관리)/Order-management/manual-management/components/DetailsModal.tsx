import Table from "@/src/components/blocks/tabels/Table";
import React, { useState } from "react";
import ListTableData from "./ListTableData";
import Modal from "@/src/components/blocks/Modals/Modal";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import { Textarea } from "@nextui-org/react";
import { Button } from "@/src/components/blocks/buttons/Button";

const DetailsModal = ({
  isOpen,
  onOpenChange,
  onOpen,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
}) => {
  const [selecetedValue, setSelectedValue] = useState("");
  const { SendModalHeader, SendModalTableData } = ListTableData({
    openForm: onOpen,
  });
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      buttonLabel={"해제"}
      modalWidthInPercent="max-w-[50%]"
    >
      <div className=" w-full flex justify-center items-center pt-[50px] pb-[0px]">
        <div className="flex flex-col gap-2">
          <div className=" flex gap-5">
            <p className="min-w-[81px] text-sm text-[#404251]">구분</p>
            <RadioButton
              options={[
                "발주사(홍길동 | 01011112222)",
                "장비사업자(김철수 | 01012345678)",
              ]}
              selectedValue={selecetedValue}
              onChange={(value) => {
                setSelectedValue(value);
              }}
              optionStyles="text-sm text-[#333333]"
            />
          </div>
          <div className="flex items-center gap-5">
            {" "}
            <p className="min-w-[81px] text-sm text-[#404251]">문자내용</p>
            <Textarea
              className="max-w-lg"
              minRows={24}
              size="lg"
              placeholder="로그인"
              variant="bordered"
            />
          </div>
          <div className="flex justify-between py-3 border-b-1 border-[#E4E5EA]">
            <Button
              label="닫기"
              backgroundColor="bg-[#A3A6AB]"
              borderRadius="rounded-[5px]"
              textStyle="text-sm text-white"
              padding="p-[11px]"
              width="w-[106px]"
            />
            <Button
              label="문자 발송"
              backgroundColor="bg-[#4A4E57]"
              borderRadius="rounded-[5px]"
              textStyle="text-sm text-white"
              padding="p-[11px]"
              width="w-[106px]"
            />
          </div>
          <Table data={SendModalTableData} header={SendModalHeader} />
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
