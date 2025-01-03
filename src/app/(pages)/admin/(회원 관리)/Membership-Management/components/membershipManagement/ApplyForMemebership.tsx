"use client";
import React from "react";
import { applyForMemebershipHeader } from "../data";
import Table from "@/src/components/blocks/tabels/Table";
import TableModal from "@/src/components/blocks/Modals/TableModal";
import { Button } from "@/src/components/blocks/buttons/Button";
import ModalWrapper from "@/src/components/blocks/Modals/ModalWrapper";
import TextInput from "@/src/components/blocks/inputs/Input";

const ApplyForMemebership = () => {
  const [showCancelModal, setShowCancelModal] = React.useState(false);
  const [showApprovalModal, setShowApprovalModal] = React.useState(false);

  const applyForMemebershipData = [
    {
      number: 4,
      timeAndDate: (
        <div className="flex flex-col justify-center items-center gap-1">
          <span>2023-01-08</span>
          <span>12:32:22</span>
        </div>
      ),
      businessName: <span className="text-[#429FFF] underline">이중재</span>,
      division: "카카오",
      id: "Fdod1",
      exponent: "이중재",
      approval: (
        <div className="flex gap-2 justify-center items-center">
          <Button
            label={"거절"}
            backgroundColor={"bg-[#ABAFB7]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            onPress={() => {
              console.log("거절");
              setShowCancelModal(true);
            }}
            width="w-[46px]"
          />
          <Button
            label={"승인"}
            backgroundColor={"bg-[#4A4E57]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            onPress={() => {
              setShowApprovalModal(true);
            }}
            width="w-[46px]"
          />
        </div>
      ),
    },
    {
      number: 4,
      timeAndDate: (
        <div className="flex flex-col justify-center items-center gap-1">
          <span>2023-01-08</span>
          <span>12:32:22</span>
        </div>
      ),
      businessName: <span className="text-[#429FFF] underline">이중재</span>,
      division: "카카오",
      id: "Fdod1",
      exponent: "이중재",
      approval: (
        <div className="flex gap-2 justify-center items-center">
          <Button
            label={"거절"}
            backgroundColor={"bg-[#ABAFB7]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            onPress={() => {
              setShowCancelModal(true);
            }}
            width="w-[46px]"
          />
          <Button
            label={"승인"}
            backgroundColor={"bg-[#4A4E57]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            onPress={() => {
              setShowApprovalModal(true);
            }}
            width="w-[46px]"
          />
        </div>
      ),
    },
    {
      number: 4,
      timeAndDate: (
        <div className="flex flex-col justify-center items-center gap-1">
          <span>2023-01-08</span>
          <span>12:32:22</span>
        </div>
      ),
      businessName: <span className="text-[#429FFF] underline">이중재</span>,
      division: "카카오",
      id: "Fdod1",
      exponent: "이중재",
      approval: (
        <div className="flex gap-2 justify-center items-center">
          <Button
            label={"거절"}
            backgroundColor={"bg-[#ABAFB7]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            width="w-[46px]"
            onPress={() => {
              setShowCancelModal(true);
            }}
          />
          <Button
            label={"승인"}
            backgroundColor={"bg-[#4A4E57]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            onPress={() => {
              setShowApprovalModal(true);
            }}
            width="w-[46px]"
          />
        </div>
      ),
    },
    {
      number: 4,
      timeAndDate: (
        <div className="flex flex-col justify-center items-center gap-1">
          <span>2023-01-08</span>
          <span>12:32:22</span>
        </div>
      ),
      businessName: <span className="text-[#429FFF] underline">이중재</span>,
      division: "카카오",
      id: "Fdod1",
      exponent: "이중재",
      approval: (
        <div className="flex gap-2 justify-center items-center">
          <Button
            label={"거절"}
            backgroundColor={"bg-[#ABAFB7]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            onPress={() => {
              setShowCancelModal(true);
            }}
            width="w-[46px]"
          />
          <Button
            label={"승인"}
            backgroundColor={"bg-[#4A4E57]"}
            borderRadius={"rounded-[4px]"}
            textStyle={"text-[14px] text-white font-[400]"}
            onPress={() => {
              setShowApprovalModal(true);
            }}
            width="w-[46px]"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <Table
        header={applyForMemebershipHeader}
        data={applyForMemebershipData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />
      {showCancelModal && (
        <TableModal
          content={
            "사업자를 승인하시겠습니까?승인 시 사업자는 서비스 정상 이용이 가능합니다."
          }
          disabledButtonLabel={"취소"}
          enabledButtonLabel={"승인"}
          handleDisabledButton={() => {
            setShowCancelModal(false);
          }}
          handleEnabledButton={() => {}}
          height="h-[218px]"
        />
      )}
      {showApprovalModal && (
        <ModalWrapper height={"h-[265px]"} width={"w-[470px]"}>
          <div className="flex flex-col justify-center items-center gap-10 w-full">
            <span className="font-400 text-[20px]">
              거절 사유를 입력해주세요.
            </span>
            <TextInput
              type={"text"}
              width={"w-full"}
              placeholder={""}
              containerStyle="justify-center items-center"
            />
            <div className="flex gap-3 justify-center items-center">
              <Button
                label={"취소"}
                backgroundColor={"bg-[#A3A6AB]"}
                borderRadius={"rounded-[5px]"}
                textStyle={" font-[400] text-[14px] text-white"}
                width="w-[148px]"
                onPress={() => {
                  setShowApprovalModal(false);
                }}
              />

              <Button
                label={"거절"}
                backgroundColor={"bg-[#4A4E57]"}
                borderRadius={"rounded-[5px]"}
                textStyle={"font-[400] text-[14px] text-white"}
                width="w-[148px]"
              />
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default ApplyForMemebership;
