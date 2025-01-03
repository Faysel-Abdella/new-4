"use client";
import Table from "@/src/components/blocks/tabels/Table";
import React from "react";
import { completeOrRejectData, completeOrRejectHeader } from "../data";

const CompletedOrRejected = () => {
  return (
    <div className="flex flex-col gap-4">
      <Table
        header={completeOrRejectHeader}
        data={completeOrRejectData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />
    </div>
  );
};

export default CompletedOrRejected;
