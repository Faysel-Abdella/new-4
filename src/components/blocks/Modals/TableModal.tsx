import React from "react";
import { TableModalType } from "./type";

const TableModal: React.FC<TableModalType> = ({
  content,
  disabledButtonLabel,
  enabledButtonLabel,
  handleDisabledButton,
  handleEnabledButton,
  height = "",
  width = "w-[413px]",
}) => {
  return (
    <div
      className={`p-10 space-y-10 ${width}  ${height} bg-white shadow-large absolute inset-0 m-auto z-50 `}
    >
      <div className="text-center">{content}</div>

      <div className="flex items-center justify-center gap-[16px]">
        {disabledButtonLabel && (
          <button
            onClick={handleDisabledButton}
            className="text-white text-[14px] items-center justify-center p-[11px] bg-[#ABAFB7] flex gap-[10px] rounded-[5px] w-[148px]"
          >
            {disabledButtonLabel}
          </button>
        )}

        <button
          onClick={handleEnabledButton}
          className="text-white text-[14px] items-center justify-center bg-[#4A4E57] p-[11px] flex gap-[10px] rounded-[5px] w-[148px]"
        >
          {enabledButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default TableModal;
