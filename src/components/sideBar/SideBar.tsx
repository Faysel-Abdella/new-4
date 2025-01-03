"use client";
import React from "react";
import { ISideBar } from "./type";
import Link from "next/link";
import { Image } from "@nextui-org/react";
import logo from "../../app/assets/logo.svg";
import { routes } from "../utils";
import { usePathname } from "next/navigation";
import { Button } from "../blocks/buttons/Button";

const SideBar = ({ children }: ISideBar) => {
  const routerPathName = usePathname();

  return (
    <div className="flex w-full ">
      <div className="w-[290px] flex flex-col gap-6 max-h-screen sticky top-0 overflow-y-hidden pb-6">
        <div className="flex justify-center items-center py-8 border-[#F4F7FE] border-b-1 ">
          <Image
            className="rounded-none"
            src={logo.src}
            alt="logo"
            width={150}
            height={37}
          />
        </div>
        <div className="flex flex-col gap-6 w-full max-h-full overflow-y-scroll">
          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <Link
              href="/admin/home"
              className={`text-[20px] font-[400] ${
                routerPathName === "/admin/home" ? "text-[#255DF9]" : ""
              }`}
            >
              홈
            </Link>

            {routes?.map((routes, index) => (
              <div
                key={index}
                className="flex justify-center flex-col gap-1 items-center"
              >
                <span className="text-[20px] font-[400]">{routes.title}</span>
                <div className="flex justify-center flex-col gap-0 items-center">
                  {routes?.links.map((link, index) => (
                    <Link
                      key={index}
                      className={`text-[16px] font-[400]  ${
                        routerPathName === link?.path
                          ? "text-[#255DF9]"
                          : "text-[#D9D9D9]"
                      } `}
                      href={link?.path}
                    >
                      {link?.linkName}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Button
              backgroundColor="bg-[#A3A6AB]"
              borderRadius="rounded-[24px]"
              width="w-[70%]"
              textStyle="font-[400] text-[16px]  text-white"
              label="Logout"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#F2F3F6] min-h-screen px-10 py-5">
        {children}
      </div>
    </div>
  );
};

export default SideBar;
