const data = () => {
  const reportHeader = {
    num: "번호",
    reportDateTime: "신고일시",
    reportor: "신고자",
    orderringCompany: "발주사",
    companyName: "업체명",
    name: "이름",
    equipmentBusinessOperator: "장비사업자",
    equipmentBusinessOperatorCompanyName: "업체명",
    equipmentBusinessOperatorName: "이름",
    reportDetails: "신고내용",
    situation: "상태",
    viewChat: "채팅보기",
  };

  const reportData = Array.from({ length: 10 }, (_, index) => ({
    num: 10 - index,
    reportDateTime: "2023-01-08 12:32:22",
    reportor: "장비사업자",
    companyName: "(주)알바트레이팅",
    name: "홍길동",
    equipmentCompanyName: "아산중기",
    equipmentName: "홍길동",
    reportDetails: "욕을 해요 텍스트 텍스트",
    situation: "진행",
    viewChat: "채팅보기",
  }));
  return { reportHeader, reportData };
};

export default data;
