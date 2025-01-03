"use client";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React, { useState } from "react";
import DetailandEditForm from "./DetailandEditForm";

const DetailandEdit = () => {
  const Tabs = [
    { title: "굴착기", content: <DetailandEditForm/> },
    { title: "지게차", content: <h1>hello</h1> },
    { title: "크레인", content: <h1>hello</h1> },
    { title: "덤프", content: <h1>hello</h1> },
    { title: "로더・불도저", content: <h1>hello</h1> },
  ];
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <div>
      <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[470px] gap-[24px]">
        <span className="text-[14px] font-[400] text-[#333333]">상태</span>

        <RadioButton
          options={["모집중", "배차완료", "수금완료", "배차취소"]}
          selectedValue={selectedValue}
          onChange={(value) => setSelectedValue(value)}
          optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
        />
      </div>
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
      
    </div>
  );
};

export default DetailandEdit;
