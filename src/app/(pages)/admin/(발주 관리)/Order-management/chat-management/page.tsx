"use client";
import React from "react";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import ChatLists from "../components/ChatLists";
import Instructions from "../components/Instructions";

const ChatManagement = () => {
  const Tabs = [
    { title: "채팅 관리", content: <ChatLists /> },
    { title: "안내 문구", content: <Instructions /> },
  ];
  return (
    <div className="px-[20]  mt-[30px]">
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"
      />
    </div>
  );
};

export default ChatManagement;
