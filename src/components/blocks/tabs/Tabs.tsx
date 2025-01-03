"use client";

import React, { useEffect, useState } from "react";
import { CustomTabProps } from "./type";
const CustomTab = ({
  items,
  padding,
  containerPadding,
  borderColor,
  textStyle = "text-base",
  raduis = "rounded-none",
  separator,
  selectedBgColor = "bg-black",
  selectedBorderColor,
  unselectedBorderColor,
  selectedTextColor = "text-white",
  unselectedBgColor = "bg-white",
  unselectedTextColor = "text-gray-700",
  onTabChange,
  className = "",
}: CustomTabProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (onTabChange) onTabChange(selectedIndex);
  }, [selectedIndex, onTabChange]);

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Tab Headers */}
      <div
        className={`flex w-fit ${raduis} bg-white ${containerPadding} ${
          separator ? "border-r-1" : ""
        } ${borderColor}`}
        role="tablist"
      >
        {items.map((item, index) => (
          <button
            key={item.title}
            role="tab"
            aria-selected={selectedIndex === index}
            aria-controls={`tab-panel-${index}`}
            id={`tab-${index}`}
            onClick={() => setSelectedIndex(index)}
            className={` text-center py-3 px-8   transition-colors duration-300  ${raduis} ${padding} ${
              selectedIndex === index
                ? `${selectedBgColor} ${selectedBorderColor} ${selectedTextColor} font-bold`
                : `${unselectedBgColor} ${unselectedBorderColor} ${unselectedTextColor} font-normal`
            } ${textStyle}`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        id={`tab-panel-${selectedIndex}`}
        role="tabpanel"
        aria-labelledby={`tab-${selectedIndex}`}
        className="py-4"
      >
        {items[selectedIndex]?.content}
      </div>
    </div>
  );
};

export default CustomTab;
