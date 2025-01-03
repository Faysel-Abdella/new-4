'use client'
import { RadioButton } from '@/src/components/blocks/buttons/RadioButton';
import { SearchInput } from '@/src/components/blocks/inputs/SearchInput';
import React, { useState } from 'react'

const PaymentHTopContent = () => {
    const [radioGroups, setRadioGroups] = useState({
        group1: "",
        group2: "",
        group3: "",
      });
    
      const handleChange = (group: string, value: string) => {
        setRadioGroups((prev) => ({ ...prev, [group]: value }));
      };
      
  return (
    <section>
      <header>
        <div className="flex mt-1 justify-center items-center rounded-[100px] bg-[white] py-[10px] px-[30px] w-auto max-w-[500px] gap-2">
          <span className="text-[14px] font-[400] text-[#333333]">결제일</span>
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

        <div className="flex mt-5 justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[450px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">상태</span>
          <RadioButton
            options={["전체", "결제 완료", "결제 실패"]}
            selectedValue={radioGroups.group2}
            onChange={(value) => handleChange("group2", value)}
            optionStyles="flex flex-col gap-12 text-[14px] font-[400] text-[#333333]"
          />
        </div>
        <div className="flex justify-center items-center rounded-[100px] bg-[white] mt-5 py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">검색어</span>

          <div className="flex gap-3 ">
            <SearchInput
              placeholder="검색어를 입력해주세요"
              onClick={() => {}}
            />
          </div>
        </div>
      </header>
    </section>
  )
}

export default PaymentHTopContent