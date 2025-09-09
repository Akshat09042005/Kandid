"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  IdCard,
  FlaskConical,
  Mail,
  Linkedin,
  Settings,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: House },
  { href: "/leads", label: "Leads", icon: IdCard },
  { href: "/campaign", label: "Campaign", icon: FlaskConical },
  { href: "/messages", label: "Messages", icon: Mail },
  { href: "/linkedin", label: "Linkedin Accounts", icon: Linkedin },
];

const settingsItems = [
  { href: "/settings", label: "Settings & Billing", icon: Settings },
];

export default function Sidebar({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  const itemClasses = (href: string) =>
    `flex gap-4 py-4 px-3 rounded-xl cursor-pointer items-center text-lg font-secondary text-zinc-800
     ${pathname === href ? "bg-blue-100" : "hover:bg-blue-100"}`;

  return (
    <div className="flex flex-col h-screen bg-neutral-100 shadow-[1px_0px_6px_rgba(0,0,0,0.1)]">
 
      <div className="font-bold border-b px-6 py-6 border-stone-400 font-primary text-2xl">
        {collapsed ? (
          "LB"
        ) : (
          <>
            Link<span className="font-normal text-blue-700">Bird</span>
          </>
        )}
      </div>

      <div className="flex items-center px-5 py-6 gap-4">
        <div className="bg-neutral-300 font-medium rounded-full px-3 py-2">PE</div>
        {!collapsed && (
          <div className="flex flex-col">
            <div className="font-medium font-primary">Kandid</div>
            <div className="font-primary text-sm text-zinc-500 font-medium">
              Personal
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 px-2 py-8">
        <div className="font-primary px-3">{!collapsed && "Overview"}</div>
        <div className="flex flex-col">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className={itemClasses(href)}>
              <Icon size={22} /> {!collapsed && label}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 px-2 py-8 mt-auto">
        <div className="font-primary px-3">{!collapsed && "Settings"}</div>
        {settingsItems.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className={itemClasses(href)}>
            <Icon size={22} /> {!collapsed && label}
          </Link>
        ))}
      </div>
    </div>
  );
}
