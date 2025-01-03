import TextModal from "@/src/components/blocks/Modals/TextModal";
import React from "react";

const WaitForShipmentModal = () => {
  return (
    <div className="w-[470px]">
      <TextModal
        title={"발송을 취소하시겠습니까?"}
        enabledButtonLabel={"발송 취소"}
        disabledButtonLabel="닫기"
      />
    </div>
  );
};

export default WaitForShipmentModal;
