import React from "react";
import { Button } from "@/src/components/blocks/buttons/Button";
import BusinessTable from "../components/BusinessTable";
import EquipmentBusinessTopContent from "../components/EquipmentBusinessTopContent";

const EquipmentBusiness = () => {
  return (
    <div className="space-y-[20px]">
      <EquipmentBusinessTopContent />
      <BusinessTable />
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
