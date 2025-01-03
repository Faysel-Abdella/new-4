"use client";
import React from "react";
import PushRegistration from "../components/PushRegistration";
import { Button } from "@/src/components/blocks/buttons/Button";
import { useRouter } from "next/navigation";

const PushRegistrationPage = () => {
  const routes = useRouter();
  const handleNavigation = () => {
    routes.push(
      "/admin/Other-management/push-management/registration/orderingCompany"
    );
  };
  return (
    <div className="space-y-[20px]">
      <PushRegistration handleClick={handleNavigation} />
      <div className="flex items-center justify-center gap-[16px]">
        <Button
          label={"취소"}
          backgroundColor={"bg-[#A3A6AB]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
        <Button
          label={"등록"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={"text-white w-[148px]"}
        />
      </div>
    </div>
  );
};

export default PushRegistrationPage;
