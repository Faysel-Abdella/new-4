import { Button } from "@/src/components/blocks/buttons/Button";
import CameraInput from "@/src/components/blocks/inputs/CameraInput";
import cameraIcon from "@/src/app/assets/mdi_camera.svg";
import Link from "next/link";
import React from "react";

const EquipmentInformation = () => {
  return (
    <section>
      <div className="p-[40px] bg-white rounded-[10px]">
        <div className="flex justify-end">
          {" "}
          <Button
            label="장비 추가하기"
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
              <p className="text-sm text-[#ABAFB7] font-bold">장비명</p>
              <Link href={""} className="text-sm text-[#429FFF] underline">
                수정하기
              </Link>
            </div>
            <p className="text-sm text-[#333333]">
              장비이름｜굴착기 미니008 ｜ 차량번호 : 24수1234 ｜ 차량년식 :
              2017년식 브레이크, 쪽버켓, 채버켓, 대버켓, 집게, 지게발, 회전
              돌집게, 리퍼
            </p>
            <p className="text-sm text-[#333333]">
              브레이크, 쪽버켓, 채버켓, 대버켓, 집게, 지게발, 회전 돌집게, 리퍼
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
                  <p className="text-sm text-[#333333]">보험증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <div className="flex items-center flex-col">
                  <p className="text-sm text-[#333333]">건설기계</p>
                  <p className="text-sm text-[#333333]">등록증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <div className="flex items-center flex-col">
                  <p className="text-sm text-[#333333]">건설기계</p>
                  <p className="text-sm text-[#333333]">검사증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <p className="text-sm text-[#333333]">기타</p>

                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-[16px] rounded-[8px] bg-[#F2F3F5] mt-[10px]">
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[10px]">
              <p className="text-sm text-[#ABAFB7] font-bold">장비명</p>
              <Link href={""} className="text-sm text-[#429FFF] underline">
                수정하기
              </Link>
            </div>
            <p className="text-sm text-[#333333]">
              장비이름｜굴착기 미니008 ｜ 차량번호 : 24수1234 ｜ 차량년식 :
              2017년식 브레이크, 쪽버켓, 채버켓, 대버켓, 집게, 지게발, 회전
              돌집게, 리퍼
            </p>
            <p className="text-sm text-[#333333]">
              브레이크, 쪽버켓, 채버켓, 대버켓, 집게, 지게발, 회전 돌집게, 리퍼
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
                  <p className="text-sm text-[#333333]">보험증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <div className="flex items-center flex-col">
                  <p className="text-sm text-[#333333]">건설기계</p>
                  <p className="text-sm text-[#333333]">등록증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <div className="flex items-center flex-col">
                  <p className="text-sm text-[#333333]">건설기계</p>
                  <p className="text-sm text-[#333333]">검사증</p>
                </div>
                <CameraInput
                  imageSrc={cameraIcon?.src}
                  label="사진 첨부"
                  containerStyle="w-[63px] h-[63px] py-[14px] px-[20px] bg-white rounded-[6px]"
                />
              </div>
              <div className="flex items-center  gap-5">
                <p className="text-sm text-[#333333]">기타</p>

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

export default EquipmentInformation;
