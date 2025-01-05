import { Button } from "@/src/components/blocks/buttons/Button";
import React from "react";

const EquipmentInformation = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="w-full flex flex-col justify-start items-center bg-white gap-4 py-8  px-9 rounded-[10px]">
        <div className="flex flex-col gap-2 w-full">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            상세 정보
          </span>
          <div className="flex flex-col gap-4 w-[836px] bg-[#F1F3F6] rounded-[8px] p-[20px]">
            <span className="w-[418px] font-[400] text-[14px] text-[#333333]">
              {
                "장비이름｜굴착기 미니008 ｜ 차량번호 : 24수1234 ｜ 차량년식 : 2017년식 브레이크, 쪽버켓, 채버켓, 대버켓, 집게, 지게발, 회전 돌집게, 리퍼"
              }
            </span>
            <div className="flex gap-8 justify-start items-center">
              <div className="flex gap-2 justify-start items-center">
                <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                  <span> 소개 및 </span>
                  <span>홍보내용</span>
                </span>

                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>

              <div className="flex gap-2 justify-start items-center">
                <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                  <span> 소개 및 </span>
                  <span>홍보내용</span>
                </span>

                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>

              <div className="flex gap-2 justify-start items-center">
                <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                  <span> 소개 및 </span>
                  <span>홍보내용</span>
                </span>

                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>

              <div className="flex gap-2 justify-start items-center">
                <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                  <span> 기타</span>
                </span>

                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-[836px] bg-[#F1F3F6] rounded-[8px] p-[20px]">
            <span className="w-[418px] font-[400] text-[14px] text-[#333333]">
              {
                "장비이름｜굴착기 미니008 ｜ 차량번호 : 24수1234 ｜ 차량년식 : 2017년식 브레이크, 쪽버켓, 채버켓, 대버켓, 집게, 지게발, 회전 돌집게, 리퍼"
              }
            </span>
            <div className="flex gap-8 justify-start items-center">
              <div className="flex gap-2 justify-start items-center">
                <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                  <span> 소개 및 </span>
                  <span>홍보내용</span>
                </span>

                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>

              <div className="flex gap-2 justify-start items-center">
                <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                  <span> 소개 및 </span>
                  <span>홍보내용</span>
                </span>

                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>

              <div className="flex gap-2 justify-start items-center">
                <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                  <span> 소개 및 </span>
                  <span>홍보내용</span>
                </span>

                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>

              <div className="flex gap-2 justify-start items-center">
                <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                  <span> 기타</span>
                </span>

                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          label={"거절"}
          backgroundColor={"bg-[#A3A6AB]"}
          borderRadius={"rounded-[5px]"}
          textStyle={" font-[400] text-[14px] text-white"}
          width="w-[106px]"
          onPress={() => {}}
        />

        <Button
          label={"저장"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={" font-[400] text-[14px] text-white"}
          width="w-[106px]"
          onPress={() => {}}
        />
      </div>
    </div>
  );
};

export default EquipmentInformation;
