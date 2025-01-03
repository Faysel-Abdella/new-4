import React from "react";

const FeeManagementGrid = () => {
  const data = [
    {
      product: "미니 (008-003)",
      fees: [40, "5%", "2.00", 60, "8%", "4.80", 1100, "3%", " 33.0"],
    },
    {
      product: "02LC",
      fees: [40, "5%", "2.00", 60, "8%", "4.80", 1100, "3%", "33.0"],
    },
    {
      product: "03W",
      fees: [45, "5%", "2.25", 70, "8%", " 5.60", 1200, "3%", "36.0"],
    },
    {
      product: "06W",
      fees: [45, "5%", " 2.25", 75, "8%", "6.00", 1300, "3%", "39.0"],
    },
    {
      product: "06LC",
      fees: [45, "5%", 2.25, 75, "8%", "6.00", 1300, "3%", "39.0"],
    },
    {
      product: "08W",
      fees: [60, "5%", "3.00", 80, "8%", " 6.40", 1500, "3%", "45.0"],
    },
    {
      product: "10LC",
      fees: [40, "5%", "2.00", 60, "8%", "4.80", 1300, "3%", "39.0"],
    },
    {
      product: "기타 대형",
      fees: [60, "5%", "3.00", 60, "8%", "4.80", 2000, "3%", "60.0"],
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
            <div className=" py-[10px]  border-b-[1px] border-x-[1px] border-b-[#F1F3F6] border-r-[#D4D8DE]">
              {row.product}
            </div>
            {row.fees.map((fee, feeIndex) => (
              <div
                key={feeIndex}
                className={` py-[10px]  border-b-[1px] border-r-[1px] border-b-[#F1F3F6]  ${
                  feeIndex != 8 && feeIndex % 3 == 2 ? "border-r-[#D4D8DE]" : ""
                }`}
              >
                {fee}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeeManagementGrid;
