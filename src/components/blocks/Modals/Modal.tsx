import React, { ReactNode } from "react";
import {
  Modal as NModal,
  ModalContent,
  // ModalHeader,
  ModalBody,
  ModalFooter,
  // useDisclosure,
} from "@nextui-org/react";
import { Button } from "../buttons/Button";

const Modal = ({
  closeButton = false,

  cancelBtnLabel,
  buttonLabel,
  isOpen,
  onOpenChange,
  children,
  modalWidthInPercent,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  children: ReactNode;
  closeButton?: boolean;
  cancelBtnLabel?: string;
  buttonLabel: string;
  modalWidthInPercent?: string;
}) => {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <NModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="rounded-none"
      classNames={{
        closeButton: closeButton ? "" : "hidden",
        base: modalWidthInPercent,
      }}
    >
      <ModalContent className="w-full">
        {(onClose) => (
          <>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <div className="w-full flex justify-center items-center gap-3">
                {cancelBtnLabel && (
                  <Button
                    label={cancelBtnLabel || ""}
                    backgroundColor={"bg-[#A3A6AB]"}
                    borderRadius={"rounded-[5px]"}
                    textStyle={" font-[400] text-[14px] text-white"}
                    width="w-[106px]"
                    onPress={onClose}
                  />
                )}
                <Button
                  label={buttonLabel}
                  backgroundColor={"bg-[#4A4E57]"}
                  borderRadius={"rounded-[5px]"}
                  textStyle={"font-[400] text-[14px] text-white"}
                  width="w-[106px]"
                  onPress={onClose}
                />
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </NModal>
  );
};

export default Modal;
