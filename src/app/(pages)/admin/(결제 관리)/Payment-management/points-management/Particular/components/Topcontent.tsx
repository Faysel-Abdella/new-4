"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import Modal from "@/src/components/blocks/Modals/Modal";
import { useDisclosure } from "@nextui-org/react";

import React, { useState } from "react";

const Topcontent = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [radioGroups, setRadioGroups] = useState({
    group1: "",
    group2: "",
    group3: "",
  });

  const handleChange = (group: string, value: string) => {
    setRadioGroups((prev) => ({ ...prev, [group]: value }));
  };
  const [selecetedValue, setSelectedValue] = useState("");
  return (
    <section>
      <header>
        <div className="flex mt-[40px] justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[500px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">변동일</span>
          <RadioButton
            options={["전체", "설정"]}
            selectedValue={radioGroups.group1}
            onChange={(value) => handleChange("group1", value)}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
          <div className="flex justify-center items-center gap-[5px] text-[#333333]">
            <span className="py-[10px] px-[17px] bg-[#F2F3F5] text-[14px] font-[400] rounded-[100px]">
              2024-01-01
            </span>
            <span>~</span>
            <span className="py-[10px] px-[17px] bg-[#F2F3F5] text-[14px] font-[400] rounded-[100px]">
              2024-01-01
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex mt-5 justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[450px] gap-[24px]">
            <span className="text-[14px] font-[400] text-[#333333]">구분</span>
            <RadioButton
              options={["전체", "충전", "적립", "차감", "사용"]}
              selectedValue={radioGroups.group2}
              onChange={(value) => handleChange("group2", value)}
              optionStyles="flex flex-col gap-12 text-[14px] font-[400] text-[#333333]"
            />
          </div>
          <div>
            <Button
              label="캐시 수동 적립/차감"
              backgroundColor="bg-[#404251]"
              textStyle="text-sm text-[#FFFFFF]"
              borderRadius="rounded-[100px]"
              padding="py-8 px-7"
              onPress={onOpen}
            />
          </div>
        </div>
      </header>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        buttonLabel={"변경"}
        cancelBtnLabel="닫기"
        modalWidthInPercent="max-w-[35%]"
      >
        <div className=" w-full flex justify-center items-center pt-[40px] pb-[10px]">
          <div className="flex  w-full flex-col ">
            <div className="flex items-center gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">구분</p>
              <RadioButton
                options={["적립", "차감"]}
                selectedValue={selecetedValue}
                onChange={(value) => {
                  setSelectedValue(value);
                }}
              />
            </div>
            <div className="flex items-center mt-5 w-full gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">금액</p>
              <div className="w-full">
                <InputNoLabel inputStyles="py-[16px] px-[16px]" />
              </div>
            </div>
            <div className="flex items-center mt-3 w-full gap-5">
              <p className="min-w-[81px] text-sm text-[#333333]">사유</p>
              <div className="w-full">
                <InputNoLabel inputStyles="px-[16px] py-[16px]" />
              </div>
            </div>
            <div className="flex items-center mt-[40px] w-full gap-5">
              <div className="min-w-[81px]"></div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Topcontent;
