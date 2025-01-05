"use client";
import Table from "@/src/components/blocks/tabels/Table";
import React from "react";

import { useDisclosure } from "@nextui-org/react";
import LocationAndCondtionTableData from "./LocationAndCondtionTableData";
import { RegistrationModal } from "./RegistrationModal";

const LocationInformationTermsAndConditions = () => {
  const {
    isOpen: isOpenForm,
    onOpen: onOpenWithForm,
    onOpenChange: onOpenChangeWithForm,
  } = useDisclosure();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { LocationInformationTermsHeader, LocationInformationTermsTableData } =
    LocationAndCondtionTableData({ showModal: onOpenWithForm });

  return (
    <div className="mt-[20px]">
      <Table
        data={LocationInformationTermsTableData}
        header={LocationInformationTermsHeader}
        hasPagination={true}
        buttonLabel="등록"
        buttonRadius="rounded-[100px]"
        buttonWidth="w-[66px]"
        onClick={onOpen}
        title=""
      />
      <RegistrationModal isOpen={isOpen} onOpenChange={onOpenChange} />;
      <RegistrationModal
        isOpen={isOpenForm}
        onOpenChange={onOpenChangeWithForm}
        value="제 2조 (약관의 효력 및 변경)
 ① 본 약관은 본 서비스를 이용하고자 하는 모든 고객을 대상으로 합니다.
 ② 본 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로 고객에게 
공시하고, 이에 동의한 고객이 본 서비스에 가입함으로써 효력이 발생합니다.
③ 회사는 필요하다고 인정되면 본 약관을 변경할 수 있으며, 회사가 약관을 변경할 때에는 적용일자와 변경사유를 구체적으로 기재하여 제 2항과 같은 방법으로그 적용일자 7일 전부터 공지합니다. 다만, 이용자에게 불리한 약관을 변경할 때에는 그 적용일자 30일 전부터 공지하며, 이메일(E-mail)을 통해 이용자에게 개별통지 합니다. 단, 이용자가 연락처를 기재하지 않았거나,  변경 후 수정하지 않아 개별통지가 어려우면 본 항의 공지를 개별통지한 것으로 간주합니다.
④ 회사가 제 3항에 따라 변경약관을 공지하거나 통지할 때 약관변경 적용일까지거부의사를 표시하지 않으면 약관의 변경에 동의한 것으로 간주한다는 내용을 이용자에게 통지하였음에도 이용자가 구체적으로 약관 변경에 거부의사를 표시하지 않으면 서비스 제공자는 이용자가 변경약관에 동의한 것으로 간주합니다. 이용자는 변경된 약관사항에 동의하지 않으면 서비스 이용을 중단하고 이용계약을해지할 수 있습니다."
      />
    </div>
  );
};

export default LocationInformationTermsAndConditions;
