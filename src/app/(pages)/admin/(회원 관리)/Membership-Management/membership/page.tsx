"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import Table from "@/src/components/blocks/tabels/Table";
import React from "react";
import data from "./data";
import Modal from "@/src/components/blocks/Modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import ModalWithRadioBtn from "./components/ModalWithRadioBtn";

const Membership = () => {
  const dropDownOptions = [
    {
      key: "1",
      label: "사업자명",
    },
    {
      key: "2",
      label: "사업자명",
    },
    {
      key: "4",
      label: "사업자명",
    },
  ];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenForm,
    onOpen: onOpenWithForm,
    onOpenChange: onOpenChangeWithForm,
  } = useDisclosure();
  const {
    isOpen: isOpenError,
    onOpen: onOpenError,
    onOpenChange: onOpenChangeError,
  } = useDisclosure();

  const { membershipHeader, membershipData } = data({
    onClickToRelease: () => {
      onOpen();
    },
  });
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[450px] gap-[24px]">
            <span className="text-[14px] font-[400] text-[#333333]">
              등록일
            </span>
            <div className="flex gap-3">
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={"1"}
                selectStyles="w-[105px] text-[14px] font-[400] text-[#333333]"
                insideStyles="text-[14px] font-[400] text-[#333333]"
                selectedItemRadius="rounded-[100px]"
                selectContainerStyles="w-[120px]"
              />

              <SearchInput
                placeholder="검색어를 입력해주세요"
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              label={"등록"}
              backgroundColor={"bg-[#404251]"}
              borderRadius={"rounded-[100px]"}
              textStyle={"text-[14px] font-[400] text-white"}
              padding="py-7 px-8"
              onPress={onOpenWithForm}
            />
          </div>
        </div>

        <Table
          header={membershipHeader}
          data={membershipData}
          title="N건의 게시물이 검색되었습니다"
          hasPagination={true}
        />
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        cancelBtnLabel="취소"
        buttonLabel={"해제"}
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333]">
            차단을 해제하시겠습니까?
          </span>
        </div>
      </Modal>

      <ModalWithRadioBtn
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeWithForm}
        onButtonClick={onOpenError}
      />

      <Modal
        isOpen={isOpenError}
        onOpenChange={onOpenChangeError}
        buttonLabel={"해제"}
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333] w-[189px] text-center">
            이미 제재된 회원입니다 다시 확인해 주세요
          </span>
        </div>
      </Modal>

      {/* <Modal
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeWithForm}
        buttonLabel={"해제"}
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333] w-[225px] text-center">
            일치하는 아이디가 없습니다 다시 확인해주세요
          </span>
        </div>
      </Modal> */}
    </div>
  );
};

export default Membership;
