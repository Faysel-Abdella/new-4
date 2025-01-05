"use client";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
// import TableModal from "@/src/components/blocks/Modals/TableModal";
import React from "react";

const upperData = [
  { label: "상태", content: "대기중" },
  { label: "구분", content: "장비사업자" },
  { label: "사업자명", content: "아산중기" },
  { label: "휴대폰번호", content: "01011112222" },
  { label: "이메일", content: "idid123@aaa.com" },
];
const lowerData = [
  { label: "제목", content: "제목 텍스트 영역" },
  {
    label: "문의 내용",
    content:
      "문의 내용 텍스트 영역 문의 내용 텍스트 영역 문의 내용 텍스트 영역 ",
  },
];

const ModalContent = ({ complete }: { complete: boolean }) => {
  return (
    <div className="flex w-full flex-col text-[14px] gap-[10px]">
      {upperData.map((item, index) => (
        <div key={index} className="flex flex-row items-center gap-[10px]">
          <p className="text-[#A3A6AB] flex justify-start w-[80px]">
            {item.label}
          </p>
          <p className="text-[#333333] w-[232px] flex justify-start ">
            {item.content}
          </p>
        </div>
      ))}
      <div className="h-[1px] bg-[#E4E5EA]"></div>
      {lowerData.map((item, index) => (
        <div key={index} className=" flex items-center  gap-[10px]">
          <p className="text-[#A3A6AB] flex justify-start w-[80px]">
            {item.label}
          </p>
          <p className="text-[#333333] w-[232px] flex justify-start">
            {item.content}
          </p>
        </div>
      ))}
      {!complete ? (
        <div className="flex flex-row items-center gap-[10px]">
          <p className="text-[#A3A6AB] flex justify-start w-[80px]">
            답변 내용
          </p>
          <InputNoLabel inputStyles="h-[80px] w-[232px]" />
        </div>
      ) : (
        <div className="flex flex-row items-center gap-[10px]">
          <p className="text-[#A3A6AB] flex justify-start w-[80px] ">
            답변 내용
          </p>
          <p className="text-[#333333] w-[232px] flex justify-start">
            문의 내용 텍스트 영역 문의 내용 텍스트 영역 문의 내용 텍스트 영역
          </p>
        </div>
      )}
    </div>
  );
};

// const CustomerSupportModal = ({ complete }: { complete: boolean }) => {
//   return (
//     <div className="p-10 w-full">
//       {!complete ? (
//         <TableModal
//           height="h-[513px]"
//           content={<ModalContent complete={complete} />}
//           disabledButtonLabel={"취소"}
//           enabledButtonLabel={"답변"}
//           handleDisabledButton={() => {}}
//           handleEnabledButton={() => {}}
//         />
//       ) : (
//         <TableModal
//           height="h-[473px]"
//           content={<ModalContent complete={complete} />}
//           disabledButtonLabel={""}
//           enabledButtonLabel={"닫기"}
//           handleDisabledButton={() => {}}
//           handleEnabledButton={() => {}}
//         />
//       )}
//     </div>
//   );
// };

export default ModalContent;
