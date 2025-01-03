'use client';
import React from 'react';
import { CheckboxProps } from './type';


const Checkbox= ({
  options,
  selectedValues,
  onChange,
  alignment = 'vertical',
  gap = 'gap-2',
  inputStyles=" w-4 h-4",
  inputTextStyles="text-sm",
  Label=true
}:CheckboxProps) => {
  const handleCheckboxChange = (option: string) => {
    if (selectedValues.includes(option)) {
      onChange(selectedValues.filter((value) => value !== option));
    } else {
      onChange([...selectedValues, option]);
    }
  };

  return (
    <div
      className={`flex ${
        alignment === 'vertical' ? 'flex-col' : 'flex-row'
      } ${gap}`}
    >
      {options.map((option) => (
        <label
          key={option}
          className="  flex items-center cursor-pointer space-x-2"
        >
          <input
            type="checkbox"
            value={option}
            checked={selectedValues.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className={inputStyles}
          />
          {Label && <span
            className={inputTextStyles}
          >
            {option}
          </span>}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
