"use client";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";

import ExcavatorNewOrderRegistartionForm from "./excavatorNewOrderRegistartionForm";
import DumpOrderRegistartionForm from "./dumpNewOrderRegistration";

const NewOrderRegistration = () => {
  const Tabs = [
    { title: "굴착기", content: <ExcavatorNewOrderRegistartionForm /> },
    { title: "지게차", content: <h1> </h1> },
    { title: "크레인", content: <h1> </h1> },
    { title: "덤프", content: <DumpOrderRegistartionForm /> },
    { title: "로더・불도저", content: <h1> </h1> },
  ];
  return (
    <div className="mt-5 ">
      <CustomTab
        items={Tabs}
        raduis="rounded-none"
        selectedBgColor="bg-white"
        selectedTextColor="text-[#255DF9]"
        unselectedBgColor="bg-[#F2F3F5]"
        unselectedBorderColor="border-r-1 border-[#E4E5EA]"
      />
    </div>
  );
};

export default NewOrderRegistration;
