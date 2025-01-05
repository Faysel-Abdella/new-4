import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import TextInput from "@/src/components/blocks/inputs/Input";
import Modal from "@/src/components/blocks/Modals/Modal";
import React from "react";

const SanctionModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      cancelBtnLabel="취소"
      buttonLabel={"해제"}
    >
      <div className=" w-full flex justify-center items-center pt-[40px] pb-[20px]">
        <div className="w-full px-9 flex flex-col items-start gap-4  ">
          <div className="flex justify-center items-center gap-2">
            <span className="text-[14px] font-[400] text-[#333333] w-[105px]">
              제재기간
            </span>
            <RadioButton
              options={["7일", "30일", "영구"]}
              selectedValue="7일"
              onChange={() => {}}
              optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
            />
          </div>

          <div className="flex w-full gap-5">
            <div className="w-full">
              <TextInput
                type={"textArea"}
                label="제재사유"
                labelColor="text-[#333333]"
                placeholder={""}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SanctionModal;
