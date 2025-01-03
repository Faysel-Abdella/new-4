import React from "react";
import { ChatType } from "./type";
import ChatBubble from "./ChatBubble";
import { CloseIcon } from "../Modals/Icons";

const messages: ChatType[] = [
  {
    message: "안녕하세요",
    timestamp: "오후 1:31",
    incoming: true,
  },
  {
    message: "견적 내용 확인해보겠습니다.",
    timestamp: "오후 1:31",
    incoming: true,
  },
  {
    message: "max-width 여기까지 늘어납니다. 시간 표시 여백 뺀 공간까지요",
    timestamp: "오후 1:32",
    incoming: true,
  },
  {
    message: "max-width 여기까지 늘어납니다. 여기까지 늘어납니다.",
    timestamp: "오후 1:32",
    incoming: false,
  },
  {
    message: "max-width 여기까지 늘어납니다. 여기까지 늘어납니다.",
    timestamp: "오후 1:32",
    incoming: false,
  },
];

interface ChatScreenProps {
  senderName: string;
  profileName: string;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ senderName, profileName }) => {
  return (
    <div className="bg-[#F2F3F5]">
      <div className="flex items-center bg-white justify-between px-4 py-[20px] relative">
        <p className="font-bold text-center flex-1">장비 선택</p>
        <div className="absolute right-4">
          <CloseIcon />
        </div>
      </div>

      <div className="p-4 space-y-[16px] overflow-y-scroll overflow-x-hidden scrollbar-hide">
        {messages.map((message, index) => {
          return (
            <div key={index}>
              {message.incoming && (
                <div className="flex flex-row gap-[10px] justify-start">
                  <p className="flex justify-start text-[16px] text-grey-font-light py-[12px]">
                    {senderName}
                  </p>
                  <ChatBubble
                    message={message.message}
                    timestamp={message.timestamp}
                    incoming={message.incoming}
                  />
                </div>
              )}
              {!message.incoming && (
                <div className="flex flex-row gap-[10px] justify-end">
                  <ChatBubble
                    message={message.message}
                    timestamp={message.timestamp}
                    incoming={message.incoming}
                  />
                  <p className="flex justify-end text-[16px] text-grey-font-light py-[12px]">
                    {profileName}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatScreen;
