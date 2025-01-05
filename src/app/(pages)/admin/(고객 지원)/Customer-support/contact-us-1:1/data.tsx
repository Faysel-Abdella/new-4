"use client";
import React from "react";
const data = ({ showModal }: { showModal?: () => void }) => {
  const contactUsHeader = [
    { label: "번호" },
    { label: "제목" },
    { label: "구분" },
    { label: "사업자명" },
    { label: "휴대폰번호" },
    { label: "등록일자" },
    { label: "처리일자" },
    { label: "관리자" },
    { label: "상태" },
  ];

  const contactUsData = Array.from({ length: 5 }).map(() => ({
    num: 6,
    title: (
      <span
        onClick={showModal}
        className="text-[14px] text-[#429FFF] font-[400] cursor-pointer underline"
      >
        조회는 어떻게 하나요?
      </span>
    ),
    division: "장비사업자",
    businessName: "사업자명",
    phoneNumber: "01040121146",
    registrationDate: "2023-08-29  20:23:46",
    manager: "이중재",
    processingDate: "2023-08-30  10:11:28",
    situation: "대기",
  }));

  return { contactUsHeader, contactUsData };
};

export default data;
