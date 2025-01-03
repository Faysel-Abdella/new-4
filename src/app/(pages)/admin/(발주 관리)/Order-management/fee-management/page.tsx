"use client";
import React from "react";
import { Button } from "@/src/components/blocks/buttons/Button";
import FeeManagementTable from "../components/FeeManagementTable";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
// import EditFeeManagementTable from "../components/EditFeeManagementTable";

const FeeManagement = () => {
  const Tabs = [
    {
      title: "굴착기",
      content: (
        <div className="space-y-[20px]">
          <FeeManagementTable />
          <div className="flex justify-end items-center">
            <Button
              label={"수정"}
              backgroundColor={"bg-[#4A4E57]"}
              borderRadius={"rounded-[5px]"}
              textStyle={"text-[14px] text-white w-[148px]"}
            />
          </div>
          {/* <EditFeeManagementTable /> */}
        </div>
      ),
    },
    { title: "지게차", content: <div></div> },
    { title: "크레인", content: <div></div> },
    { title: "불도저, 로더", content: <div></div> },
    { title: "덤프", content: <div></div> },
    { title: "조종사 (스페어)", content: <div></div> },
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

export default FeeManagement;
