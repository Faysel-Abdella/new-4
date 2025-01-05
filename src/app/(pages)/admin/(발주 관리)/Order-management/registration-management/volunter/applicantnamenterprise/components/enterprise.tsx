import { Button } from "@/src/components/blocks/buttons/Button";
import React from "react";

const ApplicantNameEnterprise = () => {
  return (
    <section>
      {" "}
      <div className="bg-white p-[30px] rounded-[10px]">
        <p className=" text-sm text-[#ABAFB7] min-w-[81px]">상세 정보</p>
        <div className="flex flex-col gap-[10px] mt-[10px]">
          <div className="flex gap-[30px]">
            <div className="min-w-[284px] flex gap-5">
              <p className=" text-sm text-[#ABAFB7] min-w-[81px]">
                승인요청일시
              </p>
              <p className="text-sm text-[#333333]">2024-01-15 12:12:20</p>
            </div>
            <div className="min-w-[284px] flex gap-5">
              <p className=" text-sm text-[#ABAFB7] min-w-[81px]">최근 접속</p>
              <p className="text-sm text-[#333333]">2024-01-15 12:12:20</p>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="min-w-[284px] flex gap-5">
              <p className=" text-sm text-[#ABAFB7] min-w-[81px]">구분</p>
              <p className="text-sm text-[#333333]">카카오</p>
            </div>
            <div className="min-w-[284px] flex gap-5">
              <p className=" text-sm text-[#ABAFB7] min-w-[81px]">회원 구분</p>
              <p className="text-sm text-[#333333]">기업</p>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="min-w-[284px] flex gap-5">
              <p className=" text-sm text-[#ABAFB7] min-w-[81px]">이름</p>
              <p className="text-sm text-[#333333]">홍길동</p>
            </div>
            <div className="min-w-[284px] flex gap-5">
              <p className=" text-sm text-[#ABAFB7] min-w-[81px]">
                휴대폰 번호
              </p>
              <p className="text-sm text-[#333333]">개인</p>
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="min-w-[284px] flex gap-5">
              <p className=" text-sm text-[#ABAFB7] min-w-[81px]">주소</p>
              <p className="text-sm text-[#333333]">
                서울특별시 금천구 가산디지털로~~~
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <Button
          label="거절"
          backgroundColor="bg-[#A3A6AB] "
          borderRadius="rounded-[5px]"
          textStyle="text-sm text-white"
          padding="py-[11px] px-[40px]"
          width="w-[106px]"
        />
        <Button
          label="승인"
          backgroundColor="bg-[#4A4E57] "
          borderRadius="rounded-[5px]"
          textStyle="text-sm text-white"
          padding="py-[11px] px-[40px]"
          width="w-[106px]"
        />
      </div>
    </section>
  );
};
export default ApplicantNameEnterprise;
