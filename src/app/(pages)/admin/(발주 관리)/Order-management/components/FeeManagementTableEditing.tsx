import React from "react";

const FeeManagementGrid = () => {
  const data = [
    {
      product: "미니 (008-003)",
      fees: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
    },
    {
      product: "02LC",
      fees: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
    },
    {
      product: "03W",
      fees: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
    },
    {
      product: "06W",
      fees: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
    },
    {
      product: "06LC",
      fees: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
    },
    {
      product: "08W",
      fees: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
    },
    {
      product: "10LC",
      fees: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
    },
    {
      product: "기타 대형",
      fees: [1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100],
    },
  ];

  return (
    <div className=" bg-white w-full px-[24px] py-[20px] space-y-[20px] rounded-[10px]  ">
      <div>
        <div className="grid grid-cols-10 justify-end text-center text-[14px]">
          <div className=" border-y-[10px] border-x-[5px] border-white w-[142px] "></div>
          <div className="col-span-3  py-[10px] border-y-[10px] border-x-[5px] border-white w-  bg-[#F1F3F6] rounded-[10px]">
            납입
          </div>
          <div className="col-span-3  py-[10px] border-y-[10px] border-x-[5px] border-white  bg-[#F1F3F6] rounded-[10px]">
            일대
          </div>
          <div className="col-span-3  py-[10px] border-y-[10px] border-x-[5px] border-white  bg-[#F1F3F6] rounded-[10px]">
            일대
          </div>
        </div>
        <div className="grid grid-cols-10 text-center text-[14px] bg-[#F1F3F6]">
          <div className=" py-[10px]  border-[1px] border-[#F1F3F6] border-r-[#D4D8DE]">
            제품
          </div>
          {Array(3)
            .fill(["요금", "수수료(%)", "수수료(원)"])
            .flat()
            .map((header, index) => (
              <div
                key={index}
                className={` py-[10px] border-[1px] border-[#F1F3F6]  ${
                  index == 2 || index == 5 ? "border-r-[#D4D8DE]" : ""
                }`}
              >
                {header}
              </div>
            ))}
        </div>

        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid grid-cols-10 text-center text-[14px] text-[#A3A6AB] bg-white `}
          >
            <div className="flex items-center justify-center py-[10px]  border-b-[1px] border-x-[1px] border-b-[#F1F3F6] border-r-[#D4D8DE]">
              {row.product}
            </div>
            {row.fees.map((fee, feeIndex) => (
              <div
                key={feeIndex}
                className={`flex items-center border-b-[1px] border-r-[1px] border-b-[#F1F3F6]  ${
                  feeIndex != 8 && feeIndex % 3 == 2 ? "border-r-[#D4D8DE]" : ""
                }`}
              >
                <div
                  className={`mx-[10px] my-2 w-full  py-[8px] px-[16px] text-left border-[1px] border-[#F1F3F6] rounded-[8px]`}
                >
                  {fee}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeManagementGrid;
