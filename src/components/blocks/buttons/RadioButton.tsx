"use client";
import { RadioButtonProps } from "./type";

export const RadioButton = ({
  options,
  onChange,
  selectedValue,
  gapOfRadio,
  optionStyles,
}: RadioButtonProps) => {
  return (
    <div className="radio-group flex gap-[20px]">
      {options.map((option) => (
        <label
          key={option}
          className={`radio-label ${gapOfRadio} inline-flex items-center`}
        >
          <input
            type="radio"
            value={option}
            checked={selectedValue === option}
            onChange={() => onChange(option)}
            className="hidden peer"
          />
          <span
            className="w-4 h-4 mr-2 rounded-full border border-[#4A4E57]
                peer-checked:bg-[#4A4E57]"
          />
          <span className={optionStyles}>{option}</span>
        </label>
      ))}
    </div>
  );
};
