import React from "react";
import ChatScreen from "./ChatScreen";
import Modal from "../Modals/Modal";

const ChatModal = ({
  isOpen,
  onOpenChange,
  senderName,
  profileName,
  title,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  senderName: string;
  profileName: string;
  title?: string;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      closeButton={true}
      modalWidthInPercent="max-w-[50%]"
      paddingHorizontal="px-0 py-0"
      footer={false}
    >
      {title && (
        <div className="flex justify-center pt-[40px] ">
          <p className="text-[#333333] font-bold">{title}</p>
        </div>
      )}
      <div className=" w-full flex justify-center items-center pt-[40px] pb-[0px]">
        <ChatScreen senderName={senderName} profileName={profileName} />
      </div>
    </Modal>
  );
};

export default ChatModal;
