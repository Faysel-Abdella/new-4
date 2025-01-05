"use client";
import React from "react";
import TopContent from "../TopContent";
import Table from "@/src/components/blocks/tabels/Table";
import data from "../data";
import { useRouter } from "next/navigation";

const Equipment = () => {
  const routes = useRouter();
  const handleNavigation = () => {
    routes.push(
      "/admin/Membership-Management/membership-management/equipmentApplicationStatus"
    );
  };

  const { equipmentData, equipmentHeader } = data({
    equipmentSecondMainExponentPath:
      "/admin/Membership-Management/membership-management/equipmentSecondMainExponent",
    equipmentExponentPagePath:
      "/admin/Membership-Management/membership-management/equipmentMainExponent",
  });

  return (
    <div className="flex flex-col gap-4">
      <TopContent
        onPressExcelButton={() => {}}
        onPressLinkButton={handleNavigation}
      />
      <Table
        header={equipmentHeader}
        data={equipmentData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />
    </div>
  );
};

export default Equipment;
