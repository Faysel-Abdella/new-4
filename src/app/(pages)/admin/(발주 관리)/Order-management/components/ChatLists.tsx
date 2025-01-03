import React, { useState } from "react";
import ChatListTable from "./ChatListTable";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";

const ChatLists = () => {
  const [activePage, setActivePage] = useState(1);
  const dropDownOptions = [
    {
      key: "1",
      label: "이름",
    },
    {
      key: "2",
      label: "사업자명",
    },
    {
      key: "3",
      label: "전호번호",
    },
  ];
  return (
    <div className="space-y-[20px]">
      <div className="flex justify-center items-center rounded-[100px] bg-white  py-[10px] px-[30px] w-auto max-w-[450px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
        <div className="flex gap-3">
          <DropDown
            options={dropDownOptions}
            defaultSelectedKeys={"1"}
            selectStyles="w-[105px] text-[14px] font-[400] text-[#333333]"
            insideStyles="text-[14px] font-[400] text-[#333333]"
            selectedItemRadius="rounded-[100px]"
          />

          <SearchInput placeholder="검색어를 입력해주세요" onClick={() => {}} />
        </div>
      </div>

      <div className="rounded-[10px] px-[24px] py-[20px] bg-white space-y-[20px]">
        <p className="text-[16px] text-[#333333] ">
          N건의 게시물이 검색되었습니다
        </p>

        <ChatListTable />
        <div className="flex items-center justify-center text-[14px] text-[#4B505D] gap-[20px]">
          {Array.from({ length: 10 }, (_, index) => (
            <p
              key={index}
              onClick={() => setActivePage(index + 1)} // Set active page on click
              className={`cursor-pointer  ${
                activePage === index + 1 ? "text-main-color " : ""
              }`}
            >
              {index + 1}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatLists;
