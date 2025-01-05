import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import ReportCard from "./components/ReportCard";
import ReportNonPayment from "./components/ReportNonPayment";

const ReportManagement = () => {
  const Tabs = [
    { title: "채팅 관리", content: <ReportCard /> },
    { title: "임금체불 신고", content: <ReportNonPayment /> },
  ];
  return (
    <div className="px-[20] ">
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"
      />
    </div>
  );
};

export default ReportManagement;
