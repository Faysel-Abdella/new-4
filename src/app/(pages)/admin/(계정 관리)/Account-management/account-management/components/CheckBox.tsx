/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox } from "@nextui-org/react";
import React from "react";

const CheckBox = ({
  data,
  label,
  selected = false,
}: {
  data?: any;
  label: string;
  selected?: boolean;
}) => {
  return (
    <div className="w-full">
      <div className="flex gap-2 w-full">
        <span className="min-w-[100px] text-[#404251]">{label}</span>
        <div className="flex flex-col p-2 gap-2 bg-[#F1F3F6] rounded-[10px] w-full">
          {data.map((item: any, index: any) => (
            <Checkbox
              defaultSelected={selected}
              key={index}
              className="text-[#404251]"
            >
              {item.name}
            </Checkbox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckBox;
