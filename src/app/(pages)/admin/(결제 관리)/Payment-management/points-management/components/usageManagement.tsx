import React from "react";
import Table from "@/src/components/blocks/tabels/Table";
import { CacheUsageMeHeader, CacheUsageMTableData } from "./CacheTableData";
import UsageMTopcontent from "./usageMTopcontent";

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
