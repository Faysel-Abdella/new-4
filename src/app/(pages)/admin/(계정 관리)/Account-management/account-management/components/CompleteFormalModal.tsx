import Modal from "@/src/components/blocks/Modals/Modal";
import React from "react";
import { MultipleInputs } from "../../../../(회원 관리)/Membership-Management/membership-management/equipmentExponent/components/MultipleInput";
import TextInput from "@/src/components/blocks/inputs/Input";
import { Button } from "@/src/components/blocks/buttons/Button";
import CheckBox from "./CheckBox";

const CompleteFormModal = ({
  isOpen,
  onOpenChange,
  onButtonClick,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onButtonClick: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      cancelBtnLabel="취소"
      buttonLabel={"해제"}
      buttonOnClick={onButtonClick}
      modalWidthInPercent="max-w-[60%]"
      footer={false}
    >
      <div className=" w-full flex flex-col justify-center items-center pt-[50px] pb-[30px]">
        <div className="w-full flex flex-col items-start gap-3 ">
          <span className="text-[14px] font-[700] text-[#ABAFB7]">
            상세 정보
          </span>

          <div className="flex w-full ">
            <div className="w-full">
              <TextInput
                type={"text"}
                label="ID*"
                labelColor="text-[#333333]"
                labelWidth="w-[105px]"
                placeholder={"ID 입력"}
              />
            </div>
          </div>

          <MultipleInputs
            labelColor="text-[#333333]"
            type={"text"}
            firstLabel={"이름 *"}
            secondLabel={"소속 부서 *"}
            firstPlaceholder={"홍길동"}
            secondPlaceholder={"팀장"}
          />

          <MultipleInputs
            labelColor="text-[#333333]"
            type={"text"}
            firstLabel={"E-mail *"}
            secondLabel={"허용 IP"}
            firstPlaceholder={"idid123@aaa.com"}
            secondPlaceholder={"IP 입력"}
          />

          <div className="w-full flex justify-end items-end pb-4 border-b-1">
            <Button
              label="임시 비밀번호 발송"
              backgroundColor="bg-[#A3A6AB]"
              textStyle="text-sm text-[#FFFFFF]"
              borderRadius="rounded-[4px]"
              padding="py-6 px-7"
              width="w-[148px]"
              onPress={() => {}}
            />
          </div>

          <div className="w-full flex flex-col items-start gap-3">
            <span className="text-[14px] font-[700] text-[#ABAFB7]">
              상세 정보
            </span>
            <div className="flex w-full gap-2 ">
              <div className="flex-1 flex flex-col gap-2">
                <CheckBox
                  label={"회원 관리"}
                  data={[{ name: "회원 관리" }, { name: "회원 제재" }]}
                />

                <CheckBox
                  label={"발주 관리"}
                  data={[
                    { name: "등록 관리" },
                    { name: "채팅 관리" },
                    { name: "수수료 관리" },
                    { name: "수동 관리" },
                  ]}
                />

                <CheckBox
                  label={"소개서 관리"}
                  data={[{ name: "장비사업자" }]}
                />

                <CheckBox
                  label={"기타 관리"}
                  data={[
                    { name: "배너 관리" },
                    { name: "시작팝업 관리" },
                    { name: "푸시 관리" },
                    { name: "신고 관리" },
                  ]}
                />

                <CheckBox
                  label={"결제 관리"}
                  data={[
                    { name: "캐시 관리" },
                    { name: "포인트 관리" },
                    { name: "결제 내역" },
                    { name: "세금계산서 발행" },
                  ]}
                />
              </div>

              <div className="flex-1 flex flex-col gap-2">
                <CheckBox
                  label={"결제 관리"}
                  selected={true}
                  data={[
                    { name: "캐시 관리" },
                    { name: "포인트 관리" },
                    { name: "결제 내역" },
                    { name: "세금계산서 발행" },
                  ]}
                />

                <CheckBox
                  label={"계정 관리"}
                  data={[
                    { name: "계정 관리" },
                    { name: "비밀번호 불일치 관리" },
                  ]}
                />

                <CheckBox
                  label={"고객 지원"}
                  data={[
                    { name: "공지사항 관리" },
                    { name: "FAQ 관리" },
                    { name: "1:1 문의하기" },
                  ]}
                />

                <CheckBox
                  label={"약관 관리"}
                  data={[
                    { name: "개인정보처리방침" },
                    { name: "F이용약관" },
                    { name: "위치정보이용약관" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between items-center pt-10 ">
          <Button
            label="삭제"
            backgroundColor="bg-[#A3A6AB]"
            textStyle="text-sm text-[#FFFFFF]"
            borderRadius="rounded-[4px]"
            width="w-[148px]"
            onPress={onButtonClick}
          />
          <div className="flex gap-3">
            <Button
              label="닫기"
              backgroundColor="bg-[#A3A6AB]"
              textStyle="text-sm text-[#FFFFFF]"
              borderRadius="rounded-[4px]"
              width="w-[148px]"
              onPress={() => {}}
            />
            <Button
              label="수정"
              backgroundColor="bg-[#404251]"
              textStyle="text-sm text-[#FFFFFF]"
              borderRadius="rounded-[4px]"
              width="w-[148px]"
              onPress={() => {}}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CompleteFormModal;
