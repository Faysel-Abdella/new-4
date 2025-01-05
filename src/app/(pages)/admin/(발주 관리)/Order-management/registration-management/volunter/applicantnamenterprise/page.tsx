"use client";
import React from "react";
import ApplicantNameEnterprise from "./components/enterprise";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import Myinformation from "../enterprise/components/myinformation";
import EquipmentInformation from "../enterprise/components/EquipmentInformation";
import ArticleInformation from "../enterprise/components/ArticleInformation";

const page = () => {
  const Tabs = [
    { title: "기본 정보", content: <ApplicantNameEnterprise /> },
    { title: "마이페이지 정보", content: <Myinformation /> },
    { title: "장비 정보", content: <EquipmentInformation /> },
    { title: "기사 정보", content: <ArticleInformation /> },
  ];
  return (
    <div className="">
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"
      />
    </div>
  );
};

export default page;
