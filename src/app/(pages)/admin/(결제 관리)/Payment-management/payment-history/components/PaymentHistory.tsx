"use client";
import React, { useState } from "react";
import PaymentHTopContent from "./PaymentHTopContent";
import Table from "@/src/components/blocks/tabels/Table";
import { PaymentHistoryHeader, PaymentHTableData } from "./PaymentHTableData";
import ModalWrapper from "@/src/components/blocks/Modals/ModalWrapper";
import { Button } from "@/src/components/blocks/buttons/Button";

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
  const [showCompletedModal,setCompletedModal] = useState(false);
  const [showFailedModal,setFailedModal] = useState(false);
  const handlePaymentComplete = () => {
   setCompletedModal(!showCompletedModal);
  };
  const handlePaymetFailed = () => {
   setFailedModal(!showFailedModal);
  };
  return (
    <div>
      <PaymentHTopContent />
      <div className="mt-5">
        <Table
          data={PaymentHTableData}
          header={PaymentHistoryHeader}
          title="전체 NN건 | 결제 완료 NN건 | 결제 실패 NN건"
          hasPagination={true}
        />
      </div>

      {showCompletedModal && (
        <ModalWrapper width="w-[413px]" height="h-[310px]">
          <div className="flex  flex-col ">
            {PaymentCompleteContent.map((item, index) => (
              <div key={index} className="flex mb-[10px] ">
                <p className="min-w-[81px] text-sm text-[#A3A6AB]">
                  {item.title}
                </p>
                <p className="min-w-[81px] text-sm text-[#333333]">
                  {item.description}
                </p>
              </div>
            ))}
            <div className="flex justify-center mt-[40px] ">
              <Button
                label="확인"
                backgroundColor="bg-[#4A4E57]"
                padding="p-[11px]"
                width="w-[148px]"
                textStyle="text-sm text-white"
                borderRadius="rounded-[5px]"
                onPress={handlePaymentComplete}
              />
            </div>
          </div>
        </ModalWrapper>
      )}
      {showFailedModal&& (
        <ModalWrapper width="w-[413px]" height="h-[310px]">
          <div className="flex  flex-col ">
            {PaymentFailedContent.map((item, index) => (
              <div key={index} className="flex mb-[10px] ">
                <p className="min-w-[81px] text-sm text-[#A3A6AB]">
                  {item.title}
                </p>
                <p className="min-w-[81px] text-sm text-[#333333]">
                  {item.description}
                </p>
              </div>
            ))}
            <div className="flex justify-center mt-[40px] ">
              <Button
                label="확인"
                backgroundColor="bg-[#4A4E57]"
                padding="p-[11px]"
                width="w-[148px]"
                textStyle="text-sm text-white"
                borderRadius="rounded-[5px]"
                onPress={handlePaymetFailed}
              />
            </div>
          </div>
        </ModalWrapper>
      )}
      
    </div>
  );
};

export default PaymentHistory;
