import { Button } from "@/src/components/blocks/buttons/Button";
import React from "react";

const MyPageInfo = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <div className="w-full flex flex-col justify-start items-center bg-white gap-4 py-8  px-9 rounded-[10px]">
        <div className="w-full pb-4">
          <div className="w-[678px] flex flex-col items-start gap-3 ">
            <span className="text-[14px] font-[700] text-[#ABAFB7]">
              상세 정보
            </span>

            <div className="flex-1 flex gap-2">
              <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
                제공서비스
              </span>
              <span className="font-[400] text-[14px] text-[#333333]">
                {"임대 (장비+기사), 스페어 (기사), 렌탈 (장비)"}
              </span>
            </div>

            <div className="flex-1 flex gap-2">
              <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
                작업가능지역
              </span>
              <span className="font-[400] text-[14px] text-[#333333]">
                {"00만원 / 40분, 00만원 / 반일, 00만원 / 일대, 0000만원 / 월대"}
              </span>
            </div>

            <div className="flex-1 flex gap-2">
              <span className="w-[90px] font-[400] text-[14px] text-[#A3A6AB]">
                작업가능지역
              </span>
              <span className="font-[400] text-[14px] text-[#333333]">
                {"00만원 / 40분, 00만원 / 반일, 00만원 / 일대, 0000만원 / 월대"}
              </span>
            </div>

            <div className="flex w-full text-[14px] font-[400] text-[#ABAFB7] items-center">
              <span className="w-[100px]">계좌 사본</span>
              <div className="flex gap-3">
                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>
            </div>

            <div className="flex w-full text-[14px] font-[400] text-[#ABAFB7] items-center">
              <span className="w-[100px]">계좌 사본</span>
              <div className="flex gap-3">
                <div className="w-[63px] h-[63px] bg-[#FFCECE] rounded-none" />
              </div>
            </div>

            <div className="flex-1 flex gap-2 justify-center items-center">
              <span className="w-[90px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
                <span> 소개 및 </span>
                <span>홍보내용</span>
              </span>
              <span className="font-[400] text-[14px] text-[#333333]">
                텍스트텍스트
              </span>
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

export default MyPageInfo;
