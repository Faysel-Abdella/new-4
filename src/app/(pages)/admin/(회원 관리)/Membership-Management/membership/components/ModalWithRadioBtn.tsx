import React, { useState } from "react";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import TextInput from "@/src/components/blocks/inputs/Input";
import Modal from "@/src/components/blocks/Modals/Modal";
import { Button } from "@/src/components/blocks/buttons/Button";

const ModalWithRadioBtn = ({
  isOpen,
  onOpenChange,
  onButtonClick,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  onButtonClick?: () => void;
}) => {
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
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      cancelBtnLabel="취소"
      buttonLabel={"제재"}
      modalWidthInPercent="max-w-[40%]"
      buttonOnClick={onButtonClick}
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
  );
};

export default ModalWithRadioBtn;
