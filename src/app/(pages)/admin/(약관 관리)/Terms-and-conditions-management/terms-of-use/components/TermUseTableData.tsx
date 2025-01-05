import React from "react";

const TermUseTableData = ({ showModal }: { showModal: () => void }) => {
  const OrderingCompanyHeader = [
    { label: "번호" },
    { label: "제목" },
    { label: "관리자" },
    { label: "처리일자" },
  ];
  const OrderingCompanyTableData = Array.from({ length: 5 }).map(() => ({
    number: 1,

    title: (
      <span
        onClick={showModal}
        className="text-[#429FFF] underline cursor-pointer"
      >
        이용약관 (23.08.30)
      </span>
    ),

    manager: "이중재",
    processdate: "2023-08-30 10:11:28",
  }));
  const EquipmentOperatorHeader = [
    { label: "번호" },
    { label: "제목" },
    { label: "관리자" },
    { label: "처리일자" },
  ];
  const EquipmentOperatorTableData = Array.from({ length: 5 }).map(() => ({
    number: 1,

    title: (
      <span
        onClick={showModal}
        className="text-[#429FFF] underline cursor-pointer"
      >
        이용약관 (23.08.30)
      </span>
    ),

    manager: "이중재",
    processdate: "2023-08-30 10:11:28",
  }));

  return {
    OrderingCompanyHeader,
    OrderingCompanyTableData,
    EquipmentOperatorHeader,
    EquipmentOperatorTableData,
  };
};

export default TermUseTableData;
