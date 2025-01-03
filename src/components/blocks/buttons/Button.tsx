import { Button as NButton } from "@nextui-org/react";
import { IButton } from "./type";

export const Button = ({
  padding = "",
  label,
  disabled = false,
  backgroundColor,
  borderRadius,
  textStyle,
  width,
  ...rest
}: IButton) => {
  return (
    <NButton
      disabled={disabled}
      className={`${borderRadius} ${padding} ${width ? width : "w-full"} ${
        disabled ? "bg-[#ABAFB7]" : backgroundColor
      } ${textStyle}`}
      {...rest}
    >
      {label}
    </NButton>
  );
};
