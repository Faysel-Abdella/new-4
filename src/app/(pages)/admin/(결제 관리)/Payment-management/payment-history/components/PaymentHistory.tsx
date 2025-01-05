"use client";
import React from "react";
import PaymentHTopContent from "./PaymentHTopContent";
import Table from "@/src/components/blocks/tabels/Table";
import PaymentHTableData from "./PaymentHTableData";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/src/components/blocks/Modals/Modal";

const PaymentHistory = () => {
  const PaymentCompleteContent = [
    { title: "카드사", description: "ㅇㅇ카드" },
    { title: "카드번호", description: "0000111122223333" },
    { title: "할부", description: "일시불" },
    { title: "결제 금액", description: "100,000" },
    { title: "TID", description: "mdk281ldkcvkzl123" },
  ];
  const PaymentFailedContent = [
    { title: "카드사", description: "ㅇㅇ카드" },
    { title: "카드번호", description: "0000111122223333" },
    { title: "할부", description: "일시불" },
    { title: "결제 금액", description: "100,000" },
    { title: "실패사유", description: "PG사 오류코드 호출" },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenFail,
    onOpen: onOpenFail,
    onOpenChange: onOpenChangeFail,
  } = useDisclosure();

  const { PaymentHistoryData, PaymentHistoryHeader } = PaymentHTableData({
    showSuccessModal: onOpen,
    showFailedModal: onOpenFail,
  });

  return (
    <div>
      <PaymentHTopContent />
      <div className="mt-5">
        <Table
          data={PaymentHistoryData}
          header={PaymentHistoryHeader}
          title="전체 NN건 | 결제 완료 NN건 | 결제 실패 NN건"
          hasPagination={true}
        />
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        buttonLabel={"확인"}
        modalWidthInPercent="max-w-[30%]"
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[10px]">
          <div className="flex w-full flex-col ">
            {PaymentCompleteContent.map((item, index) => (
              <div key={index} className="flex w-full mb-[10px] ">
                <p className="min-w-[81px] text-sm text-[#A3A6AB]">
                  {item.title}
                </p>
                <p className="min-w-[81px] text-sm text-[#333333]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpenFail}
        onOpenChange={onOpenChangeFail}
        buttonLabel={"확인"}
        modalWidthInPercent="max-w-[30%]"
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[10px]">
          <div className="flex w-full flex-col ">
            {PaymentFailedContent.map((item, index) => (
              <div key={index} className="flex full mb-[10px] ">
                <p className="min-w-[81px] text-sm text-[#A3A6AB]">
                  {item.title}
                </p>
                <p className="min-w-[81px] text-sm text-[#333333]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentHistory;
