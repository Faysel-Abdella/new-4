import { Button } from "@/src/components/blocks/buttons/Button";
import React from "react";
import ArticleDetails from "./ArticleDetails";

const ArticleInformation = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center bg-white gap-3 py-8  px-9 rounded-[10px]">
      <div className="flex w-full justify-end">
        <Button
          label={"장비 추가하기"}
          backgroundColor={"bg-[#404251]"}
          borderRadius={"rounded-[100px]"}
          textStyle={"text-white "}
          width="119px"
        />
      </div>
      <ArticleDetails />
      <ArticleDetails />
      <ArticleDetails />
      <div className="flex gap-3 mt-[40px]">
        <Button
          label={"저장"}
          backgroundColor={"bg-[#4A4E57]"}
          borderRadius={"rounded-[5px]"}
          textStyle={" font-[400] text-[14px] text-white"}
          width="w-[106px]"
          onPress={() => {}}
        />
      </div>
    </div>
  );
};

export default ArticleInformation;
