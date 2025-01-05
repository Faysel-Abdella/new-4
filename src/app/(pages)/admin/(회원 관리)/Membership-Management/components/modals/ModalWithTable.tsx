import Modal from "@/src/components/blocks/Modals/Modal";
import Table from "@/src/components/blocks/tabels/Table";
import React from "react";
import Data from "../data";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import TextInput from "@/src/components/blocks/inputs/Input";
import { Button } from "@/src/components/blocks/buttons/Button";

const ModalWithTable = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  const { changeModalData, changeModalHeader } = Data({});
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      cancelBtnLabel="취소"
      buttonLabel={"해제"}
      modalWidthInPercent="max-w-[50%]"
      closeButton={true}
    >
      <div className="w-full flex flex-col justify-center items-center bg-white gap-4 relative">
        <div className="flex justify-center items-center border-b-1 border-[#D9D9D9] py-4 w-full">
          <span className="text-[16px] font-[700]">마케팅 수신동의 변경</span>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4  ">
          <div className="flex justify-center items-center gap-2">
            <span className="text-[14px] font-[400] text-[#333333] w-[105px]">
              상태
            </span>
            <RadioButton
              options={["동의", "미동의"]}
              selectedValue="동의"
              onChange={() => {}}
              optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
            />
          </div>
          <div className="flex w-full gap-5">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="변경사유"
                placeholder={"기업"}
                labelColor={"text-[#333333]"}
              />
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <span className="text-[14px] font-[400] text-[#333333] w-[105px]">
              상태
            </span>
            <Button
              label={"선택"}
              backgroundColor={"bg-[#ABAFB7]"}
              borderRadius={"rounded-[5px]"}
              textStyle={" font-[400] text-[14px] text-white"}
              width="w-[46px]"
              onPress={() => {}}
            />
          </div>

          <div className="flex w-full items-end justify-end pb-4 border-b-1 border-[#D9D9D9]">
            <Button
              label={"변경"}
              backgroundColor={"bg-[#4A4E57]"}
              borderRadius={"rounded-[5px]"}
              textStyle={" font-[400] text-[14px] text-white"}
              width="w-[106px]"
              onPress={() => {}}
            />
          </div>

          <div className="flex flex-col gap-4">
            <Table
              tabelWidth={"w-[603px]"}
              header={changeModalHeader}
              data={changeModalData}
              title="변경 히스토리"
              hasPagination={true}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWithTable;
