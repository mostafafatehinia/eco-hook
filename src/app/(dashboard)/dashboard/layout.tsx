"use client";
import { ReactNode } from "react";

import { Navbar } from "@/components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
