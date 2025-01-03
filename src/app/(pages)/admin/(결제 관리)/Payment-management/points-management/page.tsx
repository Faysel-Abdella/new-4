'use client'
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";



import UsageManagement from "../cache-management/components/usageManagement";
import CacheBalanceManagement from "./components/CacheBalanceManagement";


const PointManagement = () => {
  const Tabs = [
    { title: "캐시 잔액 관리", content: <CacheBalanceManagement/> },
    { title: "사용 관리", content: <UsageManagement/> },
    
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

export default PointManagement;
