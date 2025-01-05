"use client";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import React from "react";

const EquipmentNameAndPicture = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[14px]">
      <div className="flex flex-col gap-4 w-full bg-[#F1F3F6] rounded-[8px] p-[20px]">
        <div className="space-x-[10px]">
          <span className=" font-[700] text-[#ABAFB7]">상세 정보</span>
          <span className="text-[#427fff] underline decoration-[#427fff]">
            수정하기
          </span>
        </div>
        <span className="w-[418px] font-[400] text-[14px] text-[#333333]">
          {
            "장비이름｜굴착기 미니008 ｜ 차량번호 : 24수1234 ｜ 차량년식 : 2017년식 브레이크, 쪽버켓, 채버켓, 대버켓, 집게, 지게발, 회전 돌집게, 리퍼"
          }
        </span>
        <div className="h-[1px] bg-[#E4E5EA] w-full"></div>
        <div className="space-x-[10px]">
          <span className=" font-[700] text-[#ABAFB7]">서류</span>
          <span className="text-[#427fff] underline decoration-[#427fff]">
            수정하기
          </span>
        </div>
        <div className="flex gap-[60px] justify-start items-center">
          <div className="flex gap-2 justify-start items-center">
            <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
              <span> 소개 및 </span>
              <span>홍보내용</span>
            </span>

            <CameraInput
              imageSrc={"/assets/icons/cameraIcon.svg"}
              label={"사진 첨부"}
              containerStyle="w-[63px] h-[63px] bg-white rounded-[6px]"
            />
          </div>

          <div className="flex gap-2 justify-start items-center">
            <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
              <span> 소개 및 </span>
              <span>홍보내용</span>
            </span>

            <CameraInput
              imageSrc={"/assets/icons/cameraIcon.svg"}
              label={"사진 첨부"}
              containerStyle="w-[63px] h-[63px] bg-white rounded-[6px]"
            />
          </div>

          <div className="flex gap-2 justify-start items-center">
            <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
              <span> 소개 및 </span>
              <span>홍보내용</span>
            </span>

            <CameraInput
              imageSrc={"/assets/icons/cameraIcon.svg"}
              label={"사진 첨부"}
              containerStyle="w-[63px] h-[63px] bg-white rounded-[6px]"
            />
          </div>

          <div className="flex gap-2 justify-start items-center">
            <span className="w-[70px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
              기타
            </span>

            <CameraInput
              imageSrc={"/assets/icons/cameraIcon.svg"}
              label={"사진 첨부"}
              containerStyle="w-[63px] h-[63px] bg-white rounded-[6px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentNameAndPicture;
