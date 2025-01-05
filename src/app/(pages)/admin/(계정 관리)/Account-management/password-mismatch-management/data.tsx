const data = ({ onClickToRelease }: { onClickToRelease: () => void }) => {
  const missmatchHeader = [
    { label: "번호" },
    { label: "이름" },
    { label: "ID" },
    { label: "부서" },
    { label: "제재일" },
    { label: "상태" },
  ];

  const missmatchData = [
    {
      num: 3,
      name: "이중재",
      ID: "Ljj1146",
      department: "기획팀",
      sanctionDate: "2023.08.22 22:12:11",
      situation: (
        <span
          onClick={onClickToRelease}
          className="text-main-light-color decoration-main-light-color underline cursor-pointer"
        >
          {"제재 해지"}
        </span>
      ),
    },
    {
      num: 2,
      name: "정대영",
      ID: "Jdy0487",
      department: "마케팅팀",
      sanctionDate: "2023.08.22 22:12:11",
      situation: (
        <span
          onClick={onClickToRelease}
          className="text-main-light-color decoration-main-light-color underline cursor-pointer"
        >
          {"제재 해지"}
        </span>
      ),
    },
    {
      num: 1,
      name: "김아무개",
      ID: "Kimamugae",
      department: "운영팀",
      sanctionDate: "2023.08.22 22:12:11",
      situation: (
        <span
          onClick={onClickToRelease}
          className="text-main-light-color decoration-main-light-color underline cursor-pointer"
        >
          {"제재 해지"}
        </span>
      ),
    },
  ];
  return { missmatchHeader, missmatchData };
};

export default data;
