"use client";
import React from "react";
import TopContent from "../TopContent";
import Table from "@/src/components/blocks/tabels/Table";
import { useRouter } from "next/navigation";
import data from "../data";

const Ordering = () => {
  const routes = useRouter();
  const handleNavigation = () => {
    routes.push(
      "/admin/Membership-Management/membership-management/applicationStatus"
    );
  };

  const { membershipManagementData, membershipManagementHeader } = data({
    exponentPagePath:
      "/admin/Membership-Management/membership-management/exponent",
    exponentSecondPath:
      "/admin/Membership-Management/membership-management/exponentSecond",
  });

  return (
    <div className="flex flex-col gap-4">
      <TopContent
        onPressExcelButton={() => {}}
        onPressLinkButton={handleNavigation}
      />
      <Table
        header={membershipManagementHeader}
        data={membershipManagementData}
        title="N건의 게시물이 검색되었습니다"
        hasPagination={true}
      />
    </div>
  );
};

export default Ordering;
