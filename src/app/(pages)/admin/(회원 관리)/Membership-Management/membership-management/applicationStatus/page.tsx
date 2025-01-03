import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import CompletedOrRejected from "../../components/membershipManagement/CompletedOrRejected";
import ApplyForMemebership from "../../components/membershipManagement/ApplyForMemebership";

const MembershipApplicationStatus = () => {
  const Tabs = [
    { title: "가입 신청", content: <ApplyForMemebership /> },
    { title: "완료 / 거절", content: <CompletedOrRejected /> },
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

export default MembershipApplicationStatus;
