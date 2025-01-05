const data = ({ showModal }: { showModal?: () => void }) => {
  const noticeHeader = [
    { label: "번호" },
    { label: "노출기간" },
    { label: "제목" },
    { label: "상태" },
    { label: "클릭수" },
    { label: "등록일" },
    { label: "관리자" },
  ];

  const noticeData = Array.from({ length: 5 }).map(() => ({
    num: 6,
    exposurePeriod: "2023-08-10 00:00 ~ 2023-09-22 23:59",
    title: (
      <span
        onClick={showModal}
        className="underline text-[#429FFF] text-[14px] font-[400] cursor-pointer"
      >
        나노의 서재 이벤트
      </span>
    ),
    situation: "진행",
    numberOfClicks: 72,
    registrationDate: "2023-08-05",
    manager: "이중재",
  }));

  return { noticeHeader, noticeData };
};

export default data;
