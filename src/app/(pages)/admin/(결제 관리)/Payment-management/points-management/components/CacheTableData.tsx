
import Checkbox from "@/src/components/blocks/checkbox/Checkbox";
import Link from "next/link";

export const CacheBalanceHeader = [
  { label: "번호" },
  { label: "가입일시" },
  { label: "구분" },
  { label: "사업자명" },
  { label: "대표자명" },
  { label: "연락처" },
  { label: "계정상태" },
  { label: "잔액 캐시" },
];

export const CacheBalanceTableData = [
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: (
      <Link
        href={"/admin/Payment-management/points-management/Particular"}
        className="text-sm text-[#429FFF] underline"
      >
        홍길동
      </Link>
    ),
    contact: "01011112222",
    AccountStatus: "정상",
    BalanceCash: "20,000",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: (
      <Link
        href={"/admin/Payment-management/points-management/Particular"}
        className="text-sm text-[#429FFF] underline"
      >
        홍길동
      </Link>
    ),
    contact: "01011112222",
    AccountStatus: "정상",
    BalanceCash: "20,000",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: (
      <Link
        href={"/admin/Payment-management/points-management/Particular"}
        className="text-sm text-[#429FFF] underline"
      >
        홍길동
      </Link>
    ),
    contact: "01011112222",
    AccountStatus: "정상",
    BalanceCash: "20,000",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: (
      <Link
        href={"/admin/Payment-management/points-management/Particular"}
        className="text-sm text-[#429FFF] underline"
      >
        홍길동
      </Link>
    ),
    contact: "01011112222",
    AccountStatus: "정상",
    BalanceCash: "20,000",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: (
      <Link
        href={"/admin/Payment-management/points-management/Particular"}
        className="text-sm text-[#429FFF] underline"
      >
        홍길동
      </Link>
    ),
    contact: "01011112222",
    AccountStatus: "정상",
    BalanceCash: "20,000",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: (
      <Link
        href={"/admin/Payment-management/points-management/Particular"}
        className="text-sm text-[#429FFF] underline"
      >
        홍길동
      </Link>
    ),
    contact: "이01011112222",
    AccountStatus: "정상",
    BalanceCash: "20,000",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: (
      <Link
        href={"/admin/Payment-management/points-management/Particular"}
        className="text-sm text-[#429FFF] underline"
      >
        홍길동
      </Link>
    ),
    contact: "01011112222",
    AccountStatus: "정상",
    BalanceCash: "20,000",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),

    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: (
      <Link
        href={"/admin/Payment-management/points-management/Particular"}
        className="text-sm text-[#429FFF] underline"
      >
        홍길동
      </Link>
    ),
    contact: "01011112222",
    AccountStatus: "정상",
    BalanceCash: "20,000",
  },
];
export const CacheUsageMeHeader = [
  { label: "번호" },
  { label: "가입일시" },
  { label: "상태" },
  { label: "구분" },
  { label: "사업자명" },
  { label: "대표자명" },
  { label: "사유" },
  { label: "금액" },
];

export const CacheUsageMTableData = [
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "적립",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    Reason: "이벤트 적립",
    DepositorName: "0",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0",
  },
  {
    number: "7",
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0",
  },
];
export const CacheWithDrawalHeader = [
  {
    label: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
  },
  { label: "신청일시" },
  { label: "상태" },
  { label: "구분" },
  { label: "사업자명" },
  { label: "대표자명" },
  { label: "은행명" },
  { label: "예금주명" },
  { label: "계좌번호" },
];

export const CacheWithDrawalATableData = [
  {
    Checkbox: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "적립",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0",
    AccountNumber: "0000000000",
  },
  {
    Checkbox: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "0홍길동",
    AccountNumber: "0000000000",
  },
  {
    Checkbox: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "홍길동0",
    AccountNumber: "0000000000",
  },
  {
    CheckBox: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "홍길동0",
    AccountNumber: "0000000000",
  },
  {
    CheckBox: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "홍길동",
    AccountNumber: "0000000000",
  },
  {
    CheckBox: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "홍길동",
    AccountNumber: "0000000000",
  },
  {
    CheckBox: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "홍길동",
    AccountNumber: "0000000000",
  },
  {
    CheckBox: (
      <Checkbox
        Label={false}
        options={[""]}
        selectedValues={[""]}
        onChange={() => {}}
      />
    ),
    timeAndDate: (
      <div className="flex flex-col justify-center items-center gap-1">
        <span>2023-01-08</span>
        <span>00:00</span>
      </div>
    ),
    Situation: "발주사",
    Division: "(장비사업자",
    BusinessName: "(주)알바트레이팅",
    RepresentativeName: "홍길동",
    BankName: "이벤트 적립",
    DepositorName: "홍길동",
    AccountNumber: "0000000000",
  },
];
