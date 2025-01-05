/* eslint-disable @typescript-eslint/no-explicit-any */
import Modal from "@/src/components/blocks/Modals/Modal";
import { Image } from "@nextui-org/react";
import React from "react";

const RegistrationImageModal = ({
  isOpen,
  onOpenChange,
  image,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  image: any;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      buttonLabel={"닫기"}
      paddingHorizontal="px-0 py-0"
    >
      <div className=" w-full bg-white flex flex-col gap-[20px] justify-center items-center ">
        <p className="text-[16px] pt-[20px] font-[700] text-[#333333] text-center">
          계약서
        </p>
        <div className="h-[1px] w-full bg-[#d9d9d9]"></div>

        <Image
          src={image.src}
          alt="contract"
          width={358}
          height={512}
          className="w-[358px] h-[512px]"
        />
      </div>
    </Modal>
  );
};

export default RegistrationImageModal;
