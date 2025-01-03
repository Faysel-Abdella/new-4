import { Image } from "@nextui-org/react";
import React from "react";
import searchIcon from "../../../app/assets/Search Icon.svg";

export const SearchInput = ({
  placeholder,
  onClick,
}: {
  placeholder: string;
  onClick: () => void;
}) => {
  return (
    <div className="flex justify-center items-center text-[14px] font-[400] text-[#333333] gap-4">
      <input
        className={"placeholder:text-[#ABAFB7] focus:outline-none"}
        placeholder={placeholder}
      />
      <button onClick={() => onClick}>
        <Image src={searchIcon.src} width={16} height={16} alt={"searchIcon"} />
      </button>
    </div>
  );
};
