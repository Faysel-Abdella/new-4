"use client";

import Link from "next/link";

interface DataProps {
  setShowApplicationForm: () => void;
  setShowViewChat: () => void;
  setShowRefundApp: () => void;
  setShowRefundProcess: () => void;
  setShowContract: () => void;
  setShowApplyToRefund: () => void;
  setShowWorkReport: () => void;
}

const Data = ({
  setShowApplicationForm,
  setShowViewChat,
  setShowRefundApp,
  setShowRefundProcess,
  setShowContract,
  setShowApplyToRefund,
  setShowWorkReport,
}: DataProps) => {
  const VolunterHeader = [
    { label: "번호" },
    { label: "지원일시" },
    { label: "지원자명" },
    { label: "대표자" },
    { label: "지원 금액" },
    { label: "채팅보기" },
    { label: "-여부" },
    { label: "환급신청" },
    { label: "환급실행" },
    { label: "계약서" },
    { label: "세금계산서" },
    { label: "작업일보" },
  ];

  const VolunetData = Array.from({ length: 5 }, (_, index) => ({
    number: index + 1,
    dateandtime: (
      <div className="flex justify-center flex-col">
        <p className="text-sm text-[#A3A6AB]">2023-01-08</p>
        <p className="text-sm text-[#A3A6AB]">12:32:22</p>
      </div>
    ),
    applicanName: "(주)알바트레이팅",
    exponent: (
      <Link
        href={
          index % 2 != 0
            ? "/admin/Order-management/registration-management/volunter/applicantnamenterprise"
            : "/admin/Order-management/registration-management/volunter/enterprise"
        }
        className="text-sm text-[#429FFF] underline"
      >
        이중재
      </Link>
    ),
    supportaccount: (
      <span
        className="text-sm text-[#429FFF] cursor-pointer underline"
        onClick={setShowApplicationForm}
      >
        70만원
      </span>
    ),
    viewchat: (
      <span
        className="text-sm cursor-pointer text-[#429FFF] underline"
        onClick={setShowViewChat}
      >
        보기
      </span>
    ),
    selection: index !== 1 ? "-" : "선정",

    requestrefund: (
      <span
        className={`text-sm ${
          index === 3 || index === 4 ? "text-[#F05858]" : "text-[#429FFF]"
        } underline cursor-pointer`}
        onClick={setShowRefundApp}
      >
        {index === 3 || index === 4 ? "N" : "Y"}
      </span>
    ),
    executerefund: (
      <span
        className={`text-sm ${
          index !== 0 ? "text-[#F05858]" : "text-[#429FFF]"
        } text-[#429FFF] underline cursor-pointer`}
        onClick={setShowRefundProcess}
      >
        {index !== 0 ? "N" : "Y"}
      </span>
    ),
    contract:
      index === 1 ? (
        <span
          onClick={setShowContract}
          className="text-sm text-[#429FFF] underline cursor-pointer"
        >
          보기
        </span>
      ) : null,
    taxinvoice:
      index === 1 ? (
        <span
          onClick={setShowApplyToRefund}
          className="text-sm text-[#429FFF] underline cursor-pointer"
        >
          보기
        </span>
      ) : null,
    dailyreport:
      index === 1 ? (
        <span
          onClick={setShowWorkReport}
          className="text-sm text-[#429FFF] underline cursor-pointer"
        >
          보기
        </span>
      ) : null,
  }));

  return {
    VolunterHeader,
    VolunetData,
  };
};

export default Data;
