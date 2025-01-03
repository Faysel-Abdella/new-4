'use client'
import React from "react";
import EquipmentPartnerIssue from "./components/EquipmentPartnerIssue";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import IssuanceOfTaxInvoice from "./components/IssuanceOfTaxInvoice";

const Page = () => {
  const Tabs = [
    { title: "장비파트너 발행", content: <EquipmentPartnerIssue/> },
    { title: "위수탁 발행 (USER간)", content: <IssuanceOfTaxInvoice/> },
    
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

export default Page;
