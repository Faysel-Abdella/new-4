import CustomTab from "@/src/components/blocks/tabs/Tabs";
import React from "react";
import OrderingCompanyDetails from "../../components/OrderingCompanyDetails";
import EquipmentBusiness from "../../components/EquipmentBusiness";

const OrderingCompany = () => {
  const Tabs = [
    { title: "채팅 관리", content: <OrderingCompanyDetails /> },
    { title: "안내 문구", content: <EquipmentBusiness /> },
  ];
  return (
    <div className="px-[20] ">
      <CustomTab
        items={Tabs}
        containerPadding="p-[6px]"
        raduis="rounded-[14px]"
        selectedBgColor="bg-[#404251]"
      />
    </div>
  );
};

export default OrderingCompany;
