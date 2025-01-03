// navigations
export const routes = [
  {
    title: "회원 관리",
    links: [
      {
        linkName: "회원관리",
        path: "/admin/Membership-Management/membership-management",
      },
      {
        linkName: "회원 제제",
        path: "/admin/Membership-Management/membership",
      },
    ],
  },
  {
    title: "발주 관리",
    links: [
      {
        linkName: "등록 관리",
        path: "/admin/Order-management/registration-management",
      },
      {
        linkName: "채팅 관리",
        path: "/admin/Order-management/chat-management",
      },
      {
        linkName: "수수료 관리",
        path: "/admin/Order-management/fee-management",
      },
      {
        linkName: "수동 관리",
        path: "/admin/Order-management/manual-management",
      },
    ],
  },

  {
    title: "소개서 관리",
    links: [
      {
        linkName: "장비사업자",
        path: "/admin/Management-of-letters-of-introduction/equipment-business",
      },
    ],
  },

  {
    title: "기타 관리",
    links: [
      {
        linkName: "배너 관리",
        path: "/admin/Other-management/banner-management",
      },
      {
        linkName: "시작팝업 관리",
        path: "/admin/Other-management/startup-pop-up-management",
      },
      {
        linkName: "푸시 관리",
        path: "/admin/Other-management/push-management",
      },
      {
        linkName: "신고 관리",
        path: "/admin/Other-management/report-management",
      },
    ],
  },

  {
    title: "결제 관리",
    links: [
      {
        linkName: "캐시 관리",
        path: "/admin/Payment-management/cache-management",
      },
      {
        linkName: "포인트 관리",
        path: "/admin/Payment-management/points-management",
      },
      {
        linkName: "결제 내역",
        path: "/admin/Payment-management/payment-history",
      },
      {
        linkName: "세금계산서 발행",
        path: "/admin/Payment-management/issuance-of-tax-invoice",
      },
    ],
  },

  {
    title: "계정 관리",
    links: [
      {
        linkName: "계정관리",
        path: "/admin/Account-management/account-management",
      },
      {
        linkName: "비밀번호 불일치 관리",
        path: "/admin/Account-management/password-mismatch-management",
      },
    ],
  },

  {
    title: "고객 지원",
    links: [
      {
        linkName: "공지사항 관리",
        path: "/admin/Customer-support/notice-management",
      },
      {
        linkName: "FAQ 관리",
        path: "/admin/Customer-support/faq-management",
      },
      {
        linkName: "1:1 문의하기",
        path: "/admin/Customer-support/contact-us-1:1",
      },
    ],
  },
  {
    title: "약관 관리",
    links: [
      {
        linkName: "개인정보 처리방침",
        path: "/admin/Terms-and-conditions-management/privacy-policy",
      },
      {
        linkName: "이용약관",
        path: "/admin/Terms-and-conditions-management/terms-of-use",
      },
      {
        linkName: "위치정보 이용약관",
        path: "/admin/Terms-and-conditions-management/location-information-terms-and-conditions",
      },
    ],
  },
];
