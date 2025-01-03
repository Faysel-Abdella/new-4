import React from "react";
import { textModal } from "./type";

const TextModal: React.FC<textModal> = ({
  title,
  subTitle,
  description,
  textStyle = "",
  disabledButtonLabel,
  enabledButtonLabel,
}) => {
  return (
    <div className="inline-block justify-center  p-10 space-y-10 bg-white min-w-[470px]  ">
      <div className="text-center">
        <p className="text-[20px] ">{title}</p>
        <p className="text-[20px] ">{subTitle}</p>
      </div>

      {description && (
        <div className={`${textStyle} text-center text-[20px] `}>
          {description}
        </div>
      )}

      <div className="flex items-center justify-center gap-[16px]">
        {disabledButtonLabel && (
          <button className="text-white text-[14px] items-center justify-center p-[11px] bg-[#ABAFB7] flex gap-[10px] rounded-[5px] w-[148px]">
            {disabledButtonLabel}
          </button>
        )}

        <button className="text-white text-[14px] items-center justify-center bg-[#4A4E57] p-[11px] flex gap-[10px] rounded-[5px] w-[148px]">
          {enabledButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default TextModal;
