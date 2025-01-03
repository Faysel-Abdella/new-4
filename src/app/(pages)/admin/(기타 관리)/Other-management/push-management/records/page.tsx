"use client";
import React from "react";
import { Button } from "@/src/components/blocks/buttons/Button";
import PushRecordDetails from "../components/PushRecordDetails";

const PushRecords = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <PushRecordDetails />
      <div className="flex items-center justify-center gap-[16px]">
        <Button
          label={"취소"}
          backgroundColor={"bg-[#A3A6AB]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
        <Button
          label={"등록"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
      </div>
    </div>
  );
};

export default PushRecords;
