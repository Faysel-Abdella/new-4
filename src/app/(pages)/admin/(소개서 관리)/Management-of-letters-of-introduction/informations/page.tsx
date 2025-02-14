"use client";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import EquipmentInformation from "../components/EquipmentInformation";
import ArticleInformation from "../components/ArticleInformation";
import SecondBasicInformation from "../components/SecondBasicInformation";

const Informations = () => {
  const Tabs = [
    { title: "기본 정보", content: <SecondBasicInformation /> },
    { title: "장비 정보", content: <EquipmentInformation /> },
    { title: "기사 정보", content: <ArticleInformation /> },
  ];
  return (
    <div>
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"
      />
    </div>
  );
};

export default Informations;
