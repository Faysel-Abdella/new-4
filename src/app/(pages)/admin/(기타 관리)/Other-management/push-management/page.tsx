"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import React, { useState } from "react";
import PushTable from "./components/PushTable";
import { useRouter } from "next/navigation";
import PushTopContent from "./components/PushTopContent";

const PushManagement = () => {
  const router = useRouter();
  const [activePage, setActivePage] = useState(1);
  const handleButtonClick = () => {
    router.push("/admin/Other-management/push-management/registration");
  };
  const handleLinkClick = () => {
    router.push("/admin/Other-management/push-management/records");
  };
  return (
    <div className="space-y-[20px]">
      <PushTopContent />
      <div className="bg-white rounded-[10px] px-[24px] py-[20px] space-y-[40px]">
        <div className="flex  items-center justify-between">
          <p>N건의 게시물이 검색되었습니다</p>
          <Button
            label={"등록"}
            backgroundColor={"bg-[#404251]"}
            borderRadius={"rounded-full"}
            textStyle={"text-[14px]  text-white"}
            width="w-[50px]"
            padding="px-[20px] py-[16px]"
            onPress={handleButtonClick}
          />
        </div>
        <PushTable handleClickOnLink={handleLinkClick} />
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

export default PushManagement;
