"use client";
import React from "react";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import BasicInfo from "./components/BasicInfo";
import MyPageInfo from "./components/MyPageInfo";
import EquipmentInformation from "./components/EquipmentInformation";
import ArticleInformation from "./components/ArticleInformation";

const ExponentPage = () => {
  const Tabs = [
    {
      title: "기본 정보",
      content: <BasicInfo />,
    },
    { title: "마이페이지 정보", content: <MyPageInfo /> },
    { title: "장비 정보", content: <EquipmentInformation /> },
    { title: "기사 정보", content: <ArticleInformation /> },
  ];
  return (
    <div className="flex flex-col gap-3">
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"
      />
    </div>
  );
};

export default ExponentPage;
