'use client'
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import React from "react";
import { option1, option2, option3, option4, option5, option6, option7, SelectedOption1, SelectedOption2, SelectedOption3, SelectedOption4, SelectedOption5, SelectedOption6, SelectedOption7 } from "./OptionData";

const HomeTable = () => {
  const data = [
    ["2025.08.23 14:11:21", "5,000", "5,000","5,000","5,000","5,000","5,000"],
    ["2025.08.23 14:11:21", "5,000", "5,000","5,000","5,000","5,000","5,000"],
    ["2025.08.23 14:11:21", "5,000", "5,000","5,000","5,000","5,000","5,000"],
    ["2025.08.23 14:11:21", "5,000", "5,000","5,000","5,000","5,000","5,000"],
  ]
  const dropdownData = [
    { options: option1, defaultSelectedKeys: SelectedOption1, width: "w-[110px]" },
    { options: option2, defaultSelectedKeys: SelectedOption2, width: "w-[90px]" },
    { options: option3, defaultSelectedKeys: SelectedOption3, width: "w-[90px]" },
    { options: option4, defaultSelectedKeys: SelectedOption4, width: "w-[90px]" },
    { options: option5, defaultSelectedKeys: SelectedOption5, width: "w-[80px]" },
    { options: option6, defaultSelectedKeys: SelectedOption6, width: "w-[90px]" },
    { options: option7, defaultSelectedKeys: SelectedOption7, width: "w-[110px]" },
  ];
  return (
    <section>
      
    <table className=" w-full">
    <thead className="">
        <tr className="">
          {dropdownData.map((dropdown, index) => (
            <th key={index} className="   ">
              <DropDown
                options={dropdown.options}
                defaultSelectedKeys={dropdown.defaultSelectedKeys}
                selectStyles={`${dropdown.width} border-white-1 text-[#D9D9D9] text-[14px] bg-white`}
                insideStyles={`${dropdown.width} text-[#D9D9D9] bg-white`}
                selectedItemRadius="rounded-none"
              />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-100 ">
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="  py-2 text-center"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </section>
    
  );
};

export default HomeTable;
