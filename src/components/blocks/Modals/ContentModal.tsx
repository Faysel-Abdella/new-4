import React from "react";
import { ContentModalType } from "./type";

const ContentModal: React.FC<ContentModalType> = ({ title, content }) => {
  return (
    <div className=" bg-white space-y-[16px] w-[438px] inline-block items-center pb-10">
      <p className="mt-[16px] px-[16px] text-[20px] flex items-center justify-center font-bold ">
        {title}
      </p>

      <div className="h-[1px] bg-[#D9D9D9]"></div>

      <div className="px-10">{content}</div>

      <div className=" flex px-[16px]  items-center justify-center ">
        <button className="text-white text-center text-[14px] bg-[#4A4E57] py-[12px] px-[14px] flex items-center justify-center gap-[10px] rounded-[5px] w-[148px]">
          닫기
        </button>
      </div>
    </div>
  );
};

export default ContentModal;
