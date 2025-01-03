import { SearchInput } from "@/src/components/blocks/inputs/SearchInput";
import Table from "@/src/components/blocks/tabels/Table";
import React from "react";
import { CacheBalanceHeader, CacheBalanceTableData } from "./CacheTableData";

const CacheBalanceManagement = () => {
  return (
    <section>
      <header>
        <div className="flex justify-center items-center rounded-[100px] bg-[white] py-[20px] px-[30px] w-auto max-w-[340px] gap-[24px]">
          <span className="text-[14px] font-[400] text-[#333333]">검색어</span>
          <div className="flex gap-3">
            <SearchInput
              placeholder="검색어를 입력해주세요"
              onClick={() => {}}
            />
          </div>
        </div>
      </header>
      <div className="mt-5">
        <Table
          header={CacheBalanceHeader}
          hasPagination={true}
          data={CacheBalanceTableData}
          title="N건의 게시물이 검색되었습니다"
        />
      </div>
    </section>
  );
};

export default CacheBalanceManagement;
