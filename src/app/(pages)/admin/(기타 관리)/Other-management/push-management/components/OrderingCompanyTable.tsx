import React from "react";
import { OrderingCompanyType } from "./type";

const tabs = [
  "번호",
  "가입일시",
  "최근 접속",
  "구분",
  "사업자명",
  "개인/기업",
  "대표자",
  "연락처",
  "계정상태",
  "가입경로",
];

const data: OrderingCompanyType[] = [
  {
    num: 10,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 9,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 8,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 7,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 6,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 5,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 4,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 3,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 2,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
  {
    num: 1,
    registration: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    lastAccessed: {
      date: "2023-01-08",
      time: "12:32:22",
    },
    division: "카카오",
    businessName: "(주)알바트레이팅",
    individualOrCompany: "기업",
    exponent: "홍길동",
    contact: "010-1111-2222",
    accountStatus: "정상",
    subscriptionPath: "네이버 검색",
  },
];

const OrderingCompanyTable = () => {
  return (
    <div className="bg-[white] w-full text-[14px] h-full">
      <div className="grid grid-cols-11 text-center bg-[#F1F3F6]">
        <div className="flex py-[10px] items-center justify-center border-l-[1px] border-l-[#F1F3F6]">
          <input
            type="checkbox"
            className="w-[16px] h-[16px] cursor-pointer "
          />
        </div>
        {tabs.map((title, index) => (
          <div key={index} className={`text-[#4B505D] py-[20px] `}>
            {title}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid grid-cols-11 text-center  text-[#A3A6AB] border-b-[1px] border-b-[#F1F3F6]"
        >
          <div className="flex py-[10px] items-center justify-center border-x-[1px] border-x-[#F1F3F6]">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] cursor-pointer"
            />
          </div>
          <div className="flex py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            {row.num}
          </div>
          <div className="flex flex-col py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            <p>{row.registration.date}</p>
            <p>{row.registration.time}</p>
          </div>
          <div className="flex flex-col py-[10px] items-center justify-center border-r-[1px] border-r-[#F1F3F6]">
            <p>{row.lastAccessed.date}</p>
            <p>{row.lastAccessed.time}</p>
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.division}
          </div>

          <div className="flex items-center justify-center py-[10px]  border-r-[1px] border-r-[#F1F3F6]">
            {row.businessName}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.individualOrCompany}
          </div>
          <div className="flex items-center justify-center py-[10px] underline decoration-main-light-color text-main-light-color cursor-pointer border-r-[1px] border-r-[#F1F3F6]">
            {row.exponent}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.contact}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.accountStatus}
          </div>
          <div className="flex items-center justify-center py-[10px] border-r-[1px] border-r-[#F1F3F6]">
            {row.subscriptionPath}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderingCompanyTable;
