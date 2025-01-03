import { ButtonProps } from "@nextui-org/react";

export interface IButton extends ButtonProps {
  label: string;
  disabled?: boolean;
  backgroundColor: string;
  borderRadius: string;
  textStyle: string;
  width?: string;
  padding?: string;
}
export interface RadioButtonProps {
  options: string[];
  gapOfRadio?: string;
  onChange: (value: string) => void;
  selectedValue?: string;
  optionStyles?: string;
}
