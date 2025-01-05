"use client";
import Table from "@/src/components/blocks/tabels/Table";
import React, { useState } from "react";

import { Image, useDisclosure } from "@nextui-org/react";
import Data from "./data";
import Modal from "@/src/components/blocks/Modals/Modal";
import ChatModal from "@/src/components/blocks/chat/chatModal";
import contractImage from "../../../../../../../assets/contract.svg";
import invoiceImage from "../../../../../../../assets/invoce.png";
import workReport from "../../../../../../../assets/workReport.png";

import RegistrationImageModal from "../../components/RegistrationImageModal";

const Volunter = () => {
  const [showImage, setShowImage] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenChat,
    onOpen: onOpenChat,
    onOpenChange: opOpenChangeChat,
  } = useDisclosure();
  const {
    isOpen: isOpenRefund,
    onOpen: onOpenRefund,
    onOpenChange: opOpenChangeRefund,
  } = useDisclosure();
  const {
    isOpen: isOpenRefundProcess,
    onOpen: onOpenRefundprocess,
    onOpenChange: opOpenChangeRefundProcess,
  } = useDisclosure();
  const {
    isOpen: isOpenContract,
    onOpen: onOpenContract,
    onOpenChange: opOpenChangeContract,
  } = useDisclosure();
  const {
    isOpen: isOpenApplytoRefund,
    onOpen: onOpenApplytoRefund,
    onOpenChange: opOpenChangeApplytoRefund,
  } = useDisclosure();
  const {
    isOpen: isOpenInvoice,
    onOpen: onOpenInvoice,
    onOpenChange: opOpenChangeInvoice,
  } = useDisclosure();

  const {
    isOpen: isOpenWorkReport,
    onOpen: onOpenWorkReport,
    onOpenChange: onOpenChangeWorkReport,
  } = useDisclosure();
  const { VolunterHeader, VolunetData } = Data({
    setShowApplicationForm: () => onOpen(),
    setShowViewChat: () => onOpenChat(),
    setShowRefundApp: () => onOpenRefund(),
    setShowRefundProcess: () => onOpenRefundprocess(),
    setShowContract: () => onOpenContract(),
    setShowApplyToRefund: () => onOpenApplytoRefund(),
    setShowWorkReport: () => onOpenWorkReport(),
  });
  return (
    <div className="flex flex-col gap-[30px] bg-white py-[20px] px-[24px] rounded-[10px]">
      <div className="flex gap-5">
        <p className="text-sm text-[#80808E]">
          지원자수<span className="text-sm text-[#255DF9]">5</span>
        </p>
        <p className="text-sm text-[#80808E]">
          오더상태<span className="text-sm text-[#255DF9]">배차완료</span>
        </p>
      </div>
      <div className="">
        <Table
          data={VolunetData}
          header={VolunterHeader}
          hasPagination={false}
        />
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        buttonLabel={"닫기"}
        modalWidthInPercent="w-[678px]"
        paddingHorizontal="px-0"
      >
        <div className="w-full">
          <div className="flex justify-center w-full p-5 border-b-1 border-[#D9D9D9]">
            <p className="text-[#333333] font-bold">지원서</p>
          </div>
          <div className="flex px-[40px] flex-col gap-[10px] mt-5">
            <div className="flex gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">장비 정보</p>
              <div className="flex gap-5">
                <div className="flex gap-2">
                  {" "}
                  <p className="text-sm text-[#404251]">굴착기</p>
                  <span>{">"}</span>
                  <p className="text-sm text-[#80808E]">
                    어태치먼트1, 어태치먼트2
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">기사 정보</p>
              <p className="text-sm text-[#404251]">
                홍길동 | 50세 | 20년 | 010-1111-2222
              </p>
            </div>
            <div className="flex gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">지원 금액</p>
              <div className="flex gap-[10px]">
                <p className="text-sm text-[#333333]">60만원 / 일</p>
                <p className="text-sm text-[#333333]">(120만원)</p>
              </div>
            </div>
            <div className="flex gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">지추가 비용</p>
              <p className="text-sm text-[#333333]">텍스트 영역</p>
            </div>
            <div className="flex gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">기타 내용</p>
              <p className="text-sm text-[#333333]">텍스트 영역</p>
            </div>
          </div>
        </div>
      </Modal>
      <ChatModal
        profileName="발주자명"
        senderName="장비사업자명"
        isOpen={isOpenChat}
        onOpenChange={opOpenChangeChat}
        title="채팅보기"
      />
      <Modal
        isOpen={isOpenRefund}
        onOpenChange={opOpenChangeRefund}
        buttonLabel={"닫기"}
        modalWidthInPercent="w-[678px]"
        paddingHorizontal="px-0"
      >
        <div className="w-full">
          <div className="flex justify-center w-full p-5 border-b-1 border-[#D9D9D9]">
            <p className="text-[#333333] font-bold">닫기</p>
          </div>
          <div className="flex px-[40px] flex-col gap-[10px] mt-5">
            <div className="flex gap-5">
              <p className="min-w-[96px] text-sm text-[#333333]">환급 금액</p>
              <p className="text-sm text-[#333333]">60,000원</p>
            </div>
            <div className="flex gap-5">
              <p className="min-w-[96px] text-sm text-[#333333]">
                불발 내용 및 사유
              </p>
              <p className="text-sm text-[#333333]">텍스트 영역</p>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpenRefundProcess}
        onOpenChange={opOpenChangeRefundProcess}
        buttonLabel={"닫기"}
        closeButton={true}
        cancelBtnLabel="취소"
        modalWidthInPercent="w-[678px]"
        paddingHorizontal="px-0"
      >
        <div className="flex flex-col gap-[40px] justify-center p-[40px]  ">
          <div className="flex justify-center">
            {" "}
            <p className="text-[20px] text-[#333333]">환급 처리하시겠습니까?</p>
          </div>
          <div className="flex justify-center">
            {" "}
            <p className="text-[20px] text-[#255DF9]">60,000원</p>
          </div>
        </div>
      </Modal>

      <RegistrationImageModal
        isOpen={isOpenContract}
        onOpenChange={opOpenChangeContract}
        image={contractImage}
      />

      <Modal
        isOpen={isOpenApplytoRefund}
        onOpenChange={opOpenChangeApplytoRefund}
        buttonLabel={"닫기"}
        modalWidthInPercent="w-[678px]"
        paddingHorizontal="px-0"
        buttonOnClick={onOpenInvoice}
      >
        <div className="w-full">
          <div className="flex justify-center w-full p-5 border-b-1 border-[#D9D9D9]">
            <p className="text-[#333333] font-bold">세금계산서</p>
          </div>
          <div className="flex px-[40px] flex-col gap-[10px] mt-5">
            <div className="flex gap-5">
              <p className="min-w-[96px] text-sm text-[#333333]">상태</p>
              <p className="text-sm text-[#333333]">신청완료</p>
            </div>
            <div className="flex gap-5">
              <p className="min-w-[96px] text-sm text-[#333333]">발행요청일</p>
              <p className="text-sm text-[#333333]">2024.12.01</p>
            </div>

            <div className="flex gap-5">
              <p className="min-w-[96px] text-sm text-[#333333]">공급가액</p>
              <p className="text-sm text-[#333333]">600,000원</p>
            </div>

            <div className="flex gap-5">
              <p className="min-w-[96px] text-sm text-[#333333]">세액</p>
              <p className="text-sm text-[#333333]">60,00원</p>
            </div>

            <div className="flex gap-5">
              <p className="min-w-[96px] text-sm text-[#333333]">합계</p>
              <p className="text-sm text-[#333333]">660,000원</p>
            </div>

            <div className="flex gap-5">
              <p className="min-w-[96px] text-sm text-[#333333]">이메일</p>
              <p className="text-sm text-[#333333]">abc123@aaa.com</p>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isOpenInvoice}
        onOpenChange={opOpenChangeInvoice}
        buttonLabel={"닫기"}
        paddingHorizontal="px-0 py-0"
      >
        <div className=" w-full bg-white flex flex-col gap-[20px] justify-center items-center ">
          <p className="text-[16px] pt-[20px] font-[700] text-[#333333] text-center">
            세금계산서
          </p>
          <div className="h-[1px] w-full text-[#000000] flex gap-6 p-4 bg-[#d9d9d9]">
            <span>상태</span>
            <span>발행완료</span>
          </div>

          <Image
            src={invoiceImage.src}
            alt="invoice"
            width={358}
            height={512}
            className="w-[358px] h-[512px]"
          />
        </div>
      </Modal>

      <Modal
        isOpen={isOpenWorkReport}
        onOpenChange={onOpenChangeWorkReport}
        buttonLabel={"닫기"}
        modalWidthInPercent="w-[678px]"
        paddingHorizontal="px-0"
      >
        <div className="w-full">
          <div className="flex justify-center w-full p-5 border-b-1 border-[#D9D9D9]">
            <p className="text-[#333333] font-bold">작업일보</p>
          </div>
          <div className="flex w-full px-[40px] flex-col gap-[10px] mt-5">
            <div className="p-4 w-full flex bg-[#F2F3F5] rounded-[4px] text-[#333333]">
              <span className="flex-1 flex justify-center items-center">
                일시
              </span>
              <span className="flex-1 flex justify-center items-center">
                확인여부
              </span>
              <span className="flex-1 flex justify-center items-center">
                {""}
              </span>
            </div>
            <div
              onClick={() => setShowImage(!showImage)}
              className="p-4 cursor-pointer w-full flex  border-b-1 text-[#333333]"
            >
              <span className="flex-1 flex justify-center items-center">
                2024-12-03
              </span>
              <span className="flex-1 flex justify-center items-center text-[#F05858]">
                미완료
              </span>
              <span className="flex-1 flex justify-center items-center text-[#429FFF]">
                확인하기
              </span>
            </div>
            {showImage && (
              <Image
                src={workReport.src}
                alt="invoice"
                width={358}
                height={512}
                className="w-[358px] h-[512px]"
              />
            )}

            <div className="p-4 w-full flex border-b-1 text-[#333333]">
              <span className="flex-1 flex justify-center items-center">
                2024-12-03
              </span>
              <span className="flex-1 flex justify-center items-center">
                완료
              </span>
              <span className="flex-1 flex justify-center items-center text-[#429FFF]">
                확인하기
              </span>
            </div>
            <div className="p-4 w-full flex border-b-1 text-[#333333]">
              <span className="flex-1 flex justify-center items-center">
                2024-12-03
              </span>
              <span className="flex-1 flex justify-center items-center">
                완료
              </span>
              <span className="flex-1 flex justify-center items-center text-[#429FFF]">
                확인하기
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Volunter;
