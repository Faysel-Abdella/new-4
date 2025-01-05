import React from "react";

const PaymentHTableData = ({
  showFailedModal,
  showSuccessModal,
}: {
  showFailedModal?: () => void;
  showSuccessModal?: () => void;
}) => {
  const PaymentHistoryHeader = [
    { label: "번호" },
    { label: "결제일시" },
    { label: "구분" },
    { label: "사업자명" },
    { label: "대표자명" },
    { label: "연락처" },
    { label: "결제 금액" },
    { label: "상태" },
  ];

  const PaymentHistoryData = Array.from({ length: 10 }, (_, index) => ({
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <span
        onClick={index === 1 ? showFailedModal : showSuccessModal}
        className={`text-sm ${
          index === 1 ? "text-[#F05858]" : "text-[#429FFF]"
        }  underline cursor-pointer`}
      >
        결제완료
      </span>
    ),
  }));
  return {
    PaymentHistoryHeader,
    PaymentHistoryData,
  };
};

export default PaymentHTableData;
