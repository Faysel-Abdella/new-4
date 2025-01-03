"use client";
import React from "react";
import EquipmentTopContent from "./EquipmentTopContent";
import EquipmentBusinessTable from "./EquipmentBusinessTable";
import { Button } from "@/src/components/blocks/buttons/Button";

const EquipmentBusiness = () => {
  return (
    <div className="space-y-[20px]">
      <EquipmentTopContent />
      <EquipmentBusinessTable />
      <div className="flex justify-center items-center gap-[16px] ">
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

export default EquipmentBusiness;
