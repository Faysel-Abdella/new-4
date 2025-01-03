"use client";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";

import OrderingCompany from "./components/OrderingCompany";

import EquipmentOperator from "./components/EquipmentOperator";

const Page = () => {
  const Tabs = [
    { title: "발주사", content: <OrderingCompany /> },
    { title: "장비사업자", content: <EquipmentOperator /> },
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
