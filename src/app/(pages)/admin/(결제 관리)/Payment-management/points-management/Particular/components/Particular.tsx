'use client'
import React from "react";
import Topcontent from "./Topcontent";

import { ParticularHeader, ParticularTableData } from "./ParticularTableData";
import Table from "@/src/components/blocks/tabels/Table";

const Particular = () => {
  return (
    <div>
      <Topcontent />
      <div className="mt-5">
        <Table data={ParticularTableData} header={ParticularHeader} hasPagination={true} title="N건의 게시물이 검색되었습니다"/>
      </div>
    </div>
  );
};

export default Particular;
