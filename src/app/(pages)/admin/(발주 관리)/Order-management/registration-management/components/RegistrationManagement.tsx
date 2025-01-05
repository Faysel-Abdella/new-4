'use client'
import React from "react";
import RegistrationManagementTopcontent from "./RegistrationManagementTopcontent";
import Table from "@/src/components/blocks/tabels/Table";
import {
  RegistrationManagementData,
  RegistrationManagementHeader,
} from "./RegistrationManagementTableData";
import { useRouter } from "next/navigation";


const RegistrationManagement = () => {
    const router=useRouter()
    const handleChange=()=>{
        router.push('/admin/Order-management/registration-management/NewOrderRegistration')
    }
  return (
    <div>
      <RegistrationManagementTopcontent />
      <div className="mt-5">
        <Table
          data={RegistrationManagementData}
          header={RegistrationManagementHeader}
          title="N건의 게시물이 검색되었습니다"
          buttonLabel="신규 발주 등록"
          buttonRadius="rounded-[100px]"
          buttonWidth="w-[122px]"
          hasPagination={true}
          onClick={ handleChange}
        />
      </div>
    </div>
  );
};

export default RegistrationManagement;
