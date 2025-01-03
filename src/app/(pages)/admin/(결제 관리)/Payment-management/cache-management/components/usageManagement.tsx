import React from "react";
import UsageMTopcontent from "./usageMTopcontent";
import Table from "@/src/components/blocks/tabels/Table";
import { CacheUsageMeHeader, CacheUsageMTableData } from "./CacheTableData";

const UsageManagement = () => {
  return (
    <div>
      <UsageMTopcontent />
      <div className="mt-5">
        <Table
          data={CacheUsageMTableData}
          header={CacheUsageMeHeader}
          hasPagination={true}
          title="N건의 게시물이 검색되었습니다"
        />
      </div>
    </div>
  );
};

export default UsageManagement;
