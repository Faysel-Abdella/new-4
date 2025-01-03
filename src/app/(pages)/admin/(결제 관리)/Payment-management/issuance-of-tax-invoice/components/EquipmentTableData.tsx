import Link from "next/link";

export const EquipmentPIHeader = [
  { label: "발행일자" },
  { label: "공급자" },
  { label: "품목" },
  { label: "공급받는자" },
  { label: "공급가액" },
  { label: "세액" },
  { label: "발행 금액" },
  { label: "상태" },
];

export const EquipementPTTableData = [
  {
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "10,000",
    IssueAmount: "10,000",
    Situation: (
      <Link href={""} onClick={()=>{ 

      }} className=''>
        발행완료
      </Link>
    ),
    
  },
  {
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "10,000",
    IssueAmount: "10,000",
    Situation: (
      <Link href={""} className="text-sm text-[#F05858] underline">
        발행실패
      </Link>
    ),
  },
  {
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "10,000",
    IssueAmount: "10,000",
    Situation: (
      <Link href={""} className=''>
        발행완료
      </Link>
    ),
  },
  {
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "10,000",
    IssueAmount: "10,000",
    Situation: (
      <Link href={""} className=''>
        발행완료
      </Link>
    ),
  },
  {
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "10,000",
    IssueAmount: "10,000",
    Situation: (
      <Link href={""} className=''>
        발행완료
      </Link>
    ),
  },
  {
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "이10,000",
    IssueAmount: "10,000",
    Situation: (
      <Link href={""} className=''>
        발행완료
      </Link>
    ),
  },
  {
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "10,000",
    IssueAmount: "10,000",
    Situation: (
      <Link href={""} className=''>
        발행완료
      </Link>
    ),
  },
  {
    DateOfPublication: "2023-11-31",
    Provider: "주식회사 NNNN",

    Item: "용역",
    PersonReceivingSupply: "주식회사 NNNN",
    SupplyPrice: "90,000",
    TaxAmount: "10,000",
    IssueAmount: "10,000",
    Situation: (
      <Link href={""} className=''>
        발행완료
      </Link>
    ),
  },
];
