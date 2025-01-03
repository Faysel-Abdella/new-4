
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";

import ManualCalendar from "./components/manualCalendar";
import List from "./components/List";

const ManualManagement = () => {
  const Tabs = [
    { title: "캘린더", content: <ManualCalendar /> },
    { title: "리스트", content: <List /> },
  ];
  const coloredRadioButton = [
    { title: "견적문의", Color: "#FE1C1C" },
    { title: "배차완료", Color: "#5881C9" },
    { title: "수금완료", Color: "#548235" },
    { title: "배차취소", Color: "#FFBF00" },
  ];
  return (
    <div  className="relative">
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"

      />
      <div className=" w-fit absolute top-1 right-1  py-[20px] px-[30px] rounded-[100px] bg-white">
        <div className="flex gap-2">
          {coloredRadioButton.map((item, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div
                style={{ backgroundColor: item.Color }}
                className="w-[12px] h-[12px]  rounded-full "
              ></div>
              <p className="text-sm font-normal text-[#333333]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManualManagement;
