import React from "react";
import WithDrawalAppTop from "./WithDrawalAppTop";
import Table from "@/src/components/blocks/tabels/Table";
import {
  CacheWithDrawalATableData,
  CacheWithDrawalHeader,
} from "./CacheTableData";
import { useDisclosure } from "@nextui-org/react";
import Modal from "@/src/components/blocks/Modals/Modal";

const WithDrawalApp = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenSecond,
    onOpen: onOpenSecond,
    onOpenChange: onOpenChangeSecond,
  } = useDisclosure();
  return (
    <div className="">
      {" "}
      <WithDrawalAppTop />
      <div className="mt-5">
        <Table
          data={CacheWithDrawalATableData}
          header={CacheWithDrawalHeader}
          content={true}
          contenBtntOnClick={onOpen}
          hasPagination={true}
          title="N건의 게시물이 검색되었습니다"
        />
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        buttonLabel={"변경"}
        cancelBtnLabel="닫기"
        buttonOnClick={onOpenSecond}
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333] w-[189px] text-center">
            선택한 리스트의 상태를 변경하시겠습니까?
          </span>
        </div>
      </Modal>
      <Modal
        isOpen={isOpenSecond}
        onOpenChange={onOpenChangeSecond}
        buttonLabel={"변경"}
        cancelBtnLabel="닫기"
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333]  text-center">
            상태 및 리스트를 선택해 주세요.
          </span>
        </div>
      </Modal>
    </div>
  );
};

export default WithDrawalApp;
