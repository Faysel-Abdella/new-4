import { Button } from "@/src/components/blocks/buttons/Button";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import cameraIcon from "@/src/app/assets/mdi_camera.svg";
import Link from "next/link";
import React from "react";

const ArticleInformation = () => {
  return (
    <section>
      <div className="p-[40px] bg-white rounded-[10px]">
        <div className="flex justify-end">
          {" "}
          <Button
            label="기사 추가하기"
            backgroundColor="bg-[#404251]"
            textStyle="text-sm text-white"
            borderRadius="rounded-[100px]"
            padding="py-[16px] px-[20px]"
            width="w-[120px]"
          />
        </div>
        <div className="p-[16px] rounded-[8px] bg-[#F2F3F5] mt-[10px]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <p className="text-sm text-[#ABAFB7] font-bold">기사명</p>
              <Link href={""} className="text-sm text-[#429FFF] underline">
                수정하기
              </Link>
            </div>
            <p className="text-sm text-[#333333]">
              이중재 ｜ 나이 : 50세 ｜경력 : 11년｜010-1111-2222
            </p>
          </div>
          <div className="flex p-3 border-t-1 border-[#E4E5EA] flex-col gap-[10px] mt-4">
            <div className="flex gap-[10px]">
              <p className="text-sm text-[#ABAFB7] font-bold">서류</p>
              <Link href={""} className="text-sm text-[#429FFF] underline">
                추가하기
              </Link>
            </div>
            <div className="flex gap-[60px]">
              <div className="flex items-center  gap-5">
                <div className="flex items-center flex-col">
                  <p className="text-sm text-[#333333]">건설기계</p>
                  <p className="text-sm text-[#333333]">조종사면허증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <div className="flex items-center flex-col">
                  <p className="text-sm text-[#333333]">건설업 기초 안전</p>
                  <p className="text-sm text-[#333333]">보건교육 이수증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <div className="flex items-center flex-col">
                  <p className="text-sm text-[#333333]">특수형태 근로종사자</p>
                  <p className="text-sm text-[#333333]">수료증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <div className="flex items-center flex-col">
                  <p className="text-sm text-[#333333]">건설기계 조종사</p>
                  <p className="text-sm text-[#333333]">안전교육 이수증</p>
                </div>

                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <Button
          label="저장"
          backgroundColor="bg-[#4A4E57]"
          textStyle="text-sm text-white "
          borderRadius="rounde-[5px]"
          padding="py-[11px] px-[40px]"
          width="w-[106px]"
        />
      </div>
    </section>
  );
};

export default ArticleInformation;
