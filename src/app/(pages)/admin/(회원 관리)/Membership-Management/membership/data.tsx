import React from "react";

const data = ({ onClickToRelease }: { onClickToRelease: () => void }) => {
  const membershipHeader = [
    { label: "번호" },
    { label: "구분" },
    { label: "ID" },
    { label: "이름" },
    { label: "휴대폰번호" },
    { label: "제재 기간" },
    { label: "사유" },
    { label: "관리자" },
    { label: "해제하기" },
  ];
  const membershipData = Array.from({ length: 10 }, () => ({
    number: "10",
    division: "장비사업자",
    id: "Fdpd100",
    name: "이중재",
    phone: "01011112222",
    sanctionPeriod: "2024-11-01 ~ 2024-12-01",
    reason: "테스트 아이디",
    manager: "홍길동",
    toRelease: (
      <span
        onClick={onClickToRelease}
        className="text-[#F05858] underline cursor-pointer"
      >
        해제하기
      </span>
    ),
  }));

  return {
    membershipHeader,
    membershipData,
  };
};

export default data;
