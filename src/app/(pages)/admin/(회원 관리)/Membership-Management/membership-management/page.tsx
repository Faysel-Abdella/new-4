import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import Ordering from "../components/membershipManagement/Ordering";
import Equipment from "../components/membershipManagement/Equipment";

const MembershipManagement = () => {
  const Tabs = [
    { title: "발주사", content: <Ordering /> },
    { title: "장비사업자", content: <Equipment /> },
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

export default MembershipManagement;
