import { Button } from "@/src/components/blocks/buttons/Button";
import React from "react";

const DetailEditModal = () => {
  return (
    <div className="flex flex-col text-[14px] space-y-[40px] bg-white p-10 w-[545px]">
      <div className="grid grid-cols-8 gap-[20px]">
        <p className="col-span-2 text-[#A3A6AB] ">상태</p>
        <p className="col-span-5 text-[#333333]">종료</p>
        <p className="col-span-2 text-[#A3A6AB]">제목</p>
        <p className="col-span-5 text-[#333333]">제목 텍스트</p>
        <p className="col-span-2 text-[#A3A6AB]">구분</p>
        <p className="col-span-5 text-[#333333]">전체 / 발주사 / 장비사업자</p>
        <p className="col-span-2 text-[#A3A6AB]">배너이미지</p>
        <div className="flex gap-[10px] col-span-5 text-[#333333]">
          <p>720.jpg</p>
          <div className="w-[170px] h-[78px] bg-[#FFE7E7]"></div>
        </div>
        <p className="col-span-2 text-[#A3A6AB]">노출기간</p>
        <p className="col-span-5 text-[#333333]">
          2024-12-01 00시 00분 ~ 2024-12-31 23시 59분
        </p>
        <p className="col-span-2 text-[#A3A6AB]">랜딩페이지</p>
        <p className="col-span-5 text-[#333333]">https://www.url.com</p>
      </div>
      <div className="flex justify-center items-center ">
        <Button
          label={"취소"}
          backgroundColor={"bg-[#A3A6AB]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
      </div>
    </div>
  );
};

export default DetailEditModal;
