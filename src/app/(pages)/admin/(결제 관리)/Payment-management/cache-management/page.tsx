'use client'
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";


import CacheBalanceManagement from "./components/CacheBalanceManagement";
import UsageManagement from "./components/usageManagement";
import WithDrawalApp from "./components/WithDrawalApp";

const CacheManagement = () => {
  const Tabs = [
    { title: "캐시 잔액 관리", content: <CacheBalanceManagement/> },
    { title: "사용 관리", content: <UsageManagement/> },
    {title:"출금 신청",content:<WithDrawalApp/>}
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

export default CacheManagement;
