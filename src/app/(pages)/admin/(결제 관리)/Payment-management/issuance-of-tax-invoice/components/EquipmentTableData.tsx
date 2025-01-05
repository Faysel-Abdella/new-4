import React from "react";

const EquipmentTableData = ({ showModal }: { showModal?: () => void }) => {
  const EquipmentPIHeader = [
    { label: "발행일자" },
    { label: "공급자" },
    { label: "품목" },
    { label: "공급받는자" },
    { label: "공급가액" },
    { label: "세액" },
    { label: "발행 금액" },
    { label: "상태" },
  ];

  const EquipementPTTableData = Array.from({ length: 10 }, (_, index) => ({
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "10,000",
    IssueAmount: "10,000",
    Situation: (
      <span
        onClick={showModal}
        className={`${
          index === 0 ? "text-[#F9616D] underline" : ""
        } cursor-pointer`}
      >
        발행완료
      </span>
    ),
  }));

  return {
    EquipmentPIHeader,
    EquipementPTTableData,
  };
};

export default EquipmentTableData;
