import { Button } from "@/src/components/blocks/buttons/Button";
import Modal from "@/src/components/blocks/Modals/Modal";
import React from "react";

const LoginModal = ({
  isOpen,
  onOpenChange,
  onClick,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onClick: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} footer={false}>
      <div className=" w-full flex flex-col gap-5 justify-center items-center pt-[40px] pb-[20px]">
        <div className="w-full flex flex-col gap-1 justify-center items-center">
          <span className="text-[20px] font-[400] text-[#333333]">
            계정이 임시조치 되었습니다.
          </span>
          <span className="text-[20px] font-[400] text-[#333333]">
            본사 마스터 계정으로 문의하세요.
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

export default LoginModal;
