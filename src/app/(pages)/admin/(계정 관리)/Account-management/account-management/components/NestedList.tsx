import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import PlusIcon from "../../../../../../assets/plus.svg";
import NestedNav from "./NestedNav";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const data = [
    {
      name: "경영관리본부",
      children: [
        {
          name: "경영관리실",
          children: [
            { name: "- 재경팀" },
            { name: "- 총무팀" },
            { name: "- 인사팀" },
          ],
        },
      ],
    },
    {
      name: "서비스개발본부",
      children: [{ name: "" }],
    },
    {
      name: "사업본부",
      children: [
        { name: "- 서비스기획팀" },
        { name: "- 마케팅팀" },
        { name: "- 영업팀" },
      ],
    },
  ];
  const data2 = [
    {
      name: "미소속",
      children: [{ name: "" }],
    },
  ];
  const data3 = [
    {
      name: "미소속",
      children: [{ name: "" }],
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className=" w-[227px] h-screen bg-white rounded-[10px]">
        {/* Sidebar header */}
        <div className="flex items-center justify-between p-2 dark:border-gray-700">
          <div className="px-[10px] py-[8px] gap-2 flex justify-center items-center rounded-[4px] item w-full bg-[#404251] ">
            <Image src={PlusIcon.src} alt="+" />
            <span className="text-[16px] text-white font-[700]">
              그룹 추가하기
            </span>
          </div>
        </div>

        {/* Sidebar content */}
        <nav className="p-4 overflow-y-auto">
          <NestedNav navLinks={data} />
        </nav>

        <div className="p-4 border-b-1">
          <NestedNav navLinks={data2} />
        </div>

        <div className="p-4">
          <NestedNav navLinks={data3} />
        </div>
      </div>

      {/* Overlay for smaller screens */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 z-0 bg-black opacity-50 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
