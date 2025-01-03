import React from "react";
import FeeManagementTableEditing from "./FeeManagementTableEditing";
import { Button } from "@/src/components/blocks/buttons/Button";

const EditFeeManagementTable = () => {
  return (
    <div className="space-y-[20px]">
      <FeeManagementTableEditing />
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
    </div>
  );
};

export default EditFeeManagementTable;
