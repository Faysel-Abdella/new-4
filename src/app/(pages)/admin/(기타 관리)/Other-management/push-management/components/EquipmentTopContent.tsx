"use client";
import { Button } from "@/src/components/blocks/buttons/Button";
import { RadioButton } from "@/src/components/blocks/buttons/RadioButton";
import DropDown from "@/src/components/blocks/dropdown/DropDown";
import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import React from "react";

const EquipmentTopContent = () => {
  const dropDownOptions = [
    {
      key: "1",
      label: "이름",
    },
    {
      key: "2",
      label: "사업자명",
    },
    {
      key: "3",
      label: "전호번호",
    },
  ];
  const items = ["만원/40분", "만원/반일", "만원/일대", "만원/월대"];
  return (
    <div className="space-y-[20px]">
      <div className="flex gap-[20px]">
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[360px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">
            보유장비
          </span>
          <DropDown
            options={[
              { key: "1", label: "굴착기" },
              { key: "2", label: "굴착기" },
              { key: "3", label: "굴착기" },
            ]}
            defaultSelectedKeys={"1"}
            selectStyles="w-[125px] text-[14px] font-[400] text-[#333333]"
            insideStyles="text-[14px] font-[400] text-[#333333]"
            selectedItemRadius="rounded-[100px]"
          />

          <DropDown
            options={[
              { key: "1", label: "02LC" },
              { key: "2", label: "02LC" },
              { key: "3", label: "02LC" },
            ]}
            defaultSelectedKeys={"1"}
            selectStyles="w-[125px] text-[14px] font-[400] text-[#333333]"
            insideStyles="text-[14px] font-[400] text-[#333333]"
            selectedItemRadius="rounded-[100px]"
          />
        </div>
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[260px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">
            어태치먼트
          </span>
          <DropDown
            options={[
              { key: "1", label: "쁘레카" },
              { key: "2", label: "쁘레카" },
              { key: "3", label: "쁘레카" },
            ]}
            defaultSelectedKeys={"1"}
            selectStyles="w-[125px] text-[14px] font-[400] text-[#333333]"
            insideStyles="text-[14px] font-[400] text-[#333333]"
            selectedItemRadius="rounded-[100px]"
          />
        </div>
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[360px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">
            활동지역
          </span>
          <DropDown
            options={[
              { key: "1", label: "인천광역시" },
              { key: "2", label: "인천광역시" },
              { key: "3", label: "인천광역시" },
            ]}
            defaultSelectedKeys={"1"}
            selectStyles="w-[125px] text-[14px] font-[400] text-[#333333]"
            insideStyles="text-[14px] font-[400] text-[#333333]"
            selectedItemRadius="rounded-[100px]"
          />
          <DropDown
            options={[
              { key: "1", label: "부평구" },
              { key: "2", label: "부평구" },
              { key: "3", label: "부평구" },
            ]}
            defaultSelectedKeys={"1"}
            selectStyles="w-[125px] text-[14px] font-[400] text-[#333333]"
            insideStyles="text-[14px] font-[400] text-[#333333]"
            selectedItemRadius="rounded-[100px]"
          />
        </div>
      </div>
      <div className="flex gap-[30px]">
        <div className="flex  items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[450px]  gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">
            계정 상태
          </span>
          <DropDown
            options={[{ key: "1", label: "굴착기" }]}
            defaultSelectedKeys={"1"}
            selectStyles="w-[105px] text-[14px] font-[400] text-[#333333]"
            insideStyles="text-[14px] font-[400] text-[#333333]"
            selectedItemRadius="rounded-[100px]"
          />
          <div className="bg-[#F2F3F5] w-[94px] h-[44px] rounded-[100px]"></div>
          <span className="text-[14px] font-[400] text-[#333333]">
            년 이상 경력
          </span>
        </div>
        <div className="flex  items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[500px]  gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">구분</span>
          <RadioButton
            options={["임대 (장비+기사)", "스페어 (기사만)", "렌탈 (장비만)"]}
            selectedValue="임대 (장비+기사)"
            onChange={() => {}}
            optionStyles="flex flex-col gap-2 text-[14px] font-[400] text-[#333333]"
          />
        </div>
      </div>
      <div>
        <div className="flex  items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[910px]  gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">
            단가검색
          </span>
          {items.map((item, index) => (
            <div key={index} className="flex gap-[10px] items-center">
              <div className="bg-[#F2F3F5] w-[94px] h-[44px] rounded-[100px]"></div>
              <span className="text-[14px] font-[400] text-[#333333]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  justify-between items-center pr-[30px]">
        <div className="flex   items-center rounded-[100px] bg-white  py-[10px] px-[30px] w-auto max-w-[500px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
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

        <Button
          label={"등록"}
          backgroundColor={"bg-[#404251]"}
          borderRadius={"rounded-full"}
          textStyle={"text-[14px] text-white"}
          width="w-[60px]"
        />
      </div>
    </div>
  );
};

export default EquipmentTopContent;
