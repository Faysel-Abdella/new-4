import Link from "next/link";

export const PaymentHistoryHeader = [
  { label: "번호" },
  { label: "결제일시" },
  { label: "구분" },
  { label: "사업자명" },
  { label: "대표자명" },
  { label: "연락처" },
  { label: "결제 금액" },
  { label: "상태" },
];

export const PaymentHTableData = [
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <Link href={""} onClick={()=>{ 

      }} className="text-sm text-[#429FFF] underline">
        결제완료
      </Link>
    ),
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <Link href={""} className="text-sm text-[#F05858] underline">
        결제완료
      </Link>
    ),
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <Link href={""} className="text-sm text-[#429FFF] underline">
        결제완료
      </Link>
    ),
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <Link href={""} className="text-sm text-[#429FFF] underline">
        결제완료
      </Link>
    ),
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <Link href={""} className="text-sm text-[#429FFF] underline">
        결제완료
      </Link>
    ),
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "이01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <Link href={""} className="text-sm text-[#429FFF] underline">
        결제완료
      </Link>
    ),
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <Link href={""} className="text-sm text-[#429FFF] underline">
        결제완료
      </Link>
    ),
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    contact: "01011112222",
    PaymentAmount: "100,000",
    Situation: (
      <Link href={""} className="text-sm text-[#429FFF] underline">
        결제완료
      </Link>
    ),
  },
];
