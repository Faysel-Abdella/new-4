import React, { ReactNode } from "react";

const ModalWrapper = ({
  width = " w-[413px]",
  height = "",
  children,
}: {
  width: string;
  height?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={` ${width} ${height} bg-white shadow-large absolute inset-0 m-auto z-50 `}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
