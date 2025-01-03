import { Input } from "@nextui-org/input";
import React from "react";
import { IInput } from "./type";

const TextInput = ({
  label,
  labelColor,
  labelWidth = "w-[130px]",
  type,
  containerStyle,
  placeholder,
  ...rest
}: IInput) => {
  return (
    <div
      className={`flex gap-2 w-full justify-center items-center ${containerStyle}`}
    >
      {label && (
        <label
          className={`text-[#333333] text-[14px] font-[400] ${labelWidth}`}
        >
          {label}
        </label>
      )}
      <Input
        classNames={{
          mainWrapper: ` "w-full"`,
          input:
            "placeholder:text-[#A3A6AB] placeholder:text-[13px] px-[0px] py-[12px]",
          label: "text-gray-500",
          inputWrapper: "border-1 border-[##E4E5EA] bg-white rounded-[8px]",
        }}
        placeholder={placeholder}
        labelColor={labelColor}
        type={type}
    
        {...rest}
      />
    </div>
  );
};

export default TextInput;
