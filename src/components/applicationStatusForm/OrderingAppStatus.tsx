import React from "react";
import { Button } from "../blocks/buttons/Button";
import TextInput from "../blocks/inputs/Input";
import CameraInput from "../blocks/inputs/CameraInput";
import cameraIcon from "../../app/assets/camera small.svg";

const MultipleInputs = ({
  type,
  firstLabel,
  secondLabel,
  secondPlaceholder,
  firstPlaceholder,
}: {
  type: string;
  firstLabel: string;
  secondLabel: string;
  firstPlaceholder: string;
  secondPlaceholder: string;
}) => {
  return (
    <div className="flex w-full gap-5">
      <div className="flex-1">
        <TextInput
          type={type}
          label={firstLabel}
          placeholder={firstPlaceholder}
        />
      </div>
      <div className="flex-1">
        <TextInput
          type={type}
          label={secondLabel}
          placeholder={secondPlaceholder}
        />
      </div>
    </div>
  );
};

const OrderingAppStatus = ({ formTitle }: { formTitle: string }) => {
  return (
    <div>
      <div className="w-[679px] flex flex-col justify-center items-center bg-white gap-4 ">
        <div className="flex justify-center items-center border-b-1 border-[#D9D9D9] py-4 w-full">
          <span className="text-[16px] font-[700]">{formTitle}</span>
        </div>
        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            상세 정보
          </span>

          <MultipleInputs
            type={"text"}
            firstLabel={"승인요청 일시"}
            secondLabel={"최근 접속"}
            firstPlaceholder={"2024-01-15 12:12:20"}
            secondPlaceholder={"2024-01-15 12:12:20"}
          />

          <MultipleInputs
            type={"text"}
            firstLabel={"구분"}
            secondLabel={"기업/개인"}
            firstPlaceholder={"카카오"}
            secondPlaceholder={"기업"}
          />

          <MultipleInputs
            type={"text"}
            firstLabel={"ID"}
            secondLabel={"사업자명"}
            firstPlaceholder={"b14312"}
            secondPlaceholder={"아산기업"}
          />

          <MultipleInputs
            type={"text"}
            firstLabel={"대표자"}
            secondLabel={"사업자번호"}
            firstPlaceholder={"홍길동"}
            secondPlaceholder={"0000000000"}
          />

          <div className="flex w-full ">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="주소"
                labelWidth="w-[105px]"
                placeholder={"서울 금천구"}
              />
            </div>
          </div>

          <MultipleInputs
            type={"text"}
            firstLabel={"사무실 번호"}
            secondLabel={"휴대폰 번호"}
            firstPlaceholder={"서울 금천구"}
            secondPlaceholder={"02"}
          />

          <div className="flex w-full text-[14px] font-[400] items-center pb-4 border-b-1 border-[#D9D9D9]">
            <span className="w-[100px]">사업자등록증</span>
            <CameraInput
              imageSrc={cameraIcon?.src}
              label={"추가"}
              containerStyle="w-[55px] h-[55px] bg-[#FFFFFF] rounded-[8px] border-[#D9D9D9] border-1"
            />
          </div>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            정산 정보
          </span>

          <MultipleInputs
            type={"text"}
            firstLabel={"은행명"}
            secondLabel={"예금주명"}
            firstPlaceholder={"신한은행"}
            secondPlaceholder={"홍길동"}
          />

          <div className="flex w-full ">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="계좌번호"
                labelWidth="w-[105px]"
                placeholder={"000000000000"}
              />
            </div>
          </div>

          <div className="flex w-full text-[14px] font-[400] items-center pb-4 border-b-1 border-[#D9D9D9]">
            <span className="w-[100px]">계좌 사본</span>
            <CameraInput
              imageSrc={cameraIcon?.src}
              label={"추가"}
              containerStyle="w-[55px] h-[55px] bg-[#FFFFFF] rounded-[8px] border-[#D9D9D9] border-1"
            />
          </div>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            세금 계산서 정보
          </span>

          <MultipleInputs
            type={"text"}
            firstLabel={"담당자명"}
            secondLabel={"연락처"}
            firstPlaceholder={"김철수"}
            secondPlaceholder={"01011112222"}
          />

          <div className="flex w-full pb-4 border-b-1 border-[#D9D9D9]">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="이메일"
                labelWidth="w-[105px]"
                placeholder={"aaa123@aaa.com"}
              />
            </div>
          </div>

          {/* <div className="flex w-full text-[14px] font-[400] items-center pb-4 border-b-1 border-[#D9D9D9]">
            <span className="w-[100px]">계좌 사본</span>
            <CameraInput
              imageSrc={cameraIcon?.src}
              label={"추가"}
              containerStyle="w-[55px] h-[55px] bg-[#FFFFFF] rounded-[8px] border-[#D9D9D9] border-1"
            />
          </div> */}
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            세금 계산서 정보
          </span>

          <div className="flex w-full text-[14px] font-[400] items-center pb-4 border-b-1 border-[#D9D9D9]">
            <span className="w-[100px]">기타서류</span>
            <CameraInput
              imageSrc={cameraIcon?.src}
              label={"기타서류"}
              containerStyle="w-[55px] h-[55px] bg-[#FFFFFF] rounded-[8px] border-[#D9D9D9] border-1"
            />
          </div>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            마케팅 수신 동의
          </span>
          <div className="flex w-full text-[14px] font-[400] pb-4 border-b-1 border-[#D9D9D9] ">
            <span className="w-[105px]">상태</span>
            <div className="flex gap-4">
              <span>동의</span>
              <span className="text-[#429FFF] underline pb-1">변경</span>
            </div>
          </div>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            회원 상태
          </span>
          <div className="flex w-full text-[14px] font-[400] pb-4 border-b-1 border-[#D9D9D9] ">
            <span className="w-[105px]">상태</span>
            <div className="flex gap-4">
              <span>정상</span>
              <span className="text-[#F05858] underline pb-1">제재하기</span>
              <span className="text-[#F05858] underline pb-1">해제하기</span>
            </div>
          </div>
        </div>

        <div className="w-full px-9 flex flex-col items-start gap-4 ">
          <div className="flex w-full">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="사유"
                labelWidth="w-[105px]"
                placeholder={"-"}
              />
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="w-full px-9 flex it gap-4 justify-between items-center pt-6 pb-10">
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
              label={"승인"}
              backgroundColor={"bg-[#4A4E57]"}
              borderRadius={"rounded-[5px]"}
              textStyle={"font-[400] text-[14px] text-white"}
              width="w-[106px]"
            />
          </div>
          <div className="flex gap-3">
            <Button
              label={"닫기"}
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
              textStyle={"font-[400] text-[14px] text-white"}
              width="w-[106px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderingAppStatus;
