"use client";
import React, { useState } from "react";
import OrderingCompanyTable from "./OrderingCompanyTable";
import OrderingTopContent from "./OrderingTopContent";

const OrderingCompanyDetails = () => {
  const [activePage, setActivePage] = useState(1);

  return (
    <div className="space-y-[20px]">
      <OrderingTopContent />
      <div className="bg-white rounded-[10px] px-[24px] py-[20px] space-y-[20px]">
        <div className="flex  items-center justify-between">
          <p>N건의 게시물이 검색되었습니다</p>
        </div>
        <OrderingCompanyTable />
        <div className="flex items-center justify-center text-[14px] text-[#4B505D] gap-[20px]">
          {Array.from({ length: 3 }, (_, index) => (
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

export default OrderingCompanyDetails;
