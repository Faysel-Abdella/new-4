"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import Link from "next/link";
import React from "react";

const data = ({
  exponentPath = "",
  exponentSecondPath = "",
  setEquipmentShowApprovalModal = () => {},
  setEquipmentShowCancelModal = () => {},
  showCancelModal = () => {},
}: {
  exponentSecondPath?: string;
  exponentPath?: string;
  setEquipmentShowApprovalModal?: () => void;
  setEquipmentShowCancelModal?: () => void;
  showCancelModal?: () => void;
}) => {
  const equipmentApplyForMemebershipHeader = [
    { label: "번호" },
    { label: "신청일시" },
    { label: "사업자명" },
    { label: "구분" },
    { label: "ID" },
    { label: "대표자" },
    { label: "승인" },
  ];
  const equipmentApplyForMemebershipData = Array.from(
    { length: 10 },
    (_, index) => ({
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
        <Link href={index % 2 !== 0 ? exponentSecondPath : exponentPath}>
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
            onPress={setEquipmentShowCancelModal}
            width="w-[46px]"
          />
          <Button
            label={"승인"}
            backgroundColor={"bg-[#4A4E57]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            onPress={setEquipmentShowApprovalModal}
            width="w-[46px]"
          />
        </div>
      ),
    })
  );

  const equimentCompleteOrRejectHeader = [
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

  const equipmentCompleteOrRejectData = Array.from(
    { length: 4 },
    (_, index) => ({
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
        <Link href={exponentPath}>
          <span className="text-[#429FFF] underline cursor-pointer">
            이중재
          </span>
        </Link>
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
            index % 2 !== 0 ? "text-[#F05858]" : ""
          } cursor-pointer`}
          onClick={index === 1 || index === 2 ? showCancelModal : () => {}}
        >
          승인
        </span>
      ),
      processingManager: "김중재",
    })
  );

  return {
    equipmentApplyForMemebershipHeader,
    equipmentApplyForMemebershipData,
    equimentCompleteOrRejectHeader,
    equipmentCompleteOrRejectData,
  };
};

export default data;
