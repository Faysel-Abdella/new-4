"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { DropDownProp } from "./type";

const DropDown = ({
  options,
  defaultSelectedKeys,
  selectStyles,
  selectContainerStyles,
  insideStyles,
  selectedItemRadius = "rounded-md",
  valueColor = "",
  placeholder = "",
}: DropDownProp) => {
  return (
    <div className={`flex ${selectContainerStyles} items-center`}>
      <div className={`${selectContainerStyles}`}>
        <Select
          classNames={{
            mainWrapper: [`${selectStyles} w-full`],
            trigger: [`${insideStyles} ${selectedItemRadius} w-full`],
            value: [` ${valueColor} text-[15px]`],
          }}
          disallowEmptySelection={true}
          placeholder={placeholder}
          defaultSelectedKeys={[defaultSelectedKeys]}
          aria-label="Toggle selection"
        >
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DropDown;
