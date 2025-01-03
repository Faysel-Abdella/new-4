import TextModal from "@/src/components/blocks/Modals/TextModal";
import React from "react";

const CheckModal = () => {
  return (
    <div className="w-[500px]">
      <TextModal
        title={"노출기간이 잘못 설정되었습니다."}
        subTitle="다시 확인해 주세요."
        enabledButtonLabel={"확인"}
      />
    </div>
  );
};

export default CheckModal;
