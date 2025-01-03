"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import Table from "@/src/components/blocks/tabels/Table";
import React, { useState } from "react";
import data from "./data";
import Modal from "@/src/components/blocks/Modals/Modal";
import { useDisclosure } from "@nextui-org/react";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import TextInput from "@/src/components/blocks/inputs/Input";

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

  const [radioGroups, setRadioGroups] = useState({
    group1: "",
    group2: "",
    group3: "",
  });

  const [radioSecondGroups, setRadioSecondGroups] = useState({
    group1: "",
    group2: "",
    group3: "",
  });

  const handleChange = (group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  };

  const handleSecondRadioChange = (group: string, value: string) => {
    setRadioSecondGroups((prev) => ({ ...prev, [group]: value }));
  };

  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpenForm,
    onOpen: onOpenWithForm,
    onOpenChange: onOpenChangeWithForm,
  } = useDisclosure();

  const { membershipHeader, membershipData } = data({
    onClickToRelease: () => {
      onOpenWithForm();
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
              onPress={() => {}}
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

      {/* <Modal
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
      </Modal> */}

      <Modal
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeWithForm}
        cancelBtnLabel="취소"
        buttonLabel={"제재"}
        modalWidthInPercent="max-w-[40%]"
      >
        <div className=" w-full flex flex-col gap-4 justify-center items-center py-8">
          <div className="flex w-full gap-2">
            <span className="text-[14px] font-[400] text-[#333333] w-[90px]">
              구분
            </span>
            <RadioButton
              options={["장비사업자", "발주사"]}
              selectedValue={radioGroups.group1}
              onChange={(value) => handleChange("group1", value)}
              optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
            />
          </div>

          <div className="flex w-full ">
            <div className="flex w-[80%] gap-2">
              <TextInput
                type={"text"}
                label="대상설정"
                labelWidth="w-[105px]"
                labelColor="text-[#333333]"
                placeholder={""}
              />
              <Button
                label={"아이디 조회"}
                backgroundColor={"bg-[#A3A6AB]"}
                borderRadius={"rounded-[5px]"}
                textStyle={" font-[400] text-[14px] text-white"}
                width="w-[140px]"
                onPress={() => {}}
              />
            </div>
          </div>

          <div className="flex w-full gap-2">
            <span className="text-[14px] font-[400] text-[#333333] w-[90px]">
              상태
            </span>
            <RadioButton
              options={["7일", "30일", "영구"]}
              selectedValue={radioSecondGroups.group1}
              onChange={(value) => handleSecondRadioChange("group1", value)}
              optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
            />
          </div>

          <div className="flex w-full gap-2">
            <TextInput
              type={"text"}
              label="제재사유"
              labelWidth="w-[105px]"
              labelColor="text-[#333333]"
              placeholder={""}
            />
          </div>
        </div>
      </Modal>

      {/* <Modal
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeWithForm}
        buttonLabel={"해제"}
      >
        <div className=" w-full flex justify-center items-center pt-[50px] pb-[30px]">
          <span className="text-[20px] font-[400] text-[#333333] w-[189px] text-center">
            이미 제재된 회원입니다 다시 확인해 주세요
          </span>
        </div>
      </Modal> */}

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
