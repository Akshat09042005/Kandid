"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex flex-row bg-neutral-200">
      <div
        className={`z-40 min-h-screen sticky top-0 transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="flex flex-col w-full z-30">
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
        <div>{children}</div>
      </div>3
    </div>
  );
}
