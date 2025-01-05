import { Button } from "@/src/components/blocks/buttons/Button";
import Link from "next/link";

import React from "react";

const Data = ({
  setShowApprovalModal = () => {},
  setShowCancelModal = () => {},
  exponentPagePath = "",
  exponentSecondPath = "",
  equipmentExponentPagePath = "",
  equipmentSecondMainExponentPath = "",
}: {
  setShowApprovalModal?: () => void;
  setShowCancelModal?: () => void;
  exponentPagePath?: string;
  equipmentExponentPagePath?: string;
  equipmentSecondMainExponentPath?: string;
  setEquipmentShowApprovalModal?: (value: boolean) => void;
  setEquipmentShowCancelModal?: (value: boolean) => void;
  exponentSecondPath?: string;
}) => {
  const membershipManagementHeader = [
    { label: "번호" },
    { label: "가입일시" },
    { label: "최근 접속" },
    { label: "구분" },
    { label: "사업자명" },
    { label: "개인/기업" },
    { label: "대표자" },
    { label: "연락처" },
    { label: "계정상태" },
    { label: "가입경로" },
  ];

  const membershipManagementData = Array.from({ length: 10 }, (_, index) => ({
    number: 7,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    lastAccessed: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "개인",
    exponent: (
      <Link href={index === 1 ? exponentSecondPath : exponentPagePath}>
        <span className="text-[#429FFF] underline cursor-pointer">이중재</span>
      </Link>
    ),
    contact: "010-0416-3114",
    accountStatus: "정상",
    signUpPath: "네이버 검색",
  }));

  const applyForMemebershipHeader = [
    { label: "번호" },
    { label: "신청일시" },
    { label: "사업자명" },
    { label: "구분" },
    { label: "대표자" },
    { label: "승인" },
  ];

  const applyForMemebershipData = Array.from({ length: 4 }, (_, index) => ({
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    businessName: "bbb",
    division: "카카오",
    exponent: (
      <Link href={index % 2 !== 0 ? exponentSecondPath : exponentPagePath}>
        <span className="text-[#429FFF] underline cursor-pointer">
          {index % 2 !== 0 ? "김중재" : "이중재"}
        </span>
      </Link>
    ),
    approval: (
      <div className="flex gap-2 justify-center items-center">
        <Button
          label={"거절"}
          backgroundColor={"bg-[#ABAFB7]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={setShowCancelModal}
          width="w-[46px]"
        />
        <Button
          label={"승인"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[4px]"}
          textStyle={"text-[14px] text-white font-[400]"}
          onPress={setShowApprovalModal}
          width="w-[46px]"
        />
      </div>
    ),
  }));

  const completeOrRejectHeader = [
    { label: "번호" },
    { label: "신청일시" },
    { label: "사업자명" },
    { label: "구분" },
    { label: "ID" },
    { label: "대표자" },
    { label: "처리일시" },
    { label: "처리내역" },
    { label: "처리 관리자" },
  ];

  const completeOrRejectData = Array.from({ length: 4 }, (_, index) => ({
    number: 4,
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    businessName: "bbb",
    division: "카카오",
    id: "Fdod1",
    exponent: (
      <span className="text-[#429FFF] underline cursor-pointer">이중재</span>
    ),
    processingTime: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    processingDetails: (
      <span
        className={`${
          index === 1 || index === 2 ? "text-[#F05858]" : ""
        } cursor-pointer`}
        onClick={index === 1 || index === 2 ? setShowCancelModal : () => {}}
      >
        승인
      </span>
    ),
    processingManager: "김중재",
  }));

  const changeModalHeader = [
    {
      label: "번호",
    },
    { label: "변경상태" },
    { label: "변경일시" },
    { label: "변경사유" },
    { label: "파일" },
    { label: "관리자" },
  ];
  const changeModalData = Array.from({ length: 4 }, () => ({
    number: 6,
    status: "동의",
    dateAndTime: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    reason: "이동자 요청",
    file: (
      <Link href={exponentPagePath}>
        <span className="text-[#429FFF] underline cursor-pointer">이중재</span>
      </Link>
    ),
    manager: "홍길동",
  }));

  const equipmentHeader = [
    { label: "번호" },
    { label: "가입일시" },
    { label: "최근 접속" },
    { label: "구분" },
    { label: "사업자명" },
    { label: "개인/기업" },
    { label: "대표자" },
    { label: "연락처" },
    { label: "계정상태" },
    { label: "가입경로" },
  ];
  const equipmentData = Array.from({ length: 10 }, (_, index) => ({
    number: "10",
    dateAndTime: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    lastAccessed: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>12:32:22</span>
      </div>
    ),
    division: "카카오",
    businessName: "(주)알바트레이닝",
    individualCompany: "기업",
    exponent: (
      <Link
        href={
          index % 2 !== 0
            ? equipmentSecondMainExponentPath
            : equipmentExponentPagePath
        }
      >
        <span className="text-[#429FFF] underline cursor-pointer">이중재</span>
      </Link>
    ),
    contact: "010-1111-2222",
    status: "정상",
    subscriptionPath: "네이버 검색",
  }));

  return {
    membershipManagementHeader,
    membershipManagementData,
    applyForMemebershipHeader,
    applyForMemebershipData,
    completeOrRejectHeader,
    completeOrRejectData,
    changeModalHeader,
    changeModalData,
    equipmentHeader,
    equipmentData,
  };
};

export default Data;
