import React from "react";
import { ChatType } from "./type";

const ChatBubble: React.FC<ChatType> = ({ message, timestamp, incoming }) => {
  return (
    <div className="">
      {incoming ? (
        <div className="flex flex-1 gap-[4px] justify-start max-w-[300px] ">
          <p className="px-[16px] py-[12px] text-[16px] text-grey-font rounded-r-[100px] rounded-bl-[50px] bg-white">
            {message}
          </p>
          <p className="text-grey-font-light text-[10px] w-[80px] flex  items-end">
            {timestamp}
          </p>
        </div>
      ) : (
        <div className="flex flex-1 gap-[4px] justify-end  max-w-[400px] ">
          <p className="text-grey-font-light text-[10px] w-[80px] flex items-end">
            {timestamp}
          </p>
          <p className="  px-[16px] py-[12px] text-[16px]  text-white rounded-l-[100px] rounded-br-[50px] bg-[#4373F9]">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
