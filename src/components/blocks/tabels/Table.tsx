/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Table as NextTable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@nextui-org/react";
import { IHeader, ITable } from "./type";
import { Button } from "../buttons/Button";
import { RadioButton } from "../buttons/RadioButton";

const Table = ({
  header,
  data,
  hasPagination = false,
  title = undefined,
  buttonLabel = undefined,
  buttonWidth = "w-[60px]",
  buttonRadius = "rounded-[100px]",
  content = false,
  onClick = () => {},
}: ITable) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="w-full">
      <NextTable
        aria-label="Data Table"
        shadow="none"
        bgcolor="red"
        width={"100%"}
        className="w-full"
        classNames={{
          table: ["border border-[#E6EBF1]"],

          th: [
            "font-[400] text-[14px] bg-[#F1F3F6] text-[#4B505D] h-[43px] first:rounded-none last:rounded-none rounded-none text-center",
          ],
          td: [
            " text-center font-normal text-base rounded-none text-[#A3A6AB] font-[400] text-[14px] ",
          ],
        }}
        topContent={
          <div className="flex flex-col  gap-[28px]">
            <div className="flex justify-between items-center">
              {title ? (
                <div className="font-[400] text-[16px] text-[#333333]">
                  {title}
                </div>
              ) : null}

              {buttonLabel && (
                <div className="ml-auto">
                  <Button
                    label={buttonLabel}
                    backgroundColor={"bg-[#404251]"}
                    width={buttonWidth}
                    borderRadius={buttonRadius}
                    textStyle={"text-[14px] font-[400] text-white"}
                    padding="py-4 px-6"
                    onPress={() => {
                      onClick();
                    }}
                  />
                </div>
                // <button className="bg-[#255DF9] text-white font-[500] text-[14px] rounded-[5px] w-[106px] h-[40px]">
                //   {buttonLabel}
                // </button>
              )}
            </div>
            {content && (
              <div className="flex items-center gap-5">
                <p className="text-[#333333]">선택한 리스트의 상태를</p>
                <RadioButton
                  options={["승인", "거절"]}
                  selectedValue={selectedValue}
                  onChange={(value) => {
                    setSelectedValue(value);
                  }}
                />
                <Button
                  label="승인"
                  backgroundColor="bg-[#4A4E57]"
                  borderRadius="rounded-[4px]"
                  textStyle="text-sm text-white"
                  padding="py-[6px] px-[10px]"
                  width="w-[26px]"
                />
              </div>
            )}
          </div>
        }
        bottomContent={
          <div className="flex w-full justify-center rounded-none mt-8">
            {hasPagination && (
              <Pagination
                classNames={{
                  wrapper: "gap-0 overflow-visible h-8 bg-transparent",
                  item: "w-8 h-8 text-small rounded-none bg-transparent",
                  cursor: "bg-transparent text-[#255DF9] font-bold",
                }}
                page={3}
                total={3}
                onChange={(page) => console.log(page)}
              />
            )}
          </div>
        }
      >
        <TableHeader>
          {header?.map((item: IHeader, index: number) => (
            <TableColumn key={index}>{item.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data?.map((item: any, index: number) => (
            <TableRow
              key={index}
              className="border-b-1 border-[#E6EBF1] border-r-1 m-0"
            >
              {Object.keys(item).map((key: string, index: number) => (
                <TableCell key={index} className="border-r-1 border-[#E6EBF1]">
                  {item[key]} {/* Access the value of the key */}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </NextTable>
    </div>
  );
};

export default Table;
