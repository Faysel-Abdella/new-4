import React from "react";

const PrivacyPolicyData = ({ showModal }: { showModal?: () => void }) => {
  const PrivacyPolicyHeader = [
    { label: "번호" },
    { label: "제목" },
    { label: "관리자" },
    { label: "처리일자" },
  ];
  const PrivacyPolicaTableData = Array.from({ length: 5 }).map(() => ({
    number: 1,

    title: (
      <span
        onClick={showModal}
        className="text-[#429FFF] underline cursor-pointer"
      >
        개인정보 처리방침 v0.5
      </span>
    ),

    manager: "이중재",
    processdate: "2023-08-30 10:11:28",
  }));

  const EquipmentBusinessHeader = [
    { label: "번호" },
    { label: "제목" },
    { label: "관리자" },
    { label: "처리일자" },
  ];
  const EquipmentBusinessTableData = Array.from({ length: 5 }).map(() => ({
    number: 1,

    title: (
      <span
        onClick={showModal}
        className="text-[#429FFF] underline cursor-pointer"
      >
        개인정보 처리방침 v0.5
      </span>
    ),

    manager: "이중재",
    processdate: "2023-08-30 10:11:28",
  }));

  return {
    PrivacyPolicyHeader,
    PrivacyPolicaTableData,
    EquipmentBusinessHeader,
    EquipmentBusinessTableData,
  };
};

export default PrivacyPolicyData;
