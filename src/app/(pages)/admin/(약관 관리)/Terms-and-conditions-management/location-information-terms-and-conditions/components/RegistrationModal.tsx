import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import MarkDown from "@/src/components/blocks/markdown/MarkDown";
import Modal from "@/src/components/blocks/Modals/Modal";
import React from "react";

export const RegistrationModal = ({
  isOpen,
  onOpenChange,
  value,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  value?: string;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      buttonLabel={"해제"}
      cancelBtnLabel="취소"
      modalWidthInPercent="max-w-[60%]"
    >
      <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
        <div className="flex w-full flex-col gap-[10px]">
          <div className="flex gap-5 w-full">
            <p className="min-w-[81px] text-sm text-[#333333]">제목</p>
            <div className="w-full">
              <InputNoLabel placeholder="제목 입력" />
            </div>
          </div>
          <div className="flex gap-5">
            <p className="min-w-[81px] text-sm text-[#333333]">내용</p>
            <div className="w-full">
              <MarkDown value={value || ""} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
