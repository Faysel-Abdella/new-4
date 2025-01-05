const data = () => {
  const AccoutHeader = [
    { label: "번호" },
    { label: "이름" },
    { label: "ID" },
    { label: "상태" },
    { label: "직책/직급" },
    { label: "부서" },
    { label: "이메일" },
    { label: "연락처" },
    { label: "계정권한" },
  ];
  const AccountData = Array.from({ length: 5 }).map(() => ({
    num: 6,
    name: <span className="text-[#429FFF] underline">이중재</span>,
    id: "Fdpd100",
    situation: "사용",
    position: "본부장",
    department: "서비스기획팀",
    email: "nate@nate.com",
    contact: "010-4012-1146",
    accountAuthority: <span className="text-[#429FFF] underline">설정</span>,
  }));
  return {
    AccoutHeader,
    AccountData,
  };
};

export default data;
