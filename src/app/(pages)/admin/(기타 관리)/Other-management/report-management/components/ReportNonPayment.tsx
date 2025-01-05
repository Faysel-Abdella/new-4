"use client";
import React, { useState } from "react";
import ReportNonPaymentTable from "./ReportNonPaymentTable";
import ReportTopContent from "./ReportTopContent";

const ReportNonPayment = () => {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="space-y-[20px]">
      <ReportTopContent
        label1={"등록일"}
        option2={["전체", "대기", "체불확인", "보류"]}
      />
      <div className="w-full bg-white px-[24px] py-[20px] rounded-[5px] space-y-[20px]">
        <p className="text-[16px]">N건의 게시물이 검색되었습니다</p>
        <ReportNonPaymentTable />
        <div className="flex items-center justify-center text-[14px] text-[#4B505D] gap-[20px]">
          {Array.from({ length: 10 }, (_, index) => (
            <p
              key={index}
              onClick={() => setActivePage(index + 1)} // Set active page on click
              className={`cursor-pointer  ${
                activePage === index + 1 ? "text-main-color " : ""
              }`}
            >
              {index + 1}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportNonPayment;
