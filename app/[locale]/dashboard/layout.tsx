"use client";
import { SidebarMenu } from "@/widgets/sidebar";

import { ReactNode } from "react";
import { DashboardContainer } from "@/widgets/containers";
import WithAuth from "@/shared/hocs/with-auth";

export default WithAuth(function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardContainer>
      <SidebarMenu />
      <div
        style={{
          background: "#111418",
          width: "100%",
          overflowY: "scroll",
        }}>
        {children}
      </div>
    </DashboardContainer>
  );
});
