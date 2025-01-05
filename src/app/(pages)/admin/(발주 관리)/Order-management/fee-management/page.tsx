"use client";
import React from "react";
import { Button } from "@/src/components/blocks/buttons/Button";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import Excavator from "../components/Excavator";
// import EditFeeManagementTable from "../components/EditFeeManagementTable";

const FeeManagement = () => {
  const [isFeeManagement, setIsFeeManagement] = React.useState(true);

  const Tabs = [
    {
      title: "굴착기",
      content: (
        <div className="space-y-[20px]">
          <Excavator isFeeManagement={isFeeManagement} />
          {isFeeManagement ? (
            <div className="flex justify-end items-center">
              <Button
                label={"수정"}
                backgroundColor={"bg-[#4A4E57]"}
                borderRadius={"rounded-[5px]"}
                textStyle={"text-[14px] text-white w-[148px]"}
                onPress={() => setIsFeeManagement(!isFeeManagement)}
              />
            </div>
          ) : (
            <div className="flex justify-center gap-[16px] items-center">
              <Button
                label={"취소"}
                backgroundColor={"bg-[#A3A6AB]"}
                borderRadius={"rounded-[5px]"}
                textStyle={"text-[14px] text-white w-[148px]"}
              />
              <Button
                label={"저장"}
                backgroundColor={"bg-[#4A4E57]"}
                borderRadius={"rounded-[5px]"}
                textStyle={"text-[14px] text-white w-[148px]"}
              />
            </div>
          )}
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
