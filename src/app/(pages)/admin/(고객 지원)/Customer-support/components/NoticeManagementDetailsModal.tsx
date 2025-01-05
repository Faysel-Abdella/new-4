 import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import InputNoLabel from "@/src/components/blocks/inputs/datePickerInput";
import MarkDown from "@/src/components/blocks/markdown/MarkDown";
import Modal from "@/src/components/blocks/Modals/Modal";
import React, { useState } from "react";

const NoticeManagementDetailsModal = ({
  isOpen,
  onOpenChange,
  value,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  value?: string;
}) => {
  const [selectedFirst, setSelectedFirst] = useState("전체");

  const dropDownOptions = [
    {
      key: "1",
      label: "선택",
    },
    {
      key: "2",
      label: "선택",
    },
    {
      key: "4",
      label: "선택",
    },
  ];
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      buttonLabel={"등록"}
      cancelBtnLabel="수정"
      modalWidthInPercent="max-w-[50%]"
    >
      <div className=" w-full flex justify-center items-center pt-[50px] pb-[20px]">
        <div className="flex w-full flex-col gap-[10px]">
          <div className="flex gap-5 w-full">
            <p className="min-w-[81px] text-sm text-[#333333]">제목</p>
            <div className="w-full">
              <InputNoLabel placeholder="제목 텍스트 영역" />
            </div>
          </div>
          <div className="flex gap-2">
            <p className="min-w-[95px] text-sm text-[#333333]">노출기간</p>
            <div className="flex justify-center items-center gap-4">
              <div className="w-[130px]">
                <InputNoLabel type="date" placeholder="시작일" />
              </div>
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={""}
                placeholder="선택"
                selectStyles="w-[105px] text-[14px] font-[400] "
                insideStyles="text-[14px] font-[400]  "
                selectedItemRadius="rounded-[10px] border-1 border-[#E4E5EA] bg-white"
                selectContainerStyles="w-[93px]"
                valueColor="text-[#ABAFB7] custom-color"
              />
              <span className="text-[#404251] text-[14px] font-[400]">시</span>
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={""}
                placeholder="선택"
                selectStyles="w-[105px] text-[14px] font-[400] "
                insideStyles="text-[14px] font-[400]  "
                selectedItemRadius="rounded-[10px] border-1 border-[#E4E5EA] bg-white"
                selectContainerStyles="w-[93px]"
                valueColor="text-[#ABAFB7] custom-color"
              />
              <span className="text-[#404251] text-[14px] font-[400]">
                분 ~
              </span>
            </div>
          </div>
          <div className="flex gap-1 py-4">
            <span className="text-[14px] min-w-[95px] font-[400] text-[#333333]">
              상태
            </span>
            <RadioButton
              options={["진행", "종료"]}
              selectedValue={selectedFirst}
              onChange={(value) => setSelectedFirst(value)}
              optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
            />
          </div>
          <div className="flex gap-2">
            <p className="min-w-[95px] text-sm text-[#333333]">노출기간</p>
            <div className="flex justify-center items-center gap-4">
              <div className="w-[130px]">
                <InputNoLabel type="date" placeholder="종료일" />
              </div>
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={""}
                placeholder="선택"
                selectStyles="w-[105px] text-[14px] font-[400] "
                insideStyles="text-[14px] font-[400]  "
                selectedItemRadius="rounded-[10px] border-1 border-[#E4E5EA] bg-white"
                selectContainerStyles="w-[93px]"
                valueColor="text-[#ABAFB7] custom-color"
              />
              <span className="text-[#404251] text-[14px] font-[400]">시</span>
              <DropDown
                options={dropDownOptions}
                defaultSelectedKeys={""}
                placeholder="선택"
                selectStyles="w-[105px] text-[14px] font-[400] "
                insideStyles="text-[14px] font-[400]  "
                selectedItemRadius="rounded-[10px] border-1 border-[#E4E5EA] bg-white"
                selectContainerStyles="w-[93px]"
                valueColor="text-[#ABAFB7] custom-color"
              />
              <span className="text-[#404251] text-[14px] font-[400]">분</span>
            </div>
          </div>
          <div className="flex w-full gap-5">
            <p className="min-w-[81px] text-sm text-[#333333]">내용</p>
            <div className=" w-full flex flex-col gap-3">
              <Button
                label={"파일 선택"}
                backgroundColor={"bg-[#A3A6AB]"}
                borderRadius={"rounded-[5px]"}
                textStyle={"text-[14px] font-[400] text-white"}
                padding="py-6 px-7"
                width="w-[106px]"
                onPress={() => {}}
              />
              <div className="w-full">
                <MarkDown value={value || ""} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NoticeManagementDetailsModal;
