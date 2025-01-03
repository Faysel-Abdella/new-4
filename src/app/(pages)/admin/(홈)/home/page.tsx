import { Button } from "@/src/components/blocks/buttons/Button";
import StaticsCard from "@/src/components/blocks/Cards/numberStaticCard";
import StatusStaticCard from "@/src/components/blocks/Cards/statusStaticCard";
import React from "react";
import CustomerInquiry from "./components/CustomerInquiry";
import Chart from "@/src/components/blocks/chart/chart";

import SearchInput from "./components/SearchInput";
import HomeTable from "./components/HomeTable";

const Home = () => {
  const items1 = [
    { amount: "20,000", status: "충전시도" },
    { amount: "20,000", status: "성공" },
    { amount: "20,000", status: "실패" },
    { amount: "20,000", status: "금액" },
  ];
  const items2 = [
    { amount: "20,000", status: "요청" },
    { amount: "20,000", status: "완료" },
    { amount: "20,000", status: "거절" },
  ];
  return (
    <section>
      <header>
        {" "}
        <div className="flex w-full justify-end gap-2">
          <div className="flex gap-2">
            <Button
              disabled={false}
              label="오늘"
              backgroundColor="bg-[#4A4E57]"
              borderRadius="rounded-[10px]"
              textStyle="text-sm text-white "
            />
            <Button
              disabled={false}
              label="이번주"
              backgroundColor="bg-[#FFFFFF]"
              borderRadius="rounded-[10px]"
              textStyle="text-sm text-[#4B4F58]"
            />
            <Button
              disabled={false}
              label="저번주"
              backgroundColor="bg-[#FFFFFF]"
              borderRadius="rounded-[10px]"
              textStyle="text-sm text-[#4B4F58]"
            />
            <Button
              disabled={false}
              label="이번달"
              backgroundColor="bg-[#FFFFFF]"
              borderRadius="rounded-[10px]"
              textStyle="text-sm text-[#4B4F58]"
            />
            <Button
              disabled={false}
              label="지난달"
              backgroundColor="bg-[#FFFFFF]"
              borderRadius="rounded-[10px]"
              textStyle="text-sm text-[#4B4F58]"
            />
            
          </div>
          <SearchInput/>
        </div>
      </header>
      <div className="w-full flex gap-3 mt-5 ">
        <div className="">
          <div className="flex gap-5 w-full">
            <StaticsCard
              title="발주사 가입 수"
              titleContainerStyles="px-[27px] py-[11px]"
              content="3,344"
              titleStyles="font-bold"
              contentContainerStyles="border-t border-[#D9D9D9] px-[30px] py-[18px] gap-2"
              numenatorContentStyles="text-5xl text-[#FF0000]"
              denomenatorContentStyles="text-4xl text-[#333333]"
            />
            <StaticsCard
              title="발주사 가입 수"
              titleContainerStyles="px-[27px] py-[11px]"
              content="3,344"
              titleStyles="font-bold"
              contentContainerStyles="border-t border-[#D9D9D9] px-[30px] py-[18px] gap-2"
              numenatorContentStyles="text-5xl text-[#FF0000]"
              denomenatorContentStyles="text-4xl text-[#333333]"
            />
          </div>
          <div className="flex gap-6 w-full mt-8">
            <StaticsCard
              title="신규 오더 등록"
              titleContainerStyles="px-[17px] py-[11px]"
              content="3,344"
              titleStyles="font-bold"
              contentContainerStyles="border-t border-[#D9D9D9] px-[17px] py-[18px] gap-2"
              numenatorContentStyles="text-3xl text-[#FF0000]"
              denomenatorContentStyles="text-2xl text-[#333333]"
            />
            <StaticsCard
              title="신규 오더 등록"
              titleContainerStyles="px-[17px] py-[11px]"
              content="3,344"
              titleStyles="font-bold"
              contentContainerStyles="border-t border-[#D9D9D9] px-[17px] py-[18px] gap-2"
              numenatorContentStyles="text-3xl text-[#FF0000]"
              denomenatorContentStyles="text-2xl text-[#333333]"
            />
            <StaticsCard
              title="신규 오더 등록"
              titleContainerStyles="px-[17px] py-[11px]"
              content="3,344"
              titleStyles="font-bold"
              contentContainerStyles="border-t border-[#D9D9D9] px-[17px] py-[18px] gap-2"
              numenatorContentStyles="text-3xl text-[#FF0000]"
              denomenatorContentStyles="text-2xl text-[#333333]"
            />
          </div>
          <div className="w-full mt-8">
            <StatusStaticCard
              title="충전 현황"
              items={items1}
              titleStyles="font-bold"
              titleContainerStyles="px-[17px] py-[11px]"
              contentContainerStyles="w-full justify-around py-[18px] text-lg "
              contentStyles="text-2xl text-[#333333]"
            />
            <div className="w-full mt-8">
              <StatusStaticCard
                title="충전 현황"
                items={items2}
                titleStyles="font-bold"
                titleContainerStyles="px-[17px] py-[11px]"
                contentContainerStyles="w-full justify-around py-[18px] text-lg "
                contentStyles="text-2xl text-[#333333]"
              />
            </div>
            <div className="w-full mt-8">
              <CustomerInquiry
                title="고객문의"
                titleStyles="font-bold"
                titleContainerStyles="px-[17px] py-[11px]"
              />
            </div>
          </div>
        </div>
        <div className=" w-full  ">
          <div className="rounded-[10px]  bg-white ">
            <div className="border-b-1 px-[17px] py-[11px]">
              <h3 className="font-bold">가입 현황</h3>
            </div>
            <div className="py-[30px]">
              <Chart />
            </div>
            <HomeTable/>
          </div>
          
         
          
        </div>
       
      </div>
    </section>
  );
};

export default Home;
