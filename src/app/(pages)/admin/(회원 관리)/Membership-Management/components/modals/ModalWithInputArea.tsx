import TextAreaInput from "@/src/components/blocks/inputs/TextArea";
import Modal from "@/src/components/blocks/Modals/Modal";
import React from "react";

const ModalWithInputArea = ({
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
          <div className="flex justify-start items-center gap-2">
            <span className="text-[20px] font-[400] text-[#333333]">
              차단을 해제하시겠습니까?
            </span>
          </div>

          <div className="flex w-full gap-5">
            <div className="w-full">
              <TextAreaInput type={"textArea"} placeholder={""} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalWithInputArea;
