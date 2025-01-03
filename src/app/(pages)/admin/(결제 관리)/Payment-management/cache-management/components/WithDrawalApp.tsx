import React from "react";
import WithDrawalAppTop from "./WithDrawalAppTop";
import Table from "@/src/components/blocks/tabels/Table";
import {
  CacheWithDrawalATableData,
  CacheWithDrawalHeader,
} from "./CacheTableData";

const WithDrawalApp = () => {
  return (
    <div className="">
      {" "}
      <WithDrawalAppTop />
      <div className="mt-5">
        <Table
          data={CacheWithDrawalATableData}
          header={CacheWithDrawalHeader}
          content={true}
          hasPagination={true}
          title="N건의 게시물이 검색되었습니다"
         
        />
      </div>
    </div>
  );
};

export default WithDrawalApp;
