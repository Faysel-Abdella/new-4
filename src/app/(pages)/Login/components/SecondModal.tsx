import { Button } from "@/src/components/blocks/buttons/Button";
import Modal from "@/src/components/blocks/Modals/Modal";
import React from "react";

const SecondModal = ({
  isOpen,
  onOpenChange,
  onClick,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onClick: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      cancelBtnLabel="취소"
      buttonLabel={"해제"}
    >
      <div className=" w-full flex flex-col gap-5 justify-center items-center pt-[40px] pb-[20px]">
        <div className="w-full flex flex-col gap-1 justify-center items-center">
          <span className="text-[20px] font-[400] text-[#333333]">
            일치하는 계정이 없습니다.
          </span>
          <span className="text-[20px] font-[400] text-[#333333]">
            입력하신 정보를 다시한번 확인해주세요.
          </span>
        </div>
        <div>
          <Button
            label="승인"
            backgroundColor="bg-[#4A4E57] "
            borderRadius="rounded-[5px]"
            textStyle="text-sm text-white"
            padding="py-[11px] px-[40px]"
            onPress={onClick}
          />
        </div>
      </div>
    </Modal>
  );
};

export default SecondModal;
