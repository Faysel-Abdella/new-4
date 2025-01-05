import React from "react";
import EditFeeManagementTable from "./EditFeeManagementTable";
import FeeManagementTable from "./FeeManagementTable";

const Excavator = ({ isFeeManagement }: { isFeeManagement: boolean }) => {
  return (
    <>{isFeeManagement ? <FeeManagementTable /> : <EditFeeManagementTable />}</>
  );
};

export default Excavator;
