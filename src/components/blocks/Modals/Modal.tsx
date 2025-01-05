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
  buttonOnClick,
  isOpen,
  onOpenChange,
  children,
  modalWidthInPercent,
  paddingHorizontal = "px-6 py-5",
  footer = true,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  buttonOnClick?: () => void;
  children: ReactNode;
  closeButton?: boolean;
  cancelBtnLabel?: string;
  buttonLabel?: string;
  modalWidthInPercent?: string;
  paddingHorizontal?: string;
  footer?: boolean;
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
        body: paddingHorizontal,
        footer: footer ? " " : "hidden",
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
                {buttonLabel && (
                  <Button
                    label={buttonLabel || ""}
                    backgroundColor={"bg-[#4A4E57]"}
                    borderRadius={"rounded-[5px]"}
                    textStyle={"font-[400] text-[14px] text-white"}
                    width="w-[106px]"
                    onPress={() => {
                      onClose();
                      if (buttonOnClick) {
                        buttonOnClick();
                      }
                    }}
                  />
                )}
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </NModal>
  );
};

export default Modal;
