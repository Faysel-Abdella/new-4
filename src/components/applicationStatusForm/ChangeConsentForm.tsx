import React from "react";

const ChangeConsentForm = ({ formTitle }: { formTitle: string }) => {
  return (
    <div>
      <div className="w-[679px] flex flex-col justify-center items-center bg-white gap-4 ">
        <div className="flex justify-center items-center border-b-1 border-[#D9D9D9] py-4 w-full">
          <span className="text-[16px] font-[700]">{formTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default ChangeConsentForm;
