import React from "react";
import EquimentPITopContent from "./EquimentPITopContent";
import { EquipementPTTableData, EquipmentPIHeader } from "./EquipmentTableData";
import Table from "@/src/components/blocks/tabels/Table";

const EquipmentPartnerIssue = () => {
  return (
    <div>
      <EquimentPITopContent />
      <div className="mt-5">
        <Table
          data={EquipementPTTableData}
          header={EquipmentPIHeader}
          title="N건의 게시물이 검색되었습니다(발행완료 N건  |   발행실패 N건)"
          hasPagination={true}
        />
      </div>
    </div>
  );
};

export default EquipmentPartnerIssue;
