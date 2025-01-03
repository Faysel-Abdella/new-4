
import { SearchIcon } from "@/src/components/blocks/inputs/Icons";
import React from "react";

const SearchInput = () => {
  return (
    <div className="flex  justify-center items-center gap-[5px] bg-[#FFFFFF] py-[5px] px-[12px] rounded-lg text-[#333333]">
      <span className="py-[5px] px-[17px] bg-[#F1F3F6] text-[14px] font-[400] rounded-[49px]">
        2024-01-01
      </span>
      <span>~</span>
      <span className="py-[5px] px-[17px] bg-[#F2F3F5] text-[14px] font-[400] rounded-[49px]">
        2024-01-01
      </span>
      <SearchIcon />
    </div>
  );
};

export default SearchInput;
