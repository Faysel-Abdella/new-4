import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import React from "react";

const ArticleDetails = () => {
  return (
    <div className="flex flex-col gap-2 w-full text-[14px]">
      <div className="flex flex-col gap-4 w-full bg-[#F1F3F6] rounded-[8px] p-[20px]">
        <div className="space-x-[10px]">
          <span className=" font-[700] text-[#ABAFB7]">기사명</span>
          <span className="text-[#427fff] underline decoration-[#427fff]">
            수정하기
          </span>
        </div>
        <span className="w-[418px] font-[400] text-[14px] text-[#333333]">
          {"이중재 ｜ 나이 : 50세 ｜경력 : 11년｜010-1111-2222 "}
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
            <span className="w-[120px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
              <span> 건설기계 </span>
              <span>조종사면허증</span>
            </span>

            <CameraInput
              imageSrc={"/assets/icons/cameraIcon.svg"}
              label={"사진 첨부"}
              containerStyle="w-[63px] h-[63px] bg-white rounded-[6px]"
            />
          </div>

          <div className="flex gap-2 justify-start items-center">
            <span className="w-[120px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
              <span> 건설업 기초 안전 </span>
              <span>보건교육 이수증</span>
            </span>

            <CameraInput
              imageSrc={"/assets/icons/cameraIcon.svg"}
              label={"사진 첨부"}
              containerStyle="w-[63px] h-[63px] bg-white rounded-[6px]"
            />
          </div>

          <div className="flex gap-2 justify-start items-center">
            <span className="w-[120px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
              <span> 특수형태 근로종사자 </span>
              <span>수료증</span>
            </span>

            <CameraInput
              imageSrc={"/assets/icons/cameraIcon.svg"}
              label={"사진 첨부"}
              containerStyle="w-[63px] h-[63px] bg-white rounded-[6px]"
            />
          </div>

          <div className="flex gap-2 justify-start items-center">
            <span className="w-[120px] font-[400] flex flex-col text-[14px] text-[#A3A6AB]">
              <span>건설기계 조종사</span>
              <span>안전교육 이수증</span>
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

export default ArticleDetails;
