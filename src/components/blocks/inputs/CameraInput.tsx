import React from "react";
import Image from "next/image";
import { ICameraInput } from "./type";

const CameraInput = ({ imageSrc, label, containerStyle }: ICameraInput) => {
  return (
    <div className="flex">
      <label
        htmlFor="file-upload"
        className={`relative cursor-pointe ${containerStyle} gap-1 text-[#80808E] bg-[#F2F3F5] text-[10px] font-[400] flex flex-col justify-center items-center`}
      >
        <Image
          src={imageSrc}
          className="w-[13px] h-[12px]"
          width={12}
          height={12}
          alt={"cameraImg"}
        />
        <span>{label}</span>
        <input
          id="file-upload"
          name="file-upload"
          type="file"
          className="sr-only"
        />
      </label>
    </div>
  );
};

export default CameraInput;
