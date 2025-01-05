const data = ({ showModal }: { showModal?: () => void }) => {
  const faqHeader = [
    { label: "번호" },
    { label: "FAQ 타이틀" },
    { label: "상태" },
    { label: "클릭수" },
    { label: "등록일" },
    { label: "관리자" },
  ];

  const faqData = [
    {
      num: 5,
      title: (
        <span
          onClick={showModal}
          className="underline text-[#429FFF] text-[14px] font-[400]  cursor-pointer cursor-pointer"
        >
          조회는 어떻게 하나요?
        </span>
      ),
      situation: "사용",
      numberOfClicks: 72,
      registrationDate: "2023-08-05",
      manager: "이중재",
    },
    {
      num: 4,
      title: (
        <span
          onClick={showModal}
          className="underline text-[#429FFF] text-[14px] font-[400]  cursor-pointer"
        >
          조회가 안돼요...ㅠㅠ
        </span>
      ),
      situation: "미사용",
      numberOfClicks: 120,
      registrationDate: "2023-07-01",
      manager: "이중재",
    },
    {
      num: 3,
      title: (
        <span
          onClick={showModal}
          className="underline text-[#429FFF] text-[14px] font-[400]  cursor-pointer"
        >
          시간은 어떻게 되나요?
        </span>
      ),

      situation: "사용",
      numberOfClicks: 250,
      registrationDate: "2023-07-01",
      manager: "이중재",
    },
    {
      num: 2,
      title: (
        <span
          onClick={showModal}
          className="underline text-[#429FFF] text-[14px] font-[400]  cursor-pointer"
        >
          옵션은 있나요?
        </span>
      ),

      situation: "사용",
      numberOfClicks: 354,
      registrationDate: "2023-06-05",
      manager: "이중재",
    },
    {
      num: 1,
      title: (
        <span
          onClick={showModal}
          className="underline text-[#429FFF] text-[14px] font-[400]  cursor-pointer"
        >
          내용이 바뀌면 어떻게 하나요?
        </span>
      ),

      situation: "미사용",
      numberOfClicks: 314,
      registrationDate: "2023-05-15",
      manager: "이중재",
    },
  ];
  return { faqHeader, faqData };
};

export default data;
