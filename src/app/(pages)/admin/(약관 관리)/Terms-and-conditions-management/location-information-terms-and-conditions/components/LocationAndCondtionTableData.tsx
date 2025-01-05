import React from "react";

const LocationAndCondtionTableData = ({
  showModal,
}: {
  showModal?: () => void;
}) => {
  const LocationInformationTermsHeader = [
    { label: "번호" },
    { label: "제목" },
    { label: "관리자" },
    { label: "처리일자" },
  ];
  const LocationInformationTermsTableData = Array.from({ length: 5 }).map(
    () => ({
      number: 1,
      title: (
        <span
          onClick={showModal}
          className="text-[#429FFF] underline cursor-pointer"
        >
          위치정보 이용약관 (23.08.30)
        </span>
      ),

      manager: "이중재",
      processdate: "2023-08-30 10:11:28",
    })
  );
  return {
    LocationInformationTermsHeader,
    LocationInformationTermsTableData,
  };
};

export default LocationAndCondtionTableData;
