"use client";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import EquipmentApplyForMembership from "../../components/membershipManagement/EquipmentApplyForMembership";
import EquipmentCompleteOrReject from "../../components/membershipManagement/EquipmentCompleteOrReject";

const EquipmentApplicationStatus = () => {
  const Tabs = [
    { title: "가입 신청", content: <EquipmentApplyForMembership /> },
    { title: "완료 / 거절", content: <EquipmentCompleteOrReject /> },
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

export default EquipmentApplicationStatus;
