import SideBar from "@/src/components/sideBar/SideBar";
import React from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SideBar>{children}</SideBar>;
}
